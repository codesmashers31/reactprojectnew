import { NavLink } from "react-router-dom";

const Sidebar = () => {
  // Helper functions for dynamic classes
  const navLinkClass = ({ isActive }) =>
    `flex items-center px-3 py-2 text-sm font-medium rounded-md group ${
      isActive
        ? "text-blue-700 bg-blue-50"
        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
    }`;

  const iconClass = (isActive) =>
    `w-5 h-5 mr-3 ${
      isActive ? "text-blue-500" : "text-gray-400 group-hover:text-gray-500"
    }`;

  return (
    <nav className="flex-1 space-y-2">
      {/* Dashboard Section */}
      <div>
        <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Main
        </h3>
        <div className="mt-2 space-y-1">
          <NavLink to="/dashboard" className={navLinkClass}>
            {({ isActive }) => (
              <>
                <svg
                  className={iconClass(isActive)}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Dashboard
              </>
            )}
          </NavLink>
          <NavLink to="/bookings" className={navLinkClass}>
            {({ isActive }) => (
              <>
                <svg
                  className={iconClass(isActive)}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  />
                </svg>
                Bookings
              </>
            )}
          </NavLink>
          <NavLink to="/payments" className={navLinkClass}>
            {({ isActive }) => (
              <>
                <svg
                  className={iconClass(isActive)}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Payments
              </>
            )}
          </NavLink>
        </div>
      </div>

      {/* Vehicles Section */}
      <div>
        <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Services
        </h3>
        <div className="mt-2 space-y-1">
          <NavLink
            to="/vehicles/add"
            className={navLinkClass}
            isActive={(match, location) => {
              return location.pathname === "/vehicles/add";
            }}
          >
            {({ isActive }) => (
              <>
                <svg
                  className={iconClass(isActive)}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                Add category
              </>
            )}
          </NavLink>
          <NavLink to="/vehicles/category" className={navLinkClass}>
            {({ isActive }) => (
              <>
                <svg
                  className={iconClass(isActive)}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                Vehicle Category
              </>
            )}
          </NavLink>
          <NavLink to="/vehicles" end className={navLinkClass}>
            {({ isActive }) => (
              <>
                <svg
                  className={iconClass(isActive)}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                My Services
              </>
            )}
          </NavLink>
        </div>
      </div>

      {/* User Management Section */}
      {/* <div>
        <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          User Management
        </h3>
        <div className="mt-2 space-y-1">
          <NavLink to="/users" className={navLinkClass}>
            {({ isActive }) => (
              <>
                <svg
                  className={iconClass(isActive)}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Users
              </>
            )}
          </NavLink>
          <NavLink to="/roles" className={navLinkClass}>
            {({ isActive }) => (
              <>
                <svg
                  className={iconClass(isActive)}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Roles
              </>
            )}
          </NavLink>
          <NavLink to="/permissions" className={navLinkClass}>
            {({ isActive }) => (
              <>
                <svg
                  className={iconClass(isActive)}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Permissions
              </>
            )}
          </NavLink>
        </div>
      </div> */}

      {/* Account Section */}
      <div>
        <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Account
        </h3>
        <div className="mt-2 space-y-1">
          {/* <NavLink to="/settings" className={navLinkClass}>
            {({ isActive }) => (
              <>
                <svg
                  className={iconClass(isActive)}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Settings
              </>
            )}
          </NavLink> */}
          <NavLink to="/profile" className={navLinkClass}>
            {({ isActive }) => (
              <>
                <svg
                  className={iconClass(isActive)}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Profile
              </>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
