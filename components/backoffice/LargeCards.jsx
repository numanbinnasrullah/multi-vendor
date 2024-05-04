import Largecard from "./Largecard";


const LargeCards = () => {
  const orderStats = [
    {
      period: "Today Orders",
      sales: 11000,
      color: "bg-[#352e60]"
    },
    {
      period: "Yesterday Orders",
      sales: 13000,
      color: "bg-[#352e60]"
    },
    {
      period: "This Month",
      sales: 149000,
      color: "bg-[#352e60]"
    },
    {
      period: "All time Sales",
      sales: 6790000,
      color: "bg-[#352e60]"
    }
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {
        orderStats.map((item, i)=> {
          return (
            <Largecard className="bg-[#1a1641]" data={item} key={i} />
          )
        })
      }
    </div>
  )
}

export default LargeCards;