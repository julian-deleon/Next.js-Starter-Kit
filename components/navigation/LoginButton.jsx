import Link from "next/link";

function LoginButton({className, ...props}) {
    return (
        <Link href="signin" className={`hidden ${className} w-[130px]`}>
            Login
        </Link>
            
            
    );
}

export default LoginButton;