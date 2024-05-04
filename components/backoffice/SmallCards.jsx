import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react"
import SmallCard from "./SmallCard";


const SmallCards = () => {
  const orderStatus = [
    {
      title: "Total Order",
      number: 400,
      iconBg: "bg-[#1a1641]",
      icon: ShoppingCart
    },
    {
      title: "Orders Pending",
      number: 250,
      iconBg: "bg-[#1a1641]",
      icon: Loader2
    },
    {
      title: "order Processing",
      number: 170,
      iconBg: "bg-[#1a1641]",
      icon: RefreshCcw
    },
    {
      title: "Orders Delivered",
      number: 300,
      iconBg: "bg-[#1a1641]",
      icon: CheckCheck
    }
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {
        orderStatus.map((item, i)=> {
          return (
            <SmallCard data={item} key={i} />
          )
        })
      }
    </div>
  )
}

export default SmallCards;