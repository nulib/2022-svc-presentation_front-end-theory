import React from "react";
import Image from "next/image";
import testImg from "../../public/images/npm-clover2.png";
import CodeSample from "./CodeSample";
import { Col, TwoColLayout } from "./Cols";

const codeSample = `
import BloomIIIF 
    from '@samvera/bloom-iiif';
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
      <p>
        <i>Simplify</i> a somewhat tricky process.
      </p>
      <CodeSample>{codeSample}</CodeSample>
    </Col>
  </TwoColLayout>
);

export default BundleTechStack;
