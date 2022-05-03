import React from "react";
import Image from "next/image";
import testImg from "../../public/images/clover-screenshot-react.png";
import CodeSample from "./CodeSample";
import { Col, TwoColLayout } from "./Cols";

const codeSample = `
import CloverIIIF from 
  '@samvera-labs/clover-iiif'
`;

const ReactTechStack = () => (
  <TwoColLayout>
    <Col>
      <Image src={testImg} />
    </Col>
    <Col>
      <h2>React</h2>
      <ul>
        <li>Develop performant UI components</li>
        <li>Manage state of the application's data</li>
        <li>Event handling</li>
        <li>
          Exports a top-level component, which your application can import
        </li>
      </ul>
      <CodeSample>{codeSample}</CodeSample>
    </Col>
  </TwoColLayout>
);

export default ReactTechStack;
