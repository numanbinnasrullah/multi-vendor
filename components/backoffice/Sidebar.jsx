import Link from "next/link";


const Sidebar = () => {
  return (
    <div className="bg-slate-800 space-y-6 w-52">
      <Link href="#">Logo</Link>
      <div className="space-y-3">
        <Link href="">Dashboard</Link>
        <Link href="">Catalogue</Link>
        <Link href="">Customers</Link>
        <Link href="">Markets</Link>
        <Link href="">Faemers</Link>
        <Link href="">Orders</Link>
        <Link href="">Staff</Link>
        <Link href="">Settings</Link>
        <Link href="">Online Store</Link>
      </div>
    </div>
  )
}

export default Sidebar;