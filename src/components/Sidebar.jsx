import React from 'react'

function Sidebar() {
  return (
    <div>
      <p className='font-[600] text-[#737373] text-[12px] mr-4'>
        داشبورد
      </p>

      <div className="mt-2 flex flex-col">
        <div className="cursor-pointer flex items-center gap-2 font-[600] text-[#525252] transition2 hover:text-blue-500 text-[13px] w-full p-3 rounded-lg hover:bg-gray-100">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M232,72l-25.63,92.28A16,16,0,0,1,191,176H92.16a16,16,0,0,1-15.41-11.72L51.11,72Z" opacity="0.2"></path><path d="M104,216a16,16,0,1,1-16-16A16,16,0,0,1,104,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,192,200ZM239.71,74.14l-25.64,92.28A24.06,24.06,0,0,1,191,184H92.16A24.06,24.06,0,0,1,69,166.42L33.92,40H16a8,8,0,0,1,0-16H40a8,8,0,0,1,7.71,5.86L57.19,64H232a8,8,0,0,1,7.71,10.14ZM221.47,80H61.64l22.81,82.14A8,8,0,0,0,92.16,168H191a8,8,0,0,0,7.71-5.86Z"></path></svg>
          <div className='mt-[5px]'>
            فروشگاه آنلاین
          </div>
        </div>
        <div className="cursor-pointer flex items-center gap-2 font-[600] text-[#525252] transition2 hover:text-blue-500 text-[13px] w-full p-3 rounded-lg hover:bg-gray-100">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M94.81,192,65.36,214.24a8,8,0,0,1-12.81-4.51L40.19,154.1a8,8,0,0,1,1.66-6.86l30.31-36.33C71,134.25,76.7,161.43,94.81,192Zm119.34-44.76-30.31-36.33c1.21,23.34-4.54,50.52-22.65,81.09l29.45,22.24a8,8,0,0,0,12.81-4.51l12.36-55.63A8,8,0,0,0,214.15,147.24Z" opacity="0.2"></path><path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"></path></svg>          <div className='mt-[5px]'>
            پروژه
          </div>
        </div>
        <div className="cursor-pointer flex items-center gap-2 font-[600] text-[#525252] transition2 hover:text-blue-500 text-[13px] w-full p-3 rounded-lg hover:bg-gray-100">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M240,120a40,40,0,0,1-40,40H160V80h40A40,40,0,0,1,240,120Z" opacity="0.2"></path><path d="M248,120a48.05,48.05,0,0,0-48-48H160.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,32,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,159.12,214l11,7.33A16,16,0,0,0,194.5,212l11.77-44.36A48.07,48.07,0,0,0,248,120ZM48,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C134.65,155,90.84,164.07,48,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM200,152H168V88h32a32,32,0,1,1,0,64Z"></path></svg>          <div className='mt-[5px]'>
            بازاریابی
          </div>
        </div>
        <div className="cursor-pointer flex items-center gap-2 font-[600] text-[#525252] transition2 hover:text-blue-500 text-[13px] w-full p-3 rounded-lg hover:bg-gray-100">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M208,40V208H152V40Z" opacity="0.2"></path><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>
          <div className='mt-[5px]'>
            تحلیل
          </div>
        </div>
      </div>

      <br />
      <br />
      <p className='font-[600] text-[#737373] text-[12px] mr-4'>
        مفاهیم
      </p>

      <div className="mt-2 flex flex-col">
        <div className="cursor-pointer flex items-center gap-2 font-[600] text-[#525252] transition2 hover:text-blue-500 text-[13px] w-full p-3 rounded-lg hover:bg-gray-100">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M194.82,151.43l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0l-20.3-55.09-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3A7.92,7.92,0,0,1,194.82,151.43Z" opacity="0.2"></path><path d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"></path></svg>          <div className='mt-[5px]'>
            هوش مصنوعی
          </div>
        </div>
        <div className="cursor-pointer flex items-center gap-2 font-[600] text-[#525252] transition2 hover:text-blue-500 text-[13px] w-full p-3 rounded-lg hover:bg-gray-100">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M208,72V184H48V72Z" opacity="0.2"></path><path d="M88,144V128a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V120a8,8,0,0,0-16,0v24A8,8,0,0,0,128,152Zm32,0a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,160,152Zm56-72v96h8a8,8,0,0,1,0,16H136v17.38a24,24,0,1,1-16,0V192H32a8,8,0,0,1,0-16h8V80A16,16,0,0,1,24,64V48A16,16,0,0,1,40,32H216a16,16,0,0,1,16,16V64A16,16,0,0,1,216,80ZM136,232a8,8,0,1,0-8,8A8,8,0,0,0,136,232ZM40,64H216V48H40ZM200,80H56v96H200Z"></path></svg>
          پروژه ها
        </div>
        <div className="cursor-pointer flex items-center gap-2 font-[600] text-[#525252] transition2 hover:text-blue-500 text-[13px] w-full p-3 rounded-lg hover:bg-gray-100">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M136,108A52,52,0,1,1,84,56,52,52,0,0,1,136,108Z" opacity="0.2"></path><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>
          <div className='mt-[5px]'>
            مشتریان
          </div>
        </div>
        <div className="cursor-pointer flex items-center gap-2 font-[600] text-[#525252] transition2 hover:text-blue-500 text-[13px] w-full p-3 rounded-lg hover:bg-gray-100">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,.7-3.25Z" opacity="0.2"></path><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></path></svg>
          <div className='mt-[5px]'>
            محصولات
          </div>
        </div>

        <div className="cursor-pointer flex items-center gap-2 font-[600] text-[#525252] transition2 hover:text-blue-500 text-[13px] w-full p-3 rounded-lg hover:bg-gray-100">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M224,64l-12.16,66.86A16,16,0,0,1,196.1,144H70.55L56,64Z" opacity="0.2"></path><path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path></svg>
          <div className='mt-[5px]'>
            سفارش ها
          </div>
        </div>

        <div className="cursor-pointer flex items-center gap-2 font-[600] text-[#525252] transition2 hover:text-blue-500 text-[13px] w-full p-3 rounded-lg hover:bg-gray-100">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a95.76,95.76,0,0,1-31.8,71.37A72,72,0,0,0,128,160a40,40,0,1,0-40-40,40,40,0,0,0,40,40,72,72,0,0,0-64.2,39.37h0A96,96,0,1,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path></svg>
          <div className='mt-[5px]'>
            حساب کاربری
          </div>
        </div>

        <div className="cursor-pointer flex items-center gap-2 font-[600] text-[#525252] transition2 hover:text-blue-500 text-[13px] w-full p-3 rounded-lg hover:bg-gray-100">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
          <div className='mt-[5px]'>
            مرکز راهنمایی
          </div>
        </div>

        <div className="cursor-pointer flex items-center gap-2 font-[600] text-[#525252] transition2 hover:text-blue-500 text-[13px] w-full p-3 rounded-lg hover:bg-gray-100">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"></path><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path></svg>
          <div className='mt-[5px]'>
            تقویم
          </div>
        </div>

        <div className="cursor-pointer flex items-center gap-2 font-[600] text-[#525252] transition2 hover:text-blue-500 text-[13px] w-full p-3 rounded-lg hover:bg-gray-100">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M208,88v24H69.77a8,8,0,0,0-7.59,5.47L32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h72A8,8,0,0,1,208,88Z" opacity="0.2"></path><path d="M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z"></path></svg>
          <div className='mt-[5px]'>
            مدیریت فایل
          </div>
        </div>

        <div className="cursor-pointer flex items-center gap-2 font-[600] text-[#525252] transition2 hover:text-blue-500 text-[13px] w-full p-3 rounded-lg hover:bg-gray-100">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M224,56l-96,88L32,56Z" opacity="0.2"></path><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg>
          <div className='mt-[5px]'>
            ایمیل
          </div>
        </div>

        <div className="cursor-pointer flex items-center gap-2 font-[600] text-[#525252] transition2 hover:text-blue-500 text-[13px] w-full p-3 rounded-lg hover:bg-gray-100">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path></svg>
          <div className='mt-[5px]'>
            گفتگو
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar