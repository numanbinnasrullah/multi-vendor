"use client"
import { useState } from "react"


const WeeklySaleschart = () => {
  const tabs =[
    {
      title:"Sales",
      type:"sales"
    },
    {
      title:"Orders",
      type:"orders"
    }
  ]
  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type)
  return (
    <div className="bg-[#352e60] p-8 rounded-lg">
    <h2 className="text-xl font-bold mb-4">Weekly Sales</h2>
    {/* Chart */}
    <div className='p-4'>
    {/* tabs */}
          <div className="text-sm font-medium text-center text-gray-100 border-b border-gray-400 dark:text-gray-400 dark:border-gray-700">
              <ul className="flex flex-wrap -mb-px">
                {
                  tabs.map((tab, i)=>{
                    return (
                        <li className="me-2" key={i}>
                            <button onClick={()=>setChartToDisplay(tab.type)}  className={chartToDisplay == tab.type ? "inline-block p-4 text-orange-500 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500": "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-200 hover:border-gray-300 dark:hover:text-gray-300"}>{tab.title}</button>
                        </li>
                    )
                  })
                }

                  
                  {/* <li className="me-2">
                      <button  className="inline-block p-4 text-orange-500 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500" aria-current="page">Orders</button>
                  </li> */}
                  
              </ul>
          </div>
          {/* Content to display */}
            {
              tabs.map((tab, i)=>{
                if(chartToDisplay === tab.type){
                  return <h2>{tab.title}</h2>
                }
                return null
              })
            }
    </div>
</div>
  )
}

export default WeeklySaleschart;