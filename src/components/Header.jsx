import { useState } from "react";

function Header({ sidebarOpen, searchOpen }) {
  // Use state to open and close sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prevIsVisible) => !prevIsVisible);
  };

  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header
      className={
        sidebarOpen === false
          ? "w-full bg-white max-h-[70px] border-b-gray-200 border-b shadow p-4 flex justify-between items-center"
          : "w-full lg:w-[75%] xl:w-[85%] bg-white max-h-[70px] border-b-gray-200 border-b shadow p-4 flex justify-between items-center"
      }
    >
      <div className="flex items-center gap-4 w-1/2">
        <button onClick={toggleSidebar}>
          <img src="images/menu.svg" className="w-[25px] h-[25px]" />
        </button>
        <button onClick={() => setSearchOpen(true)}>
          <img src="images/search.svg" className="w-[25px] h-[25px]" />
        </button>
      </div>
      <div className="flex items-center gap-4 w-1/2" dir="ltr">
        <button className="p-2 rounded-full bg-gray-200">
          <img src="images/user.svg" className="w-[17px] h-[17px]" />
        </button>
        <button>
          <img src="images/notif.svg" className="w-[25px] h-[25px]" />
        </button>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
