import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";


const layout = ({children}) => {
  return (
    <div className="flex ">
      {/* Sidebar */}
      <Sidebar />
      <div className="w-full">
        {/* header */}
        <Navbar />
        <main className="ml-60 p-8 bg-[#231c4e] text-slate-50 min-h-screen mt-16">{children}</main>
        {/* Main */}
      </div>
    </div>
  )
}

export default layout;