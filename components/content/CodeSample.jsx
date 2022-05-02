import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import okaidia from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia";

const CodeSample = ({ children }) => (
  <SyntaxHighlighter language="javascript" style={okaidia}>
    {children}
  </SyntaxHighlighter>
);

export default CodeSample;
