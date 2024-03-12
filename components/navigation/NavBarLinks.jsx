import Link from 'next/link'

function NavBarLinks({ isMobileMenuOpen }) {
    return (
        <ul className={`md:flex gap-4 text-slate-600 font-bold ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/adventure">Adventure</Link>
            </li>
            <li>
                <Link href="/sport">Sport</Link>
            </li>
            <li>
                <Link href="/street">Street</Link>
            </li>
            <li>
                <Link href="/touring">Touring</Link>
            </li>
        </ul>
    );
}

export default NavBarLinks;

