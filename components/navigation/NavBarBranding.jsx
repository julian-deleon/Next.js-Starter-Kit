import LogoSVG from "../icons/SVGLogo";

function NavBarBranding({className, ...props}) {
    return (
    
        <figure className="flex items-center gap-2">
            <LogoSVG className="w-6"/>
            <figcaption>
                <h1>Dev Lounge</h1>
            </figcaption>
        </figure>

    );
}

export default NavBarBranding;

