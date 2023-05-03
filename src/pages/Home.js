import BestSelling from "../components/BestSelling";
import Consultation from "../components/Consultation";
import Catagories from "../components/Catagories";
import Offers from "../components/Offers";
import Slider from "../components/Slider";
import FeatureProducts from "../components/FeatureProducts";

import Whyme from "../components/Whyme";

const Home = () => {
  return (
    
    <div className="home">
      <Slider />
      <Catagories />
      <FeatureProducts/>
      <BestSelling />
    </div>
    
  );
};

export default Home;
