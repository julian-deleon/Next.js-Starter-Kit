function PageHeader({title = "Page Title", tagline ="Page Tagline"}) {
    return (
        
        <header className='text-center py-[10rem] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-100 via-yellow-200 to-yellow-400'>
            <img className='w-[25%] mx-auto pb-[1rem]' src="/motorcycle-svgrepo-com.svg" alt="Bike Lounge icon"/>
            <h1 className='text-7xl font-semibold text-gray-400'>{title}</h1>
            <p className='font-semibold pt-[1rem] text-gray-400'>{tagline}</p>
        </header>
        
    );
}

export default PageHeader;