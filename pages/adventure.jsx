import { BikeCard } from "../components/bikes";
import { ContentPageLayout } from "../components/layouts";
import path from 'path'
import {promises as fs} from 'fs'

function AdventurePage({bikes}) {
    console.log(`${bikes}`)

    return (
        <>
           <main>
                <BikeCard/>
           </main>
        </>
    );
}

export default AdventurePage;

AdventurePage.getLayout = function getLayout(page) { 
    return ( 
        <ContentPageLayout type='Adventure Bikes' title='Title here.' tagline='Makes the last big thing usable' > 
            {page} 
        </ContentPageLayout>
       
    ) 
}

export async function getStaticProps(content){
    const filePath = path.join(process.cwd(), '')
    const bikes = JSON.parse(await fs.readFile(filePath, 'utf8'))

    console.log("Server Code")

    return{
        props:{
            bikes: "some bikes"
        }
    }
}