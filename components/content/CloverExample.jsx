import React from "react";
import dynamic from "next/dynamic";

const CloverIIIF = dynamic(() => import("@samvera/clover-iiif"), {
  ssr: false,
});

const CloverExample = () => {
  return (
    <div>
      <CloverIIIF
        manifestId="https://acw5dcf49d.execute-api.us-east-1.amazonaws.com/dev/items/iiif-image-manifest-1"
        options={{ showTitle: false, showIIIFBadge: false }}
      />
    </div>
  );
};

export default CloverExample;
