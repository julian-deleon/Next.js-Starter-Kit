import { BikeCard } from "../components/bikes";
import { ContentPageLayout } from "../components/layouts";
import path from 'path'
import {promises as fs} from 'fs'

function AdventurePage({bikes}) {
    //console.log(`${bikes}`)

    return (
        <>
        <div className="bg-[url('/road-bg.jpg')] bg-cover">
            <ContentPageLayout
                title="Touring Bikes"
                tagline="The long way home"
           />

            <main className="mt-10 pb-20 flex flex-row gap-6 flex-wrap justify-center mx-auto max-w-7xl">
                {bikes.map(bike => <BikeCard key={bike.id} 
                    makeAndModel={`${bike.make + " " + bike.model}`}
                    image={bike.image}
                    price={bike.price}
                    rating={bike.rating}
                    condition={bike.condition}
                />)}
            </main>
        </div>
        </>

    );
}

export default AdventurePage;


export async function getStaticProps(content){
    const filePath = path.join(process.cwd(), '/mock/bikes.json')
    const bikes = JSON.parse(await fs.readFile(filePath, 'utf8'))

    const adventureBikes = bikes.filter(bike => bike.category==="adventure")

    return{
        props:{
            bikes: adventureBikes
        }
    }
}