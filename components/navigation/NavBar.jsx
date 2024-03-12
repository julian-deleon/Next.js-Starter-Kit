import GitHubLink from "./GitHubLink";
import LoginButton from "./LoginButton";
import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";
import { useState } from 'react';

function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="p-2 shadow relative flex justify-between">
            <NavBarBranding/>
            <NavBarLinks isMobileMenuOpen={isMobileMenuOpen} />

            <div className="hidden md:flex gap-4">
                <LoginButton className="md:block md:text-right hover:text-orange-500" />
                <GitHubLink />
            </div>
            <MobileMenuButton className="md:hidden" toggleMobileMenu={toggleMobileMenu} />
        </nav>
    );
}

export default NavBar;
