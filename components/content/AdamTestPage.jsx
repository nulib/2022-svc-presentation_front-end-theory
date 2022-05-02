import React from "react";
import Image from "next/image";
import testImg from "../../public/images/file_example_JPG_100kB.jpeg";

const AdamTestPage = () => {
  return <Image src={testImg} />;
};

export default AdamTestPage;
