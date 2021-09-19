import { Submit, Wrapper } from "./PostAdd.styles";
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Loading from "../Loading";
import { handleLogin } from "../../helpers/api";

export default function PostAdd() {
  const editorRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <Wrapper>
      <h2>What's on your mind ?</h2>
      {isLoading && <Loading />}
      <Editor
        apiKey="595uiz5ls6wksvbq1fk2d56a33bktpal772owrbcf8z2pkle"
        onInit={(evt, editor) => {
          editorRef.current = editor;
          setIsLoading(false);
        }}
        init={{
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <Submit onClick={log}>Submit</Submit>
    </Wrapper>
  );
}
