import { useState } from "react";
import { ErrorMessage, FormContainer, Wrapper } from "./Login.styles";
import { Submit } from "../PostMDE/PostMDE.styles";
import { handleLogin } from "../../helpers/api";
import { useHistory } from "react-router";

export default function Login({ setUser }) {
  const [loginUser, setLoginUser] = useState({ username: "", password: "" });
  const [error, setError] = useState();
  const history = useHistory();
  const onLogin = async (e) => {
    e.preventDefault();
    const res = await handleLogin(loginUser);
    if (res instanceof Error || typeof res == TypeError) {
      res.response
        ? setError(res.response.data.msg)
        : setError(res.message.toString());
    } else {
      localStorage.clear();
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("user", JSON.stringify(res.data.user.displayname));
      setUser({ username: res.data.user.displayname, token: res.data.token });
      history.replace("/admin");
    }
  };

  return (
    <Wrapper>
      <h2>Please log in blogger !</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FormContainer onSubmit={onLogin}>
        <label htmlFor="username">
          <span>Username</span>
          <input
            type="text"
            name="username"
            placeholder=""
            onChange={(e) => {
              setLoginUser({ ...loginUser, username: `${e.target.value}` });
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
              setLoginUser({ ...loginUser, password: `${e.target.value}` });
            }}
          ></input>
        </label>
        <Submit>Submit</Submit>
      </FormContainer>
    </Wrapper>
  );
}
