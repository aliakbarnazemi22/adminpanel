import './App.css';

function App() {
  return (
    <div className="App">
      <div className='flex justify-between gap-0 fixed top-0 w-full'>
        <div className='w-[15%] h-full min-h-[100vh] bg-white'>

        </div>
        <header className='w-[85%] bg-white max-h-[70px] border-b-gray-200 border-b shadow p-4 flex justify-between items-center'>
          <div className='flex items-center gap-4 w-1/2'>
            <button>
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
      </div>
      <div className='w-[85%] mt-[75px] h-[90vh] p-4 fixed left-0 overflow-x-auto'>
      </div>
    </div>
  );
}

export default App;
