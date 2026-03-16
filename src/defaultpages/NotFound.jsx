import React from "react";
import { Container, Button } from "react-bootstrap";
import { HouseDoor } from "react-bootstrap-icons";
import NotFounding from '../assets/images/notfound.svg';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="vh-100 d-flex flex-column align-items-center justify-content-between p-5 text-center"
      style={{
        backgroundImage:`url(${NotFounding})`,
        backgroundSize: 'contain', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Top Section: Heading */}
      <div className="mt-5">
        
      </div>

      {/* Bottom Section: Button */}
      <Button
        variant="primary"
        size="lg"
        className="shadow px-5 mb-4 d-flex align-items-center"
        onClick={() => navigate("/")}
      >
        <HouseDoor className="me-2" />
        Go Back Home
      </Button>
    </div>
  );
};


export default NotFound;