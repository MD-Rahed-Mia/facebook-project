import React from "react";
import "./Toast.scss";

export default function Toast({ setSubmit, submit }) {


  //reset toast after 4000ms
  if (submit) {
    setTimeout(() => {
      setSubmit(false);
    }, 4000);
  }

  return <div className="toast">save successful</div>;
}
