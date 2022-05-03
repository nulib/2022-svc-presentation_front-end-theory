import React from "react";
import dynamic from "next/dynamic";

const BloomIIIF = dynamic(() => import("@samvera/bloom-iiif"), {
  ssr: false,
});

const BloomExample = () => {
  return (
    <div>
      <BloomIIIF collectionId="https://raw.githubusercontent.com/samvera-labs/bloom-iiif/main/public/fixtures/iiif/collection/masks-of-antonio-fava.json" />
    </div>
  );
};

export default BloomExample;
