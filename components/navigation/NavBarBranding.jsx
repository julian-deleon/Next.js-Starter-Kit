import LogoSVG from "../icons/SVGLogo";

function NavBarBranding({className, ...props}) {
    return (
        <a href="/">
            <figure className="flex items-center gap-2">
                <LogoSVG className="w-6"/>
                <figcaption>
                    <h1>Bike Lounge</h1>
                </figcaption>
            </figure>
        </a>

    );
}

export default NavBarBranding;

