
import { banner } from "./Utils/icons";
import Exclusive from "./Exclusive";
import Shimmer from "./Shimmer";
import useNewarrivals from "./Hooks/useNewarrivals";
import { useSelector } from "react-redux";
const Body = () => {
  const data = useSelector((store) => {
    return store.products.newArrivals;
  });
  useNewarrivals();

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="box-border mt-24">
      <div>
        <img src={banner} alt="Banner image" />
      </div>
      <div className="flex flex-wrap justify-center  gap-4 w-full">
        {data.map((data) => {
          return <Exclusive key={data.id} exclusive={data} />;
        })}
      </div>
    </div>
  );
};

export default Body;
