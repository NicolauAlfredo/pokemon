import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav>
            <div>
                <Image 
                    src="/image/pokeball.png" 
                    width="30" 
                    height="30" 
                    alt="PokeNext"
                />
                <h1>PokeNext</h1>
            </div>

            <ul>
                <li>
                    <Link href='/'> 
                        <a>HOME</a> 
                    </Link>
                </li>
                <li>
                    <Link href='/about'> 
                        <a>SOBRE</a> 
                    </Link>
                </li>
            </ul>
        </nav>
    )
}