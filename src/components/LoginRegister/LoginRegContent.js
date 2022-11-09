import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

const LoginRegister = () => {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  function handleChangeUser(e) {
    setUser(e.target.value);
  }
  function handleChangePass(e) {
    setPass(e.target.value);
  }

  function login() {
    history.push("/admin");
  }

  const history = useHistory();

  return (
    <Fragment>
      <div className="off-canvas-item">
        <div className="log-in-content-wrap">
          <h2>Login</h2>
          <div className="login-form mtn-15">
            <div className="form-input-item">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                required
                value={user}
                onChange={handleChangeUser}
              />
            </div>

            <div className="form-input-item">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                value={pass}
                onChange={handleChangePass}
              />
            </div>

            <div className="form-input-item">
              <button onClick={login} type="submit" className="btn-submit">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginRegister;
