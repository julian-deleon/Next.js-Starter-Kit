import Image from "next/image";

function BikeCard({image, makeAndModel, price, rating, condition}) {
    return (
      <div className="flex">
        <Image
          className="rounded-l-lg border border-gray-200 shadow-md"
          src={image}
          width={200}
          height={200}
        />
       
       <div className="w-96 p-6 bg-white border border-gray-200 rounded-r-lg shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {makeAndModel}
            </h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              {price}
            </p>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              {rating}
            </p>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              {condition}
            </p>
        </div>
      </div>

     


    );
  }
  
  export default BikeCard;

//   <div class="flex h-screen items-center justify-center bg-indigo-50 px-4">
// <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
//   <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" class="h-auto w-full" />
//   <div class="p-5">
//     <p class="text-medium mb-5 text-gray-700">Well, aren't you going up to the lake tonight, you've been planning it for two weeks.</p>
//     <button class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">See More</button>
//   </div>
// </div>
// </div>