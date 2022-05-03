import React from "react";
import { Label, Metadata, Summary, Thumbnail } from "@samvera/nectar-iiif";
import { pantaloneClassico as manifest } from "../../fixtures/pantalone-classico";

const NectarLabel = (props) => <Label label={manifest.label} {...props} />;
const NectarSummary = ({ as = "span" }) => (
  <Summary as={as} summary={manifest.summary} />
);
const NectarThumbnail = () => <Thumbnail thumbnail={manifest.thumbnail} />;
const NectarMetadata = ({ className }) => (
  <Metadata metadata={manifest.metadata} className={className} />
);

export { NectarLabel, NectarMetadata, NectarSummary, NectarThumbnail };
