import React from "react";
import Image from "next/image";
import testImg from "../../public/images/clover-screenshot-react.png";
import CodeSample from "./CodeSample";
import { Col, TwoColLayout } from "./Cols";

const ReactTechStack = () => (
  <TwoColLayout>
    <Col>
      <Image src={testImg} />
    </Col>
    <Col>
      <h2>React</h2>
      <ul>
        <li>Creates performant UI components</li>
        <li>Manages state of the application's data</li>
        <li>
          Exports a top-level component, which your application can import
        </li>
      </ul>
      <CodeSample>
        import CloverIIIF from '@samvera-labs/clover-iiif'
      </CodeSample>
    </Col>
  </TwoColLayout>
);

export default ReactTechStack;
