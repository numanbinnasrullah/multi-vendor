import { AlignJustify, Bell, Sun, User } from "lucide-react";


const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-[#1c1642] text-slate-50 h-16 px-8 py-4 fixed top-0 left-64 right-0">
        <button> <AlignJustify /> </button>
        <div className="flex space-x-5">
            <button><Sun /></button>
            <button><Bell /></button>
            <button><User /></button>
        </div>
    </div>
  )
}

export default Navbar;