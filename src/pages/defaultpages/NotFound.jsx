import React from "react";
import { Container, Button } from "react-bootstrap";
import { HouseDoor, EmojiFrown } from "react-bootstrap-icons";

const NotFound = () => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <Container className="text-center">

        <h1 className="display-1 fw-bold text-primary">404</h1>

        <EmojiFrown size={60} className="text-secondary mb-3" />

        <h3 className="mb-3">Page Not Found</h3>

        <p className="text-muted mb-4">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Button variant="primary" size="lg">
          <HouseDoor className="me-2" />
          Go Back Home
        </Button>

      </Container>
    </div>
  );
};

export default NotFound;