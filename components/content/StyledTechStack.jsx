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
      <h2>Stitches.dev</h2>
      <p>CSS / Styling for UI</p>
      <ul>
        <li>CSS-in-JS</li>
        <li>Near-zero runtime</li>
        <li>Theming / variants</li>
        <li>Framework agnostic</li>
      </ul>
      <CodeSample>{codeStr}</CodeSample>
    </Col>
  </TwoColLayout>
);

export default StyledTechStack;
