import { useState } from "react";
import { FormContainer, Wrapper } from "./Login.styles";
import { Submit } from "../PostAdd/PostAdd.styles";
import { handleLogin } from "../../helpers/api";

export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [newUser, setNewUser] = useState();
  const onLogin = async (e) => {
    e.preventDefault();
    console.log(user);
    const newPost = await handleLogin(user);
    setNewUser(newPost);
  };
  return (
    <Wrapper>
      {newUser && console.log(newUser)}
      <h2>Please log in dear blogger !</h2>
      <FormContainer onSubmit={onLogin}>
        <label htmlFor="username">
          <span>Username</span>
          <input
            type="text"
            name="username"
            placeholder=""
            onChange={(e) => {
              setUser({ ...user, username: `${e.target.value}` });
            }}
          ></input>
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input
            type="password"
            name="password"
            placeholder=""
            onChange={(e) => {
              setUser({ ...user, password: `${e.target.value}` });
            }}
          ></input>
        </label>
        <Submit>Submit</Submit>
      </FormContainer>
    </Wrapper>
  );
}
