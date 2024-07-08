import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button 
        className="md:hidden p-4 bg-gray-800 text-white" 
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      <div className={`fixed md:relative z-10 w-64 h-full bg-gray-800 text-white md:translate-x-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        
        <ul>
          <li className="p-4 hover:bg-gray-700"><a href="#">Dashboard</a></li>
          <li className="p-4 hover:bg-gray-700"><a href="#">Skill Test</a></li>
          <li className="p-4 hover:bg-gray-700"><a href="#">Internship</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
