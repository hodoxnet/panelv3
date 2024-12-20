import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { menuItems } from '../../config/menuItems';

interface SidebarProps {
  isCollapsed: boolean;
}

export default function Sidebar({ isCollapsed }: SidebarProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    if (!isCollapsed) {
      setOpenSubmenu(openSubmenu === title ? null : title);
    }
  };

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 
      transition-all duration-300 ease-in-out z-30
      ${isCollapsed ? 'w-16' : 'w-60'}`}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className={`flex-shrink-0 p-4 border-b border-gray-200 ${isCollapsed ? 'text-center' : ''}`}>
          <h2 className={`font-semibold text-gray-800 truncate ${
            isCollapsed ? 'text-sm' : 'text-lg'
          }`}>
            {isCollapsed ? 'AP' : 'Admin Panel'}
          </h2>
        </div>

        {/* Menu Items - Scrollable Container */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <nav className={`p-2 ${isCollapsed ? 'px-2' : 'p-4'}`}>
            {menuItems.map((item) => (
              <div key={item.title} className="mb-1">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className={`flex items-center w-full px-3 py-2.5 text-left 
                      rounded-lg transition-colors duration-200 group relative
                      ${openSubmenu === item.title && !isCollapsed
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center min-w-0">
                        {item.icon && (
                          <item.icon className={`flex-shrink-0 w-5 h-5 transition-colors duration-200
                            ${openSubmenu === item.title && !isCollapsed ? 'text-blue-600' : 'text-gray-500'}`} 
                          />
                        )}
                        {!isCollapsed && (
                          <span className="ml-3 text-sm font-medium truncate pr-8">
                            {item.title}
                          </span>
                        )}
                      </div>
                      {!isCollapsed && (
                        <ChevronDown
                          className={`absolute right-3 w-4 h-4 transition-transform duration-200
                            ${openSubmenu === item.title ? 'transform rotate-180' : ''}`}
                        />
                      )}
                    </button>
                    
                    {/* Submenu */}
                    {!isCollapsed && (
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out
                        ${openSubmenu === item.title ? 'max-h-[500px]' : 'max-h-0'}`}
                      >
                        <div className="pl-10 pr-4 py-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <NavLink
                              key={subItem.path}
                              to={subItem.path}
                              className={({ isActive }) =>
                                `block py-2 px-3 rounded-md text-sm transition-colors duration-200
                                ${isActive 
                                  ? 'bg-blue-50 text-blue-600 font-medium' 
                                  : 'text-gray-600 hover:bg-gray-50'
                                }`
                              }
                            >
                              {subItem.title}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path!}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2.5 rounded-lg transition-colors duration-200 group
                      ${isActive 
                        ? 'bg-blue-50 text-blue-600 font-medium' 
                        : 'text-gray-700 hover:bg-gray-50'
                      }`
                    }
                  >
                    {item.icon && (
                      <item.icon className="w-5 h-5 text-gray-500" />
                    )}
                    {!isCollapsed && (
                      <span className="ml-3 text-sm truncate">{item.title}</span>
                    )}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}