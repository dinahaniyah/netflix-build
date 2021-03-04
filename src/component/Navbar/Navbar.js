import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Nav, NavContent, NavLogo, NavAvatar } from "./NavbarStyled";

function Navbar() {
  const history = useHistory();

  const [showBackground, setShowBackground] = useState(false);
  const transitionBackground = () => {
    if (window.scrollY > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionBackground);
    return () => window.removeEventListener("scroll", transitionBackground);
  }, []);

  return (
    <Nav style={showBackground ? { background: "#111" } : {}}>
      <NavContent>
        <NavLogo
          onClick={() => history.push("/")}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <NavAvatar
          onClick={() => history.push("/profile")}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </NavContent>
    </Nav>
  );
}

export default Navbar;
