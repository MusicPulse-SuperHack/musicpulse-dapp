import React from "react";

function AddDetails({ setStep, step }: any) {
  return (
    <div>
      <button onClick={() => setStep(4)}>AddDetails Btn</button>
    </div>
  );
}

export default AddDetails;
