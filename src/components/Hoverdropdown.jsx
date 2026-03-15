// src/components/Hoverdropdown.js
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hoverdropdown = ({ title, objectvalue = [] }) => {
  const [show, setShow] = useState(false);

  const handleClick = (item) => {
    if (item.action && typeof item.action === "function") {
      item.action();
    }
  };

  return (
    <Dropdown
      show={show}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      align="end"
    >
      <Dropdown.Toggle bsPrefix=" " variant="" id={`dropdown-hover-${title}`}>
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Header>{title}</Dropdown.Header>

        {objectvalue.length > 0 ? (
          objectvalue.map((item, index) => {
            const displayName = item.name || item; // string or object
            const path = item.path || `/${displayName}`;

            return (
              <Dropdown.Item
                key={index}
                as={item.path ? Link : "button"}  
                to={item.path}
                onClick={() => handleClick(item)}
              >
                {displayName}
              </Dropdown.Item>
            );
          })
        ) : (
          <Dropdown.Item disabled>No items</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Hoverdropdown;