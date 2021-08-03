import React, { useState } from "react";
import { connect } from "react-redux";
import { Alert, Spinner } from "react-bootstrap";

import {
  authenticate,
  authFailure,
  authSuccess,
} from "../../redux/authActions";
import { userLogin } from "../../api/authenticationService";
import "./LoginPageComponent.css";

const mapStateToProps = (auth: any) => {
    console.log('state', auth);
    return {
        loading: auth.loading,
        error: auth.error
    }
};


const mapDispatchToProps = (dispatch: any) => {
    return {
        authenticate: () => dispatch(authenticate()),
        setUser: (data: any) => dispatch(authSuccess(data)),
        loginFailure: (message: any) => dispatch(authFailure(message))
    }
};

export const LoginPageComponent = ({ loading, error, ...props }: any) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.authenticate();

    userLogin(values)
      .then((response: any) => {
        console.log("response", response);
        if (response.status === 200) {
          props.setUser(response.data);
          props.history.push("/dashboard");
        } else {
          props.loginFailure("Something was wrong! Please try again");
        }
      })
      .catch((err: any) => {
        if (err && err.response) {
          switch (err.response.status) {
            case 401:
              console.log("401 status");
              props.loginFailure("Authentication Failed. Bad Credentials");
              break;

            default:
              props.loginFailure("Something was wrong! Please try again");
          }
        } else {
          props.loginFailure("Something was wrong! Please try again");
        }
      });
  };

  const handleChange = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  console.log("Loading", loading);

  return (
    <>
      <div className="login-page">
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <div className="card fat">
                  <div className="card-body">
                    <h4 className="card-title">Login</h4>
                    <form
                      onSubmit={handleSubmit}
                      className="my-login-validation"
                      noValidate={false}
                    >
                      <div className="form-group">
                        <label htmlFor="email"> Username </label>
                        <input
                          id="username"
                          type="text"
                          className="form-control"
                          minLength={5}
                          value={values.username}
                          onChange={handleChange}
                          name="username"
                          required
                        />
                        <div className="invalid-feedback">
                          Userid is invalid
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">
                          Password
                          <a href="forgot.html" className="float-right">
                            {" "}
                            Forgot Password?
                          </a>
                        </label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          minLength={8}
                          value={values.password}
                          onChange={handleChange}
                          name="password"
                          required
                        />
                        <div className="invalid-feedback">
                          Password is required
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            {" "}
                            Remember me{" "}
                          </label>
                        </div>
                      </div>
                      <div className="form-group m-0">
                        <button type="submit" className="btn btn-primary">
                          Login{" "}
                          {loading && (
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                          )}
                        </button>
                      </div>
                    </form>
                    {error && (
                      <Alert style={{ marginTop: "20px" }} variant="danger">
                        {" "}
                        {error}{" "}
                      </Alert>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );

};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageComponent);

