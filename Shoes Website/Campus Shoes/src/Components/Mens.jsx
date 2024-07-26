import { mensbanner } from "./Utils/images";
import Menscard from "./Menscard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useMens from "./Hooks/useMens";

const Mens = () => {
  const data = useSelector((store) => store.products.newMens);


  useMens();

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="box-border mt-24">
      <div>
        <img src={mensbanner} alt="" />
      </div>
      <Link key={data.id} to={"/menscard/:id"}>
        <div className="flex flex-wrap justify-center  gap-4 w-full">
          {data.map((resp, index) => {
            return <Menscard key={index} data={resp} />;
          })}
        </div>
      </Link>
    </div>
  );
};

export default Mens;
