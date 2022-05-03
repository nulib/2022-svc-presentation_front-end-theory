import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import material from "react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic";
import SlidePage from "../layouts/SlidePage";
import Cover from "./Cover";
import SpeakerNotes from "./SpeakerNotes";
import Step from "./Step";
import Steps from "./Steps";
import ReactTechStack from "./content/ReactTechStack";
import IIIFTechStack from "./content/IIIFTechStack";
import StyledTechStack from "./content/StyledTechStack";
import Tribe from "./content/Tribe";
import Intro from "./content/Intro";
import ProblemStatement from "./content/ProblemStatement";
import BloomExample from "./content/BloomExample";
import CloverExample from "./content/CloverExample";
import {
  NectarLabel,
  NectarMetadata,
  NectarSummary,
  NectarThumbnail,
} from "./content/NectarExample";
import StyledTechStack2 from "./content/StyledTechStack2";
import BundleTechStack from "./content/BundleTechStack";
import { motion } from "framer-motion";

const mdComponents = {
  h1: (props) => <h1 {...props} />,
  pre: (props) => props.children,
  code: (props) => {
    const { className } = props;
    const language = className.replace("language-", "");
    return (
      <SyntaxHighlighter
        className={className}
        language={language}
        style={material}
        {...props}
      />
    );
  },
  Cover,
  SlidePage,
  SpeakerNotes,
  Step,
  Steps,
  motion,
  ReactTechStack,
  IIIFTechStack,
  StyledTechStack,
  BloomExample,
  CloverExample,
  NectarLabel,
  NectarMetadata,
  NectarSummary,
  NectarThumbnail,
  Tribe,
  Intro,
  ProblemStatement,
  StyledTechStack2,
  BundleTechStack,
};

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
);
