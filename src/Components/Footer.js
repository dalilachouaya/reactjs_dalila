import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
function Footer() {
  return (
    <FooterContainer className="main-footer">
      <Container className="footer-middle">
        <Row>
          {/* col 1 */}
          <Col md={3} sm={6}>
            <h4> CONTACT US</h4>
            <ul className="list-unstyled">
              <li>GAFSA-TUNISIA</li>
              <li>Main street</li>
              <li>Phone:+216-92999999</li>
            </ul>
          </Col>
          {/* col 2 */}
          <Col md={3} sm={6}>
            <h4>NPM Registry</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">firebase</a>
              </li>
              <li>
                <a href="/">Bootstrap</a>
              </li>
              <li>
                <a href="/">Npm</a>
              </li>
              <li>
                <a href="/">ReactDom</a>
              </li>
            </ul>
          </Col>
          {/* col 3 */}
          <Col md={3} sm={6}>
            <h4> REACT Features</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Simplicity</a>
              </li>
              <li>
                <a href="/">JSX</a>
              </li>
              <li>
                <a href="/">Virtual DOM</a>
              </li>
              <li>
                <a href="/">Components</a>
              </li>
            </ul>
          </Col>
          {/* col 4 */}
          <Col md={3} sm={6}>
            <h4>Import </h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">React</a>
              </li>
              <li>
                <a href="/">Bootstrap</a>
              </li>
              <li>
                <a href="/">react-bootstrap</a>
              </li>
              <li>
                <a href="/">styled-components</a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Footer Bottom*/}
        <div className="Footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Checkpoint-React-App By DALILA CH -{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              All Rights Reserved
            </span>
          </p>
        </div>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .Footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: var(--mainWhite);
  }
  ul li a:hover {
    color: var(--mainDark);
  }
`;
