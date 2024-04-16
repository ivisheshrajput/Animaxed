import { Link } from "react-router-dom";
import BackgroundImage from "../assets/img/BackgroundImage.webp";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCardHandler = () => {};
  return (
    <div className="mx-8 ">
      <section className="flex justify-between  items-center  md:my-4">
        {" "}
        <div ><p className="text-white text-sm">Top Searches</p>
        <p className="text-xs text-tertiary-color">Naruto, One Piece, Dragon Ball, Shadow Levelling</p>
        </div>
        <img
          src={BackgroundImage}
          alt="Background Image"
          className="md:w-[600px] md:h-[400px] w-[200px] h-[200px]"
        />
      </section>
      <div className="flex justify-between">
        <h1 className="text-2xl font-PoppinsMedium text-tertiary-color   tracking-wider ">
          Latest Product{" "}
        </h1>
        <Link to={"/search"}>
          <span className="text-md font-PoppinsMedium text-tertiary-color ">More</span>
        </Link>
      </div>
      <main className="mt-3">
        <ProductCard
          name="Goku"
          price={1200}
          productId="GOKU1234"
          stock={18}
          handler={addToCardHandler}
          photo="src/assets/img/DragonBall/kawaii_kart_son_goku_ultra_instinct_action_figure41.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
