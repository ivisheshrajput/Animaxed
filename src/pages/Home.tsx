import { Link } from "react-router-dom";
import BackgroundImage from "../assets/img/AnimeBackground.jpg";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCardHandler = () => {};
  return (
    <div>
      <section className="flex justify-center items-center my-9 ">
        {" "}
        <img
          src={BackgroundImage}
          alt="Background Image"
          className=" md:w-10/12 h-[300px] shadow-md"
        />
      </section>
      <div className="flex justify-between mx-4">
        <h1 className="text-2xl font-semibold tracking-wider ">
          Latest Product{" "}
        </h1>
        <Link to={"/search"}>
          <span className="text-md">More</span>
        </Link>
      </div>
      <main>
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