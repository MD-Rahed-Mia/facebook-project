//add data to firestore

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./Config";

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

//get company details from firestore
async function getCompanyDetails(setCompany) {
  try {
    const querySnapshot = await getDocs(collection(db, "company-details"));
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
      setData("")
    } else {
      setData(querySnapshot.docs.map((item) => item.data())[0]);
    }
  } catch (error) {}
}

export { addFirestore, getCompanyDetails, selectedCompany };
