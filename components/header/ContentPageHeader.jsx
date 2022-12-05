function ContentPageHeader({title, tagline}) {
    return (
      <>
        <header className="text-center pt-10">
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </p>
          
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            {tagline}
          </p>
        </header>
      </>
    );
  }
  
  export default ContentPageHeader;