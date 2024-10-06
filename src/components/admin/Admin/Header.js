import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className="bg-white shadow-md p-3 z-50">
            {/* Đảm bảo flex hoạt động */}
            <div className="w-full flex items-center justify-between">
                {/* Left section - Logo and Title */}
                <div className="flex items-center">
                    {/* Logo */}
                    <img src="logo.png" alt="Logo" className="h-12 w-12 object-contain mr-3" />
                    {/* Header Title */}
                    <h3 className="text-gray-800 text-lg">Quản lý cửa hàng</h3>
                </div>

                {/* Right section - User Icon and Name */}
                <div className="flex items-center">
                    {/* User Icon */}
                    <FontAwesomeIcon icon={faUserCircle} className="h-8 w-8 text-gray-600" />
                    {/* User Name */}
                    <h4 className="ml-2 text-sm text-gray-500">admin</h4>
                </div>
            </div>
        </header>
    );
}

export default Header;

