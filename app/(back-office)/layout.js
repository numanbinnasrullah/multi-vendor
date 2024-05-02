import Sidebar from "@/components/backoffice/Sidebar";


const layout = ({children}) => {
  return (
    <div className="flex ">
      {/* Sidebar */}
      <Sidebar />
      <div className="w-full">
        {/* header */}
        <h2>Navbar</h2>
        <main>{children}</main>
        {/* Main */}
      </div>
    </div>
  )
}

export default layout;