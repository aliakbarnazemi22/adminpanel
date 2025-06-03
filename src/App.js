import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import SidebarClose from './components/SidebarClose';

function App() {
  const [sidebar, setSidebar] = useState(true)
  console.log(sidebar)

  const toggleSidebar = () => {
    setSidebar(prevIsVisible => !prevIsVisible)
  }

  return (
    <div className="App">
      <div className='flex justify-between gap-0 fixed top-0 w-full'>

        {/* Start Sidebar */}
        <div className={'transition2' && sidebar === true ? 'w-1/4 xl:w-[15%] h-full min-h-[100vh] bg-white p-4 transition2 max-h-[100vh] overflow-y-auto hidden lg:block' : 'w-auto h-full min-h-[100vh] bg-white p-4 transition2 hidden lg:block'}>
          {sidebar === false ? <SidebarClose />
            : <Sidebar />
          }
        </div>
        {/* End Sidebar */}

        {/* Start header */}
        <header className={sidebar === false ? 'w-full bg-white max-h-[70px] border-b-gray-200 border-b shadow p-4 flex justify-between items-center' : 'w-full lg:w-[75%] xl:w-[85%] bg-white max-h-[70px] border-b-gray-200 border-b shadow p-4 flex justify-between items-center'}>
          <div className='flex items-center gap-4 w-1/2'>
            <button onClick={toggleSidebar}>
              <img src='images/menu.svg' className='w-[25px] h-[25px]' />
            </button>
            <button>
              <img src='images/search.svg' className='w-[25px] h-[25px]' />
            </button>
          </div>
          <div className='flex items-center gap-4 w-1/2' dir='ltr'>
            <button className='p-2 rounded-full bg-gray-200'>
              <img src='images/user.svg' className='w-[17px] h-[17px]' />
            </button>
            <button>
              <img src='images/notif.svg' className='w-[25px] h-[25px]' />
            </button>
          </div>
          <div>

          </div>
        </header>
        {/* End header */}
      </div>

      {/* Start Content */}
      <div className={sidebar === false ? '2xl:w-[95%] w-[90%] mt-[75px] h-[90vh] py-6 px-16 fixed left-0 overflow-x-auto' : 'w-[75%] xl:w-[85%] mt-[75px] h-[90vh] py-6 px-16 fixed left-0 overflow-x-auto'}>
        <Content />
      </div>
      {/* End Content */}

      <div className='absolute'>

      </div>
    </div>
  );
}

export default App;
