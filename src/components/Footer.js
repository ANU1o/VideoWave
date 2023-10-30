import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto bg-bg p-5" data-bs-theme="dark">
      <Container>
        <Row>
          <Col lg xs="12" className="align-self-center">
            <h3 className="text-muted">
              <i class="fa-solid fa-circle-play me-2"></i>VideoWave
            </h3>
            <h6 className="text-muted">
              Made by{" "}
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip className="custom-tooltip">
                    Visit GitHub profile of the{" "}
                    <span className="text-primary-alt">creator</span>
                  </Tooltip>
                }
              >
                <Link
                  className="text-decoration-none text-primary-alt"
                  target="_blank"
                  to="https://github.com/ANU1o"
                >
                  Anoof Abdul Kadar
                </Link>
              </OverlayTrigger>
            </h6>
            <hr className="d-lg-none d-sm-block border-1 border-bottom border-primary opacity-100" />
          </Col>
          <Col lg xs="12">
            <h3>Pages</h3>
            <Link to="" className="text-decoration-none">
              <h6 className="text-light">
                <i class="fa-solid fa-home me-1"></i>Home
              </h6>
            </Link>
            <Link to="/Explore" className="text-decoration-none">
              <h6 className="text-light">
                <i class="fa-solid fa-compass me-1"></i>Explore
              </h6>
            </Link>
            <Link to="/Upload" className="text-decoration-none">
              <h6 className="text-light">
                <i class="fa-solid fa-upload me-1"></i>Upload
              </h6>
            </Link>
            <hr className="d-lg-none d-sm-block border-1 border-bottom border-primary opacity-100" />
          </Col>
          <Col lg xs="12">
            <h3>Libraries</h3>
            <Link
              to="https://react-bootstrap.netlify.app"
              target="_blank"
              className="text-decoration-none"
            >
              <h6 className="text-light">
                <i class="fa-brands fa-react me-1"></i>react-bootstrap
              </h6>
            </Link>
            <Link
              to="https://reactrouter.com/en/main"
              target="_blank"
              className="text-decoration-none"
            >
              <h6 className="text-light">
                <i class="fa-brands fa-react me-1"></i>react-router
              </h6>
            </Link>
            <Link
              to="https://www.npmjs.com/package/react-toastify"
              target="_blank"
              className="text-decoration-none"
            >
              <h6 className="text-light">
                <i class="fa-brands fa-react me-1"></i>react-toastify
              </h6>
            </Link>
            <Link
              to="https://www.npmjs.com/package/json-server"
              target="_blank"
              className="text-decoration-none"
            >
              <h6 className="text-light">
                <i class="fa-solid fa-plant-wilt me-1"></i>json-server
              </h6>
            </Link>
            <Link
              to="https://www.npmjs.com/package/uniqid"
              target="_blank"
              className="text-decoration-none"
            >
              <h6 className="text-light">
                <i class="fa-solid fa-fingerprint me-1"></i>uniqid
              </h6>
            </Link>
            <Link
              to="https://www.npmjs.com/package/date-fns"
              target="_blank"
              className="text-decoration-none"
            >
              <h6 className="text-light">
                <i class="fa-solid fa-clock me-1"></i>date-fns
              </h6>
            </Link>

            <hr className="d-lg-none d-sm-block border-1 border-bottom border-primary opacity-100" />
          </Col>
          <Col lg xs="12">
            <h3>Visual Assets</h3>
            <Link
              to="https://getbootstrap.com"
              target="_blank"
              className="text-decoration-none"
            >
              <h6 className="text-light">
                <i class="fa-brands fa-bootstrap me-1"></i>Bootstrap
              </h6>
            </Link>
            <Link
              to="https://storyset.com"
              target="_blank"
              className="text-decoration-none"
            >
              <h6 className="text-light">
                <i class="fa-solid fa-strikethrough me-1"></i>Storyset
              </h6>
            </Link>
            <Link
              to="https://fontawesome.com"
              target="_blank"
              className="text-decoration-none"
            >
              <h6 className="text-light">
                <i class="fa-solid fa-font-awesome me-1"></i>Font Awesome
              </h6>
            </Link>
            <Link
              to="https://pexels.com"
              target="_blank"
              className="text-decoration-none"
            >
              <h6 className="text-light">
                <img
                  src="/pexels.svg"
                  alt=""
                  style={{
                    width: "25px",
                    marginLeft: "-3px",
                    marginRight: "-6px",
                    marginTop: "-3px",
                  }}
                />{" "}
                Pexels
              </h6>
            </Link>

            <hr className="d-lg-none d-sm-block border-1 border-bottom border-primary opacity-100" />
          </Col>
          <Col lg xs="12">
            <h3>Subscribe to our Newsletter</h3>
            <p className="text-secondary d-none">
              Get latest updates about our products and revolutions made by the
              content creators
            </p>
            <Form.Control
              type="text"
              placeholder="Enter email"
              className="mb-3"
            />
            <Button variant="primary">Subscribe</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
