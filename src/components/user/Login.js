import React, { useState } from "react"
import ApiManager from "../../modules/ApiManager";

const Login = props => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = {
      "username": credentials.username,
      "password": credentials.password
    }

    ApiManager.post("login", user)
      .then(resp => {
        if("token" in resp) {
          sessionStorage.setItem("kennywood-token", resp.token)
        }
        props.history.push("/");
      })
  }

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="username"
            id="username"
            placeholder="username"
            required="" autoFocus="" />
          <label htmlFor="inputUsername">User Name</label>

          <input onChange={handleFieldChange} type="password"
            id="password"
            placeholder="Password"
            required="" />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button type="submit">Sign in</button>
      </fieldset>
    </form>
  );
};

export default Login;