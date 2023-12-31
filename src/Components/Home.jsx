import AfterSaleService from "./AfterSaleService";
import Brands from "./Brands";
import Hero from "./Hero";
import TopRatedProducts from "./TopRatedProducts";



const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Brands></Brands>
            <TopRatedProducts></TopRatedProducts>
            <AfterSaleService></AfterSaleService>
        </div>
    );
};

export default Home;