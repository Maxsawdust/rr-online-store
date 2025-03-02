import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

export default function CardDropdown({ setProductColour }) {
  const [dropdownToggle, setDropdownToggle] = useState({
    title: "Select Colour",
    variant: "dark",
  });

  return (
    <Dropdown>
      <Dropdown.Toggle variant={dropdownToggle.variant}>
        {dropdownToggle.title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            setProductColour("Red");
            setDropdownToggle({ title: "Red", variant: "danger" });
          }}>
          Red
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setProductColour("Green");
            setDropdownToggle({ title: "Green", variant: "success" });
          }}>
          Green
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            setProductColour("Blue");
            setDropdownToggle({ title: "Blue", variant: "primary" });
          }}>
          Blue
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
