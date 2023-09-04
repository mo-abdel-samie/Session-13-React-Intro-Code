import React from "react";
import { Container } from "./Container";

export const SignupForm = ({ handleToggle }) => {
  const handleClick = () => {
    handleToggle(false);
  };
  return (
    <Container className="vh-100">
      <div className="h-100 row justify-content-center align-items-center">
        <form className="col-md-6 border border-1 rounded px-3 pb-5 shadow">
          <h2 className="my-3">SignUp Form</h2>
          <div className="my-2">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="ex:A. Samie"
            />
          </div>
          <div className="my-2">
            <label>Phone</label>
            <input
              type="number"
              className="form-control"
              placeholder="ex:+20 1111152001"
            />
          </div>
          <div className="my-2">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="my-2">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="**************"
            />
          </div>
          <div className="mt-2 d-flex justify-content-between">
            <input type="submit" className="btn btn-success" value="Submit" />
            <small className="btn btn-link" onClick={handleClick}>
              login
            </small>
          </div>
        </form>
      </div>
    </Container>
  );
};
