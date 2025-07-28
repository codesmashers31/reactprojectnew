import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  BellIcon,
  UserCircleIcon,
  LogoutIcon,
  ChevronDownIcon,
  HomeIcon,
  CalendarIcon,
  PencilIcon,
  EyeIcon,
  EyeOffIcon,
  ChatAltIcon, // Changed from TruckIcon to ChatAltIcon for Contact Us
} from "@heroicons/react/outline";

const Booking_Navbar = () => {
  const navigate = useNavigate();

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const notifications = [
    { id: 1, text: "Your oil change is confirmed", time: "2 hours ago" },
    { id: 2, text: "Brake service reminder", time: "1 day ago" },
    { id: 3, text: "New tire service available", time: "3 days ago" },
  ];

  // Sample user data
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    mobile: "+1 (555) 123-4567",
    password: "••••••••",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };
  const scrollToFooter = () => {
    if (window.location.pathname === "/") {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#footer");
    }
  };
  const scrollToTop = () => {
    if (window.location.pathname === "/") {
      const top = document.getElementById("top");
      if (top) {
        top.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/top");
    }
  };

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link
          to="/landing" // Changed to landing page
          className="flex items-center space-x-3 hover:text-purple-700 transition-colors" // Added hover effect
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
            <span className="text-purple-800 font-bold text-lg">DF</span>{" "}
            {/* Changed text color */}
          </div>
          <span className="text-xl font-bold hidden sm:inline-block">
            DriveFix
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="flex items-center hover:text-purple-700 transition-colors"
          >
            <HomeIcon className="h-5 w-5 mr-1" /> Home
          </Link>

          <Link
            to="/mybooking"
            className="flex items-center hover:text-purple-700 transition-colors"
          >
            <CalendarIcon className="h-5 w-5 mr-1" /> My Bookings
          </Link>
          <button
            onClick={scrollToFooter}
            className="flex items-center hover:text-purple-700 transition-colors"
          >
            <ChatAltIcon className="h-5 w-5 mr-1" /> Contact Us
          </button>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-6">
          {/* Notification */}
          <div className="relative">
            <button
              onClick={() => {
                setNotificationOpen(!notificationOpen);
                setProfileOpen(false);
              }}
              className="p-1 rounded-full hover:bg-purple-700 focus:outline-none relative transition-colors" // Changed hover color
            >
              <BellIcon className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-purple-600"></span>
            </button>

            {notificationOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-gray-900 rounded-md shadow-lg overflow-hidden z-20 border border-gray-700">
                <div className="py-2">
                  <div className="px-4 py-2 bg-black text-white font-semibold flex justify-between items-center border-b border-gray-700">
                    <span>Notifications</span>
                    <span className="text-xs bg-purple-600 px-2 py-1 rounded-full">
                      3 new
                    </span>
                  </div>
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="px-4 py-3 border-b border-gray-800 hover:bg-gray-800 cursor-pointer"
                    >
                      <p className="text-sm text-gray-200">
                        {notification.text}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {notification.time}
                      </p>
                    </div>
                  ))}
                  <div className="px-4 py-2 bg-gray-800 text-center">
                    <Link
                      to="/notifications"
                      className="text-sm text-purple-400 font-medium hover:underline hover:text-purple-700" // Changed hover color
                    >
                      View all notifications
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => {
                setProfileOpen(!profileOpen);
                setNotificationOpen(false);
              }}
              className="flex items-center space-x-1 focus:outline-none hover:text-purple-700 transition-colors" // Changed hover color
            >
              <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center">
                <UserCircleIcon className="h-5 w-5 text-gray-300" />
              </div>
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  profileOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-gray-900 rounded-md shadow-lg overflow-hidden z-20 border border-gray-700">
                <div className="py-4">
                  <div className="px-6 pb-4 border-b border-gray-800">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-semibold text-white">
                        Profile Information
                      </h3>
                      <button
                        onClick={handleEditToggle}
                        className="text-purple-400 hover:text-purple-700 transition-colors" // Changed hover color
                      >
                        <PencilIcon className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Profile Fields */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">
                          Name
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleInputChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
                          />
                        ) : (
                          <p className="text-sm text-gray-200">
                            {userData.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">
                          Email
                        </label>
                        {isEditing ? (
                          <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
                          />
                        ) : (
                          <p className="text-sm text-gray-200">
                            {userData.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">
                          Mobile Number
                        </label>
                        {isEditing ? (
                          <input
                            type="tel"
                            name="mobile"
                            value={userData.mobile}
                            onChange={handleInputChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
                          />
                        ) : (
                          <p className="text-sm text-gray-200">
                            {userData.mobile}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">
                          Password
                        </label>
                        <div className="relative">
                          {isEditing ? (
                            <>
                              <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={userData.password}
                                onChange={handleInputChange}
                                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500 pr-10"
                              />
                              <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-purple-700" // Changed hover color
                              >
                                {showPassword ? (
                                  <EyeOffIcon className="h-5 w-5" />
                                ) : (
                                  <EyeIcon className="h-5 w-5" />
                                )}
                              </button>
                            </>
                          ) : (
                            <p className="text-sm text-gray-200">••••••••</p>
                          )}
                        </div>
                        {isEditing && (
                          <button className="mt-2 text-xs text-purple-400 hover:text-purple-700">
                            {" "}
                            // Changed hover color Change Password
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4">
                    {isEditing ? (
                      <div className="flex space-x-3">
                        <button
                          onClick={handleEditToggle}
                          className="px-4 py-2 bg-gray-700 text-white text-sm font-medium rounded hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleEditToggle}
                          className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700 transition-colors"
                        >
                          Save Changes
                        </button>
                      </div>
                    ) : (
                      <button className="w-full flex items-center justify-center px-4 py-2 bg-gray-800 text-gray-300 text-sm font-medium rounded hover:bg-gray-700 hover:text-white transition-colors">
                        <LogoutIcon className="h-4 w-4 mr-2" />
                        Logout
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Booking_Navbar;
