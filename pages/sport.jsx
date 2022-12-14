import { BikeCard } from "../components/bikes";
import { ContentPageLayout } from "../components/layouts";
import { getBikes } from '../libs/getBikes'

function AdventurePage({bikes}) {
    //console.log(`${bikes}`)

    return (
        <>
        <div className="bg-[url('/road-bg.jpg')] bg-cover">
            <ContentPageLayout
                title="Sport Bikes"
                tagline="Feel the thrill of racing"
           />

            <main className="mt-10 pb-20 flex flex-row gap-6 flex-wrap justify-center mx-auto max-w-7xl">
                {bikes.map(bike => <BikeCard key={bike.id} 
                    makeAndModel={`${bike.make + " " + bike.model}`}
                    image={bike.image}
                    price={bike.price}
                    rating={bike.rating}
                    condition={bike.condition}
                    id={bike.id}
                />)}
            </main>
        </div>
        </>

    );
}

export default AdventurePage;


export async function getStaticProps(content){
    const bikes = await getBikes()

    const adventureBikes = bikes.filter(bike => bike.category==="adventure")

    return{
        props:{
            bikes: adventureBikes
        }
    }
}