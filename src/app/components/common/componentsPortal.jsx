// components/Portal.js

import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const portalRootRef = useRef(null);

  // Create portal container if it doesn't exist
  useEffect(() => {
    const portalRoot = document.createElement("div");
    portalRoot.classList.add("portal-root");
    document.body.appendChild(portalRoot);
    portalRootRef.current = portalRoot;

    return () => {
      document.body.removeChild(portalRoot);
    };
  }, []);

  // Render children into the portal container
  if (portalRootRef.current) {
    return ReactDOM.createPortal(children, portalRootRef.current);
  } else {
    return null;
  }
};

export default Portal;
