import LoginButton from "./LoginButton";
import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";


function NavBar() {
    return (
        <nav className="p-2 shadow relative flex justify-between">    
            <NavBarBranding/>
            <NavBarLinks/>
            <LoginButton className="md:block md:text-right"/>
            <MobileMenuButton className="md: hidden"/>
        </nav>
    )
}

export default NavBar;
