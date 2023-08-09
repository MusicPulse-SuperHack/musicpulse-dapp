import React from "react";

function PreviewDetails({ setStep, step }: any) {
  return (
    <div>
      <button onClick={() => setStep(5)}>PreviewDetails Btn</button>
    </div>
  );
}

export default PreviewDetails;
