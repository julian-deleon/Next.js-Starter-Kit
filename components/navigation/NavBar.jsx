import GitHubLink from "./GitHubLink";
import LoginButton from "./LoginButton";
import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";


function NavBar() {
    return (
        <nav className="p-2 shadow relative flex justify-between">    
            <NavBarBranding/>
            <NavBarLinks/>

            <div className='hidden md:flex gap-4'>
                <LoginButton className="md:block md:text-right hover:text-orange-500"/>
                <GitHubLink/>
            </div>
            
            <MobileMenuButton className="md: hidden"/>
        </nav>
    )
}

export default NavBar;
