"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const BestSellingProductsChart = () => {
    const data = {
        labels: ['Cabbage', 'Watermelon', 'Broccoli', 'Maize'],
        datasets: [
          {
            label: '# of Votes',
            data: [40, 10, 30, 20],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(552, 162, 235, 0.4)',
              'rgba(255, 206, 86, 0.4)',
              'rgba(75, 192, 192, 0.5)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(552, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <div className="bg-[#352e60] p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Best Selling Products</h2>
        {/* Chart */}
        <div className='p-4'>
        <Pie data={data} />
        </div>
    </div>
  )
}

export default BestSellingProductsChart;