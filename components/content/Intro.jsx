import React from "react";
import Image from "next/image";
import wireframe from "../../public/images/work.png";
import annotated from "../../public/images/work-annotated.png";
import ecosystem from "../../public/images/ecosystem.png";
import { Col, TwoColLayout } from "./Cols";

const Intro = ({ image }) => {
  switch (image) {
    case "wireframe":
      return <Image src={wireframe} />;
    case "annotated":
      return <Image src={annotated} />;
    case "ecosystem":
      return <Image src={ecosystem} />;
    default:
      return <Image src={wireframe} />;
  }
};

export default Intro;
