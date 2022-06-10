import React, { useState } from "react";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex justify-between w-screen h-20 items-center">
      <h3 className="">Benjamin Bialy</h3>
      <ul className="hidden justify-between w-96">
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
        <button>Avaliablity</button>
      </ul>
      {showMenu ? (
        <ul className="flex flex-col justify-between w-96">
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
          <button>Avaliablity</button>
        </ul>
      ) : (
        <div className="space-y-2" onClick={() => setShowMenu((prev) => !prev)}>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>
      )}
    </div>
  );
}
