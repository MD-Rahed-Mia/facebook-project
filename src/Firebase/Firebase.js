//add data to firestore

import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { getStorage, ref, uploadBytes } from "firebase/storage";

import { app, db } from "./Config";
import uuid from "react-uuid";

//add new company to firestore
function addFirestore(data, setSubmit) {
  try {
    const name = data.name;
    const companyId = name.slice(0, 5);

    addDoc(collection(db, "company-details"), {
      ...data,
      companyId: companyId,
    }).then(() => {
      console.log("save successful.");
      setSubmit(true);
    });
  } catch (error) {
    console.log(error.message);
  }
}

//add new product to firestore
function addProduct(data, setSubmit, companyId) {
  try {
    const productId = uuid();
    addDoc(collection(db, "product"), {
      ...data,
      company: companyId,
      productId: productId
      
    }).then(() => {
      console.log("save successful.");
      setSubmit(true);
    });
  } catch (error) {
    console.log(error.message);
  }
}

//get company from firestore
async function getCompanyDetails(setCompany) {
  try {
    const querySnapshot = await getDocs(collection(db, "company-details"));
    setCompany(querySnapshot.docs.map((item, index) => item.data()));
  } catch (error) {
    console.log(error);
  }
}

//get product from firestore
async function getProduct(setCompany) {
  try {
    const querySnapshot = await getDocs(collection(db, "product"));
    setCompany(querySnapshot.docs.map((item, index) => item.data()));
  } catch (error) {
    console.log(error);
  }
}

//query on selected company
async function selectedCompany(companyCode, setData) {
  const ref = collection(db, "company-details");
  const q = query(ref, where("companyId", "==", companyCode));

  try {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("no data found.");
      setData("");
    } else {
      setData(
        querySnapshot.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })[0]
      );
    }
  } catch (error) {}
}

//update company information
async function updateDetails(data, setSubmit) {
  console.log(data);

  const updateRef = doc(db, "company-details", data.id);
  await updateDoc(updateRef, {
    name: data.name,
    description: data.description,
    address: data.address,
  }).then(() => {
    console.log("update successful");
    setSubmit(true);
  });
}

//upload image for product
function uploadImage(file, name) {
  const storage = getStorage();
  const storageRef = ref(storage, `product-image/${name}`);

  uploadBytes(storageRef, file)
    .then((snapShot) => {
      console.log("upload successful.");
    })
    .catch((err) => console.log(err.message));
}

export {
  addFirestore,
  getCompanyDetails,
  selectedCompany,
  updateDetails,
  addProduct,
  uploadImage,
  getProduct
};
