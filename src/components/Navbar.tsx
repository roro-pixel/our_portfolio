import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/back.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md shadow-md py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center z-50">
              <img 
                src={logo} 
                alt="SNI Logo" 
                className="h-14"
              />
            </Link>

            {/* Navigation Desktop */}
            <div className="hidden md:flex items-center relative">
              <div className="flex items-center space-x-6">
                <NavLink to="/" active={location.pathname === "/"}>
                  Accueil
                </NavLink>
                <NavLink to="/solutions" active={location.pathname === "/solutions"}>
                  Solutions
                </NavLink>
                <NavLink to="/graphisme" active={location.pathname === "/graphisme"}>
                  Graphismes
                </NavLink>
                <NavLink to="/training" active={location.pathname === "/training"}>
                  Formations
                </NavLink>
                <NavLink to="/contact" active={location.pathname === "/contact"}>
                  Contact
                </NavLink>
              </div>
            </div>

            {/* Bouton Menu Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-800 bg-white hover:bg-gray-100"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <MobileNavLink to="/" active={location.pathname === "/"} onClick={() => setIsOpen(false)}>
                Accueil
              </MobileNavLink>
              <MobileNavLink to="/solutions" active={location.pathname === "/solutions"} onClick={() => setIsOpen(false)}>
                Solutions
              </MobileNavLink>
              <MobileNavLink to="/graphisme" active={location.pathname === "/graphisme"} onClick={() => setIsOpen(false)}>
                Graphismes
              </MobileNavLink>
              <MobileNavLink to="/training" active={location.pathname === "/training"} onClick={() => setIsOpen(false)}>
                Formations
              </MobileNavLink>
              <MobileNavLink to="/contact" active={location.pathname === "/contact"} onClick={() => setIsOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({ to, children, active }: { 
  to: string; 
  children: React.ReactNode; 
  active: boolean;
}) => (
  <Link
    to={to}
    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
      active 
        ? 'text-orange-500 bg-orange-100' 
        : 'text-gray-800 hover:text-orange-500 hover:bg-gray-100'
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, active, onClick }: { 
  to: string; 
  children: React.ReactNode; 
  active: boolean;
  onClick?: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`text-3xl font-medium transition-all duration-300 ${
      active 
        ? 'text-orange-500' 
        : 'text-gray-800 hover:text-orange-500'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
