import React from "react";
import Image from "next/image";
import testImg from "../../public/images/clover-screenshot-styled.png";
import CodeSample from "./CodeSample";
import { Col, TwoColLayout } from "./Cols";

const codeStr = `
const ZoomButton = styled("div", {
    display: "flex",
    position: "relative",
    transition: "$all",
  });
`;

const StyledTechStack = () => (
  <TwoColLayout>
    <Col>
      <Image src={testImg} />
    </Col>
    <Col>
      <h2>Stitches</h2>
      <ul>
        <li>CSS / Styling</li>
        <li>CSS-in-JS with near-zero runtime</li>
        <li>Theming</li>
        <li>Framework agnostic</li>
      </ul>
      <CodeSample>{codeStr}</CodeSample>
    </Col>
  </TwoColLayout>
);

export default StyledTechStack;
