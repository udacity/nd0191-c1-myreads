import React from "react";

function Header({ isLoggedIn, handleLogOut }) {
  const currentUsername = sessionStorage.getItem('currentUsername');

  return (
    <header className="app-header">
      <h1>My Book App</h1>
      {isLoggedIn && (
        <div className="user-info">
          <span>{currentUsername}</span>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      )}
    </header>
  );
}

export default Header;