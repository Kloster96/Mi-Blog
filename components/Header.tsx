import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
            <Link href="/" >
                <Image
                    className="rounded-full object-cover"
                    height={65}
                    width={65}
                    src="/images/Logo2.jpg"
                    alt="Logo"
                />
            </Link>
            <h1>Kloster Studio</h1>
        </div>

        <div>
        <Link 
            href="/"
            className="px-5 py-3 text-sm md:text-base bg-[#2b2962] text-[#f3e3e3]
             flex items-center rounded-full text-center"
        >
            Contact me through my portfolio
        </Link>
        </div>
    </header>
  )
}

export default Header