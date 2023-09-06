import Link from "next/link"

const HeaderComponent = () =>{
    return(

          <div className="sticky top-0 z-10">
            <nav className="px-[1.5rem] py-2 bg-white">
              <ul className="flex items-center text-[0.75rem] justify-between text-gray-500">
                <li>
                  <Link href={"/"}>Beranda</Link>
                </li>
                <li>
                  <Link href={"/"}>Artikel</Link>
                </li>
                <li>
                  <Link href={"/"}>Produk</Link>
                </li>
                <li>
                  <Link href={"/"}>Karir</Link>
                </li>
              </ul>
            </nav>
          </div>
    )
}

export default HeaderComponent;