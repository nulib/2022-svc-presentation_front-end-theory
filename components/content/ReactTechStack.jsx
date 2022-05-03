import React from "react";
import Image from "next/image";
import testImg from "../../public/images/clover-screenshot-react.png";
import CodeSample from "./CodeSample";
import { Col, TwoColLayout } from "./Cols";

const codeSample = `
import CloverIIIF from 
  '@samvera/clover-iiif'
`;

const ReactTechStack = () => (
  <TwoColLayout>
    <Col>
      <Image src={testImg} />
    </Col>
    <Col>
      <h2>React / TypeScript</h2>
      <p>Library of choice to build components</p>
      <ul>
        <li>Manage application state and event handling</li>
        <li>TypeScript (new)</li>
      </ul>
      <p>Exports a top-level component, which your application can import</p>
      <CodeSample>{codeSample}</CodeSample>
    </Col>
  </TwoColLayout>
);

export default ReactTechStack;
