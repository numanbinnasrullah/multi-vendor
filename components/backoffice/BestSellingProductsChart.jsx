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
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
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
        <Pie data={data} />
    </div>
  )
}

export default BestSellingProductsChart;