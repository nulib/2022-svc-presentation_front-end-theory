import React from "react";
import Image from "next/image";
import testImg from "../../public/images/clover-screenshot-react.png";
import CodeSample from "./CodeSample";
import { Col, TwoColLayout } from "./Cols";

const ProblemStatement = () => (
  <>
    <h2>IIIF Driven Content</h2>
    <ul>
      <li>(Nearly) everything can be in a Manifest</li>
      <li>
        Our infrastructure <strong>should</strong> be stronger and more
        interoperable.
      </li>
      <li>
        IIIF Presentation 3.0 API provides a ready to use and vetted data
        schema.
      </li>
      <li>Frontend IIIF components benefit others as well as us.</li>
    </ul>
  </>
);

export default ProblemStatement;
