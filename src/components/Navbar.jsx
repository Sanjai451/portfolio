// import { NavLink } from "react-router-dom";

// import { logo } from "../assets/images";

// const Navbar = () => {
//   return (
//     <header className='header'>
//       <NavLink to='/'>
//         <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
//       </NavLink>
//       <nav className='flex text-lg gap-7 font-medium'>
//         <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
//           About
//         </NavLink>
//         <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
//           Projects
//         </NavLink>
//         <NavLink to='/certifications' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
//           Certifications
//         </NavLink>
//         <NavLink to='/edu' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
//           Educations
//         </NavLink>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../assets/images'; // Ensure the path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="text-black"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className={`hidden lg:flex lg:items-center lg:justify-center lg:gap-7`}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg font-medium ${isActive ? 'text-blue-600' : 'text-black'}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-lg font-medium ${isActive ? 'text-blue-600' : 'text-black'}`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/certifications"
              className={({ isActive }) =>
                `text-lg font-medium ${isActive ? 'text-blue-600' : 'text-black'}`
              }
            >
              Certifications
            </NavLink>
            <NavLink
              to="/edu"
              className={({ isActive }) =>
                `text-lg font-medium ${isActive ? 'text-blue-600' : 'text-black'}`
              }
            >
              Educations
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-white`}>
        <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block text-lg font-medium ${isActive ? 'text-blue-600' : 'text-black'}`
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `block text-lg font-medium ${isActive ? 'text-blue-600' : 'text-black'}`
            }
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/certifications"
            className={({ isActive }) =>
              `block text-lg font-medium ${isActive ? 'text-blue-600' : 'text-black'}`
            }
            onClick={() => setIsOpen(false)}
          >
            Certifications
          </NavLink>
          <NavLink
            to="/edu"
            className={({ isActive }) =>
              `block text-lg font-medium ${isActive ? 'text-blue-600' : 'text-black'}`
            }
            onClick={() => setIsOpen(false)}
          >
            Educations
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
