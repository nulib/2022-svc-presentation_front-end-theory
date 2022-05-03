import React from "react";
import Image from "next/image";
import testImg from "../../public/images/clover-screenshot-radix2.png";
import CodeSample from "./CodeSample";
import { Col, TwoColLayout } from "./Cols";

const codeStr = `
type ButtonComponentProps = 
    React
    .ButtonHTMLAttributes<HTMLButtonElement>;

export const Button 
    = (props: ButtonComponentProps) => {
  return <button type="button" 
            role="button" {...props} />;
};
`;

const StyledTechStack2 = () => (
  <div>
    <TwoColLayout>
      <Col>
        <div style={{ marginTop: "2rem" }}>
          <Image src={testImg} />
        </div>
      </Col>
      <Col>
        <h2>Radix UI</h2>
        <ul>
          <li>Unstyled, primitive UI components build on web standards</li>
          <li>WAI-ARIA compliant</li>
          <li>Accessibility out of the box</li>
          <li>Extend with theming/customization</li>
          <li>Framework agnostic</li>
        </ul>
        <CodeSample>{codeStr}</CodeSample>
      </Col>
    </TwoColLayout>
  </div>
);

export default StyledTechStack2;
