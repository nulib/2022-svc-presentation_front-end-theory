import React from "react";
import Image from "next/image";
import testImg from "../../public/images/flat-manifest.jpg";
import { Col, TwoColLayout } from "./Cols";
import styled from "styled-components";

const ImageWrapper = styled.div`
  padding-top: 2rem;
`;

const codeSample = `
// @iiif/presentation-3 types

export interface Canvas
  extends SomeRequired<CanvasTechnical, 
        'id' | 'type'>,
    Partial<CanvasDescriptive>,
    Partial<CanvasStructural>,
    Partial<CanvasLinking> {
  '@context'?: string | string[];
}

type CanvasItemSchemas = 'AnnotationPage';
`;

const IIIFTechStack = () => (
  <TwoColLayout>
    <Col>
      <ImageWrapper>
        <Image src={testImg} />
      </ImageWrapper>
    </Col>
    <Col>
      <h2>@iiif-commons Helpers</h2>
      <p>@iiif-vault</p>
      <ul>
        <li>Normalizes data</li>
        <li>@iiif-vault IIIF Presentation 3.0 default</li>
      </ul>
      <p>@iiif/presentation-3</p>
      <li>Type safe! (Don't make the UI guess)</li>
      {/* <CodeSample>{codeSample}</CodeSample> */}
    </Col>
  </TwoColLayout>
);

export default IIIFTechStack;
