import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";

export const Header = ({ title, description = "Welcome at React Website" }) => {
  return (
    <header>
      <Container>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>
          <Link className="text-decoration-none text-success" to="/">
            Home
          </Link>
          &gt; {title}
        </p>
      </Container>
    </header>
  );
};
