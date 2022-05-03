import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import material from "react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic";

const CodeSample = ({ children }) => (
  <SyntaxHighlighter language="javascript" style={material}>
    {children}
  </SyntaxHighlighter>
);

export default CodeSample;
