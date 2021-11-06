import { useState, useEffect } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { createPost, getPostByID, updatePost } from "../../helpers/api";
import { useHistory, useParams } from "react-router";
import { Wrapper, Submit } from "./PostMDE.styles";
import useUserContext from "../../constants/useUserContext";

export default function PostMDE() {
  const { id } = useParams();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const user = useUserContext();

  const history = useHistory();
  useEffect(() => {
    if (id) {
      setup();
    }
    async function setup() {
      let results = await getPostByID(id);

      setValue(decodeURIComponent(results.body));
      setTitle(results.title);
      setThumbnail(results.thumbnail);
    }
  }, [id]);

  const onChange = (value) => {
    setValue(value);
  };

  const handleSubmit = async () => {
    let img = thumbnail;

    if (value && title) {
      const body = value;
      console.log({ body });
      if (id == null) {
        createPost(user, { title, body }, img).then((res) => {
          history.push(`/post/${res.data.post._id}`);
        });
      } else {
        updatePost(user, { title, body, id }, img).then(() => {
          history.push(`/post/${id}`);
        });
      }
    }
  };

  return (
    <Wrapper>
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
      {/* <Thumbnail fileInput={fileInput} /> */}
      <label htmlFor="current-thumbnail">
        <input
          type="text"
          placeholder="Link"
          name="current-thumbnail"
          value={thumbnail}
          onChange={(e) => {
            setThumbnail(e.target.value);
          }}
        ></input>
      </label>
      <Submit onClick={handleSubmit}>Post</Submit>
    </Wrapper>
  );
}
