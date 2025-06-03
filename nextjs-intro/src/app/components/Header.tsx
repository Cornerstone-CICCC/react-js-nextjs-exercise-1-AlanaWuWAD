import Link from "next/link"

const Header = () => {
  return (
    <div className="flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
    </div>
  )
}

export default Header