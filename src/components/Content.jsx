import React, { useState } from 'react'

function Content() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 2000);

  return (
    <div>
      <div className='flex flex-col 2xl:flex-row justify-between w-full h-full gap-5'>
        <div className='w-full 2xl:w-[77%] h-full'>
          <div className='w-[100%] h-[650px] bg-white rounded-2xl border border-gray-200 p-4'>
            {loading === true ? <div className="w-full h-full rounded-lg bg-gray-300 animate-pulse transition"></div>
              : <div className='w-full h-full transition2 bg-transparent'></div>}
          </div>
          <div className='w-[100%] h-[485px] bg-white rounded-2xl border border-gray-200 p-4 mt-4'>
            {loading === true ? <div className="w-full h-full rounded-lg bg-gray-300 animate-pulse transition"></div>
              : <div className='w-full h-full transition2 bg-transparent'></div>}
          </div>
        </div>
        <div className='w-full 2xl:w-[23%] h-full'>
          <div className='w-[100%] h-[200px] bg-white rounded-2xl border border-gray-200 p-4'>
            {loading === true ? <div className="w-full h-full rounded-lg bg-gray-300 animate-pulse transition"></div>
              : <div className='w-full h-full transition2 bg-transparent'></div>}

          </div>
          <div className='w-[100%] h-[535px] bg-white rounded-2xl border border-gray-200 p-4 mt-4'>
            {loading === true ? <div className="w-full h-full rounded-lg bg-gray-300 animate-pulse transition"></div>
              : <div className='w-full h-full transition2 bg-transparent'></div>}

          </div>
          <div className='w-[100%] h-[385px] bg-white rounded-2xl border border-gray-200 p-4 mt-4'>
            {loading === true ? <div className="w-full h-full rounded-lg bg-gray-300 animate-pulse transition"></div>
              : <div className='w-full h-full transition2 bg-transparent'></div>}
          </div>
        </div>
      </div>
      <div className='w-[100%] h-[385px] bg-white rounded-2xl border border-gray-200 p-4 mt-4'>
        {loading === true ? <div className="w-full h-full rounded-lg bg-gray-300 animate-pulse transition"></div>
          : <div className='w-full h-full transition2 bg-transparent'></div>}
      </div>
    </div>
  )
}

export default Content