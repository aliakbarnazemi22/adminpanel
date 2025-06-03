import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import SidebarClose from './components/SidebarClose';


function App() {
  // Use state to open and close sidebar
  const [sidebar, setSidebar] = useState(true)

  const toggleSidebar = () => {
    setSidebar(prevIsVisible => !prevIsVisible)
  }

  // Use state to open and close search modal
  const [search, setSearch] = useState(false)

  return (
    <div className="App">
      <div className='flex justify-between gap-0 fixed top-0 w-full'>
        {/* Start Sidebar */}
        <div className={'transition2' && sidebar === true ? 'w-1/4 xl:w-[15%] h-full min-h-[100vh] bg-white p-4 transition2 max-h-[100vh] overflow-y-auto hidden lg:block' : 'w-auto h-full min-h-[100vh] bg-white p-4 transition2 hidden lg:block'}>
          {sidebar === false ? <SidebarClose />
            : <div>
              <a href="https://aliakbarnazemi.ir" target='_blank' rel='noreferrer' className='text-lg font-medium'>
                Aliakbar Nazemi
              </a>
              <br />
              <br />
              <Sidebar />
            </div>
          }
        </div>
        {/* End Sidebar */}

        {/* Start header */}
        <header className={sidebar === false ? 'w-full bg-white max-h-[70px] border-b-gray-200 border-b shadow p-4 flex justify-between items-center' : 'w-full lg:w-[75%] xl:w-[85%] bg-white max-h-[70px] border-b-gray-200 border-b shadow p-4 flex justify-between items-center'}>
          <div className='flex items-center gap-4 w-1/2'>
            <button onClick={toggleSidebar}>
              <img src='images/menu.svg' className='w-[25px] h-[25px]' />
            </button>
            <button onClick={() => setSearch(true)}>
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
      <div className={sidebar === false ? '2xl:w-[95%] w-[90%] mt-[75px] h-[90vh] lg:py-6 py-4 px-4 md:px-16 fixed left-0 overflow-x-auto z-0' : 'w-full lg:w-[75%] xl:w-[85%] mt-[75px] h-[90vh] py-4 lg:py-6 px-4 lg:px-16 fixed left-0 z-0 overflow-x-auto'}>
        <Content />
      </div>
      {/* End Content */}

      {search === true ? <div className='absolute top-0 left-0 w-full h-full z-50 bg-[rgba(0,0,0,0.4)] backdrop-blur-lg py-16 flex justify-center'>
        <div className="w-[95%] sm:w-[90%] md:w-[70%] lg:w-1/2 xl:w-[30%] p-3 h-[fit-content] rounded-2xl bg-white">
          <div className="w-full flex justify-between items-center">
            <form action="" className='flex items-center gap-4'>
              <button>
                <svg stroke="#525252" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
              <input type='text' className='focus:outline-none font-bold mt-[3px]' placeholder='جستجو...' />
            </form>
            <button className='text-[13px] py-1 px-2 border border-gray-200 rounded-md' onClick={() => setSearch(false)}>خروج</button>
          </div>
          <hr className='my-3' />

          <div className='py-5 px-4'>
            <p className='font-bold text-[0.95rem]'>
              پیشنهاد شده
            </p>
            <div className='flex flex-col gap-3 mt-4'>
              <div className='w-full p-2 flex items-center justify-between bg-transparent transition2 hover:bg-gray-100 rounded-lg cursor-pointer'>
                <div className='flex items-center gap-2'>
                  <div class="rounded-lg border-2 border-gray-200 shadow-sm text-xl group-hover:shadow h-10 w-10 flex items-center justify-center bg-white text-gray-900"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208,32V192H72a24,24,0,0,0-24,24V56A24,24,0,0,1,72,32Z" opacity="0.2"></path><path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z"></path></svg></div>
                  <p className='text-[13px] text-black font-bold mt-[3px]'>
                    مستندات
                  </p>
                </div>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              </div>

              <div className='w-full p-2 flex items-center justify-between bg-transparent transition2 hover:bg-gray-100 rounded-lg cursor-pointer'>
                <div className='flex items-center gap-2'>
                  <div class="rounded-lg border-2 border-gray-200 shadow-sm text-xl group-hover:shadow h-10 w-10 flex items-center justify-center bg-white text-gray-900">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M240,128l-48,40H64L16,128,64,88H192Z" opacity="0.2"></path><path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path></svg>
                  </div>
                  <p className='text-[13px] text-black font-bold mt-[3px]'>
                    تغییرات
                  </p>
                </div>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              </div>

              <div className='w-full p-2 flex items-center justify-between bg-transparent transition2 hover:bg-gray-100 rounded-lg cursor-pointer'>
                <div className='flex items-center gap-2'>
                  <div class="rounded-lg border-2 border-gray-200 shadow-sm text-xl group-hover:shadow h-10 w-10 flex items-center justify-center bg-white text-gray-900">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M213.66,201,201,213.66a8,8,0,0,1-11.31,0l-51.31-51.31a8,8,0,0,0-13,2.46l-17.82,46.41a8,8,0,0,1-14.85-.71L40.41,50.44a8,8,0,0,1,10-10L210.51,92.68a8,8,0,0,1,.71,14.85l-46.41,17.82a8,8,0,0,0-2.46,13l51.31,51.31A8,8,0,0,1,213.66,201Z" opacity="0.2"></path><path d="M88,24V16a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM16,104h8a8,8,0,0,0,0-16H16a8,8,0,0,0,0,16ZM124.42,39.16a8,8,0,0,0,10.74-3.58l8-16a8,8,0,0,0-14.31-7.16l-8,16A8,8,0,0,0,124.42,39.16Zm-96,81.69-16,8a8,8,0,0,0,7.16,14.31l16-8a8,8,0,1,0-7.16-14.31ZM219.31,184a16,16,0,0,1,0,22.63l-12.68,12.68a16,16,0,0,1-22.63,0L132.7,168,115,214.09c0,.1-.08.21-.13.32a15.83,15.83,0,0,1-14.6,9.59l-.79,0a15.83,15.83,0,0,1-14.41-11L32.8,52.92A16,16,0,0,1,52.92,32.8L213,85.07a16,16,0,0,1,1.41,29.8l-.32.13L168,132.69ZM208,195.31,156.69,144h0a16,16,0,0,1,4.93-26l.32-.14,45.95-17.64L48,48l52.2,159.86,17.65-46c0-.11.08-.22.13-.33a16,16,0,0,1,11.69-9.34,16.72,16.72,0,0,1,3-.28,16,16,0,0,1,11.3,4.69L195.31,208Z"></path></svg>
                  </div>
                  <p className='text-[13px] text-black font-bold mt-[3px]'>
                    دکمه
                  </p>
                </div>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div> : ''}

      {sidebar === false ? <div className='absolute top-0 left-0 w-full h-full z-c1 bg-[rgba(0,0,0,0.4)] py-16 flex justify-center lg:hidden'>
        <div className='fixed w-[70%] sm:w-1/2 lg:w-1/3 h-full bg-white top-0 right-0 max-h-full overflow-y-auto'>
          <div className='p-4 flex justify-between items-center'>
            <a href="https://aliakbarnazemi.ir" target='_blank' rel='noreferrer' className='text-lg font-bold'>
              ناوبری
            </a>
            <button class="p-2 bg-gray-100 rounded-full" onClick={toggleSidebar} type="button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
          </div>
          <hr className='mb-2' />
          <div className='p-2'>
            <Sidebar />
          </div>
        </div>
      </div> : ''}
    </div>
  );
}

export default App;
