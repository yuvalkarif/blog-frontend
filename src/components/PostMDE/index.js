import { useState, useRef, useEffect } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {
  createPost,
  uploadThumbnail,
  getPostByID,
  updatePost,
} from "../../helpers/api";
import { useHistory, useParams } from "react-router";
import { Wrapper, Submit } from "./PostMDE.styles";
import Thumbnail from "./thumbnail";
export default function PostMDE({ user }) {
  const { id } = useParams();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [post, setPost] = useState();
  const fileInput = useRef();
  const history = useHistory();
  useEffect(() => {
    if (id) {
      setup();
    }
    async function setup() {
      let results = await getPostByID(id);

      setValue(decodeURIComponent(results.body));
      setTitle(results.title);
    }
  }, []);

  const onChange = (value) => {
    setValue(value);
  };

  const handleSubmit = async () => {
    let upload;
    let img;

    try {
      upload = await uploadThumbnail(fileInput.current.files[0]);
      img = upload.data.filename;
    } catch (error) {
      console.log(error);
    }
    if (value && title) {
      const body = value;
      console.log({ body });
      if (id == null) {
        console.log("post");
        createPost(user, { title, body }, img).then((res) => {
          history.push(`/post/${res.data.post._id}`);
        });
      } else {
        console.log("update");
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
      <Thumbnail fileInput={fileInput} />
      <Submit onClick={handleSubmit}>Post</Submit>
    </Wrapper>
  );
}
