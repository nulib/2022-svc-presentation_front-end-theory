import React from "react";
import Image from "next/image";
import testImg from "../../public/images/npm-clover.jpg";
import CodeSample from "./CodeSample";
import { Col, TwoColLayout } from "./Cols";

const codeSample = `

`;

const BundleTechStack = () => (
  <TwoColLayout>
    <Col>
      <Image src={testImg} />
    </Col>
    <Col>
      <h2>Package</h2>
      <p>
        ESBuild and/or Rollup bundles the code for browser and Node environments
      </p>
      <p>Goals:</p>
      <ul>
        <li>Easy to import in your app</li>
        <li>Easy (maybe fun) to use</li>
      </ul>
      <CodeSample>{codeSample}</CodeSample>
    </Col>
  </TwoColLayout>
);

export default BundleTechStack;
