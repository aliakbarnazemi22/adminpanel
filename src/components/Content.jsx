import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function Content() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 3000);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    fetch('https://683ee9391cd60dca33dd8a0e.mockapi.io/sales/sales')
      .then(response => response.json())
      .then(data => {
        const labels = data.map(item => item.month);
        const sales = data.map(item => item.sales);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'تعداد فروش ماه خرداد',
              data: sales,
              fill: false,
              borderColor: '#2a85ff',
              tension: 0.3,
            }
          ]
        });
      })
      .catch(error => console.error('خطا در دریافت داده‌ها:', error));
  }, []);

  return (
    <div>
      <div className='flex flex-col 2xl:flex-row justify-between w-full h-full gap-5'>
        <div className='w-full 2xl:w-[70%] h-full'>
          <div className='w-[100%] bg-white rounded-2xl border border-gray-200 p-4'>
            {loading === true ? <div className="w-full h-[600px] rounded-lg bg-gray-300 animate-pulse transition"></div>
              : <div className='w-full h-full transition2 bg-transparent font-medium div1'>
                <div className="mt-2">
                  <h3 className='font-bold text-lg'>
                    بررسی نمودار فروش
                  </h3>
                </div>
                <Line data={chartData} />
              </div>}
          </div>
          <div className='w-[100%] h-[485px] bg-white rounded-2xl border border-gray-200 p-4 mt-4'>
            {loading === true ? <div className="w-full h-full rounded-lg bg-gray-300 animate-pulse transition"></div>
              : <div className='w-full h-full transition2 bg-transparent'></div>}
          </div>
        </div>
        <div className='w-full 2xl:w-[30%] h-full'>
          <div className='w-[100%] h-[200px] bg-white rounded-2xl border border-gray-200 p-4'>
            {loading === true ? <div className="w-full h-full rounded-lg bg-gray-300 animate-pulse transition"></div>
              : <div className='w-full h-full transition2 bg-transparent'>
              </div>}
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