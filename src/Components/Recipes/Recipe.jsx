import ReactMarkdown from "react-markdown";

export const Recipe = ({ recipe }) => {
  return (
    <>
      <hr />
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </>
  );
};
