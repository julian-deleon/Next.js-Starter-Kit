import BioHeader from "../../components/bike-bio/BioHeader";
import BioTopic from "../../components/bike-bio/BioTopic";
import {getBikes} from "../../libs/getBikes"

function SingleBikePage({image, make, model, price, ...bio}) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-2">
        <BioHeader 
          image={image} 
          makeAndModel={`${make + " " + model}`}
          price={price}
        />

        <BioTopic/>
      </div>
    );
  }
  
  export default SingleBikePage;
  
  export async function getStaticPaths() {
    const bikes = await getBikes();
    const paths = bikes.map((bike) => ({ params: { id: bike.id } }));
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    const bikes = await getBikes();
    const bike = bikes.find((bike) => bike.id === params.id);
    const bio = { ...bike};
  
    return {
      props: bio
    };
  }