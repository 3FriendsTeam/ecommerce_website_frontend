import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 py-2 mb-8 w-full">
      <div className="flex items-center justify-center space-x-4">
        <img
          src="logo.png" // Thay thế bằng đường dẫn logo của bạn
          alt="Logo"
          className="w-16 h-auto"
        />
        <h1 className="text-white text-4xl font-semibold">3FRIENDS</h1>
      </div>
    </header>
  );
}

export default Header;
