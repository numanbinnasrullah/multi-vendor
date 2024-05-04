import BestSellingProductsChart from "./BestSellingProductsChart";
import WeeklySaleschart from "./WeeklySaleschart";


const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <WeeklySaleschart />
        <BestSellingProductsChart />
    </div>
  )
}

export default DashboardCharts;