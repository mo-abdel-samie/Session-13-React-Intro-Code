import React, { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { Link } from "react-router-dom";

export const LoginForm = ({ handleToggle }) => {
  console.log("1. insied Comp");

  const [game, setGame] = useState(false);
  const [products, setProducts] = useState([]);
  let variable = true;
  const inputEimal = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      console.log("2. timeout");
    }, 6000);

    return () => {
      console.log("3. Clear");
      clearTimeout();
    };
  }, [game]);

  useEffect(() => {
    inputEimal.current.focus();

    try {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    } catch (err) {
      console.log(err);
    }

  }, []);

  const handleClick = () => {
    handleToggle(true);
  };

  const inpFocus = (e) => {
    e.preventDefault();
    if (inputEimal.current) {
      // inputEimal.current.focus();
    }
    variable = !variable;
    setGame(!game);
  };

  return (
    <>
      {console.log("4. insied Render")}
      <Container className="vh-100">
        <div className="h-100 row justify-content-center align-items-center">
          <form className="col-md-6 border border-1 rounded px-3 pb-5 shadow">
            <h2 className="my-3">Login Form</h2>
            <div className="my-2">
              {game && <label>Email</label>}
              <input
                ref={inputEimal}
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
              <Link to="/quiz" className="btn btn-outline-success mx-2">Quiz</Link>
              <small className="btn btn-link" onClick={handleClick}>
                Signup
              </small>
              <button onClick={inpFocus}>focus</button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};
