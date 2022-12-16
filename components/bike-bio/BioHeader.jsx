import Image from "next/image";

function BioHeader({ image, makeAndModel, price }) {
    return (
        <>     
           <div className="flex">
                <Image
                    class="profileImage"
                    src={image}
                    width={350}
                    height={200}
                />
        
                <div className="my-auto ml-5">
                    <p className="pb-2 text-2xl font-bold text-gray-90">{makeAndModel}</p>
                    <p className="font-bold text-green-700">Price: {price}</p>
                </div>
            </div>
        </>
   
    );
  }
  
  export default BioHeader;
