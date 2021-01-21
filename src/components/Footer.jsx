import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with 💖 by{" "}
        <a
          rel="noopener"
          href="https://github.com/jones9682"
          aria-label="My GitHub"
        >
          🆁🅾🅱🅴🆁🆃 🅹🅾🅽🅴🆂 🅹🆁.
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
          &copy; Copyright 2021
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
