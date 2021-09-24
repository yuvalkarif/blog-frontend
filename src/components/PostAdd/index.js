import { Submit, Wrapper } from "./PostAdd.styles";
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Loading from "../Loading";
import { createPost } from "../../helpers/api";
import { useHistory } from "react-router";

export default function PostAdd({ user }) {
  const editorRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const handleSubmit = () => {
    if (editorRef.current) {
      const body = editorRef.current.getContent();
      const bodyTitle = editorRef.current.getContent({ format: "text" });
      const title = bodyTitle.split("\n")[0];
      createPost(user, { title, body }).then((res) => {
        history.push(`/post/${res.data.post._id}`);
        history.go(0);
      });
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
            "alignright alignjustify | link image| bullist numlist outdent indent | ",

          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <Submit onClick={handleSubmit}>Submit</Submit>
    </Wrapper>
  );
}
