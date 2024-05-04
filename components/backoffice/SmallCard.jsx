import { ShoppingCart } from "lucide-react"


const SmallCard = ({data}) => {
    const {title, number, iconBg, icon : Icon} = data
  return (
    <div className="rounded-lg shadow-lg bg-[#352e60] p-4">
        <div className="flex space-x-4">
            <div className={`w-12 h-12 ${iconBg} rounded-full items-center flex justify-center`}>
                <Icon  />
            </div>
            <div >
                <p>{title}</p>
                <h3 className="text-xl font-bold">{number}</h3>
            </div>
        </div>
    </div>
  )
}

export default SmallCard