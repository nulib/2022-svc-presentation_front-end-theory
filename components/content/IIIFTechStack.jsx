import React from "react";
import Image from "next/image";
import testImg from "../../public/images/clover-screenshot-react.png";
import styled from "styled-components";
import CodeSample from "./CodeSample";
import { Col, TwoColLayout } from "./Cols";

const IIIFTechStack = () => (
  <TwoColLayout>
    <Col>
      <Image src={testImg} />
    </Col>
    <Col>
      <h2>@iiif Helpers</h2>
      <ul>
        <li>Normalizes data</li>
        <li>Type safe! (Don't make the UI guess)</li>
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

export default IIIFTechStack;
