import { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { createPost } from "../../helpers/api";
import { useHistory } from "react-router";

export default function PostMDE({ user }) {
  const [value, setValue] = useState();
  const [title, setTitle] = useState();
  const history = useHistory();
  const onChange = (value) => {
    setValue(value);
  };

  const handleSubmit = () => {
    if (value && title) {
      const body = value;
      createPost(user, { title, body }).then((res) => {
        history.push(`/post/${res.data.post._id}`);
      });
    }
  };
  return (
    <>
      <h3>What's on your mind?</h3>
      <label htmlFor="title">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
      </label>
      <SimpleMDE value={value} onChange={onChange} />

      <ReactMarkdown>{value}</ReactMarkdown>
      <button onClick={handleSubmit}>SUBMIT</button>
    </>
  );
}
