import React from "react";
import Image from "next/image";
import work1 from "../../public/images/work.png";
import work2 from "../../public/images/work-annotated.png";
import { Col, TwoColLayout } from "./Cols";

const Intro = ({ image = "work" }) => {
  return (
    <>{image === "work" ? <Image src={work1} /> : <Image src={work2} />}</>
  );
};

export default Intro;
