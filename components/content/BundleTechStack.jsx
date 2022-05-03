import React from "react";
import Image from "next/image";
import testImg from "../../public/images/npm-clover.jpg";
import CodeSample from "./CodeSample";
import { Col, TwoColLayout } from "./Cols";

const codeSample = `
import BloomIIIF from '@samvera/bloom-iiif';
...
<BloomIIIF collectionId={manifestURI} />
`;

const BundleTechStack = () => (
  <TwoColLayout>
    <Col>
      <Image src={testImg} />
    </Col>
    <Col>
      <h2>ESBuild / Rollup</h2>
      <p>
        Bundles the code for browser and Node environments. Distribute via NPM.
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
