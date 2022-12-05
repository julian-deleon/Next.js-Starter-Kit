function PageHeader({title = "Page Title", tagline ="Page Tagline"}) {
    return (
        
        <header className='text-center py-[10rem] bg-gradient-to-r from-red-100 to-red-200'>
            <img className='w-[25%] mx-auto pb-[1rem]' src="/motorcycle-svgrepo-com.svg" alt="Bike Lounge icon"/>
            <h1 className='text-7xl font-semibold text-red-500/80'>{title}</h1>
            <p className='font-semibold pt-[1rem]'>{tagline}</p>
        </header>
        
    );
}

export default PageHeader;