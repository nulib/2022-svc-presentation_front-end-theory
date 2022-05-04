import React from "react";
import Image from "next/image";
import explode from "../../public/images/explode.jpg";
import wireframe from "../../public/images/work.png";
import annotated from "../../public/images/work-annotated.png";
import ecosystem from "../../public/images/ecosystem.png";
import { Col, TwoColLayout } from "./Cols";

const Intro = ({ image }) => {
  switch (image) {
    case "explode":
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <Image src={explode} />
          </div>
          <ol>
            <li>One viewer cannot handle it all</li>
            <li>
              <strong>Explode</strong> the manifest, think properties
            </li>
            <li>
              The <em>viewer</em> is the <code>&lt;/main&gt;</code>
            </li>
            <li>IIIF properties translate as DOM elements</li>
          </ol>
        </div>
      );
    case "wireframe":
      return <Image src={wireframe} />;
    case "annotated":
      return <Image src={annotated} />;
    case "ecosystem":
      return <Image src={ecosystem} />;
    default:
      return <Image src={wireframe} />;
  }
};

export default Intro;
