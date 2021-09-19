import { useState } from "react";
import { ErrorMessage, FormContainer, Wrapper } from "./Login.styles";
import { Submit } from "../PostAdd/PostAdd.styles";
import { handleLogin } from "../../helpers/api";
import { useHistory } from "react-router";

export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState();
  const history = useHistory();
  const onLogin = async (e) => {
    e.preventDefault();
    const res = await handleLogin(user);
    if (res instanceof Error || typeof res == TypeError) {
      res.response
        ? setError(res.response.data.msg)
        : setError(res.message.toString());
    } else {
      localStorage.clear();
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.user.displayname);
    }
  };

  return (
    <Wrapper>
      <h2>Please log in dear blogger !</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
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
