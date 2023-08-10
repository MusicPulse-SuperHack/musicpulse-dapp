import React, { useState } from "react";
import Upload from "../components/musician/create-music-nft/Upload";
import AddCover from "../components/musician/create-music-nft/AddCover";
import AddDetails from "../components/musician/create-music-nft/AddDetails";
import PreviewDetails from "../components/musician/create-music-nft/PreviewDetails";
import Pricing from "../components/musician/create-music-nft/Pricing";

function CreateMusicNft() {
  const [step, setStep] = useState(1);
  return (
    <div className="">
      {step === 1 && <Upload setStep={setStep} step={step} />}
      {step === 2 && <AddCover setStep={setStep} />}
      {step === 3 && <AddDetails setStep={setStep} />}
      {step === 4 && <PreviewDetails setStep={setStep} />}
      {step === 5 && <Pricing setStep={setStep} />}
    </div>
  );
}

export default CreateMusicNft;
