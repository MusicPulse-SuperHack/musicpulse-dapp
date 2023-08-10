// src/Navbar.js
import React from "react";
import { Flex, Image, Spacer, Box, Heading, Link } from "@chakra-ui/react";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <Flex p={4} bg="white" align="center">
      <Image src={logo} alt="logo" width="40px" height="40px" />
      <Box ml="4">
        <Heading
          color="black"
          size="md"
          fontFamily="body"
          fontWeight={700}
          fontSize="24px"
          lineHeight="29.05px"
        >
          MusicPulse
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Link
          fontFamily="body"
          mr={4}
          color="lightBlack"
          fontWeight={500}
          fontSize="20px"
          lineHeight="28.05px"
        >
          Home
        </Link>
        <Link
          fontFamily="body"
          mr={4}
          color="lightBlack"
          fontWeight={500}
          fontSize="20px"
          lineHeight="28.05px"
        >
          My collection
        </Link>
        <Link
          fontFamily="body"
          mr={4}
          color="lightBlack"
          fontWeight={500}
          fontSize="20px"
          lineHeight="28.05px"
        >
          Liked songs
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
