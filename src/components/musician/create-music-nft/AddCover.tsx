import React from "react";
import { Flex, Box, Text, Container, Image, Center } from "@chakra-ui/react";
import Disc from "../../../public/assets/disc.png";

function AddCover({ setStep, step }: any) {
  const saveFile = async () => {
    setStep(3);
  };
  return (
    <div className="p-16 h-screen">
      <Text
        fontWeight={400}
        fontSize="24px"
        lineHeight="38.73px"
        paddingTop="20px"
      >
        Create Music NFT
      </Text>
      <div className="pt-36 flex items-center justify-center">
        <div className="relative w-[427px] h-[427px] border-4 border-dashed z-10">
          <img
            src={Disc}
            alt="icon image"
            className="absolute inset-0 m-auto ml-[200px] z-[-1]"
          />
          <p
            className="absolute inset-0 m-auto mt-[250px] text-center font-semibold"
            onClick={saveFile}
          >
            <span className="text-[#2237F1] text-xl font-medium underline">
              AddCover
            </span>{" "}
            your music
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddCover;
