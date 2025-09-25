import React, { createContext, useState } from "react";

export const navbarContext = createContext();
const NavContext = ({ children }) => {
  const [navOpen, setnavOpen] = useState(false);
  return (
    <div>
      <navbarContext.Provider value={[navOpen, setnavOpen]}>
        {children}
      </navbarContext.Provider>
    </div>
  );
};

export default NavContext;
