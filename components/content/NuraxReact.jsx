import React from "react";
import Image from "next/image";
import testImg from "../../public/images/nurax-react.png";
import { Col, TwoColLayout } from "./Cols";

const NuraxReact = () => (
  <TwoColLayout>
    <div style={{ width: "70%", paddingRight: "2rem" }}>
      <Image src={testImg} />
    </div>
    <div>
      <h2>No!</h2>
      <p>...kinda</p>
    </div>
  </TwoColLayout>
);

export default NuraxReact;
