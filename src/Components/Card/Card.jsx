import PropTypes from "prop-types";
import { IoPricetag } from "react-icons/io5";
import { LiaCreditCardSolid } from "react-icons/lia";

const Card = ({ api, hour }) => {
  const { name, description, photo, price, credit } = api;

  

  return (
    <div>
      <div className="card card-compact h-[500px] space-y-4 w-[312px] p-4 bg-base-100 shadow-xl">
        <figure>
          <img className="h-40" src={photo} alt="Shoes" />
        </figure>
        <div className="mt-3">
          <h2 className="card-title">{name}</h2>
          <p>I{description}</p>
          <div className="flex  items-center mt-3 text-[18px] space-x-2">
            <IoPricetag></IoPricetag>
            <h1>Price : ${price}</h1>
          </div>
          <div className="flex  items-center mt-3 text-[18px] space-x-2">
            <LiaCreditCardSolid></LiaCreditCardSolid>
            <h1>Credit Hours : {credit}hr</h1>
          </div>
          <div className="mt-3 ">
            <button onClick={()=>hour(credit,description)} className="btn bg-[#183A9E] text-white text-[16px] btn-wide w-full">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
    hour: PropTypes.func,
    api : PropTypes.array,
    name:  PropTypes.string,
    description:  PropTypes.string,
    photo:  PropTypes.img,
    price:  PropTypes.number,
    id :  PropTypes.number,
    credit: PropTypes.number,
   
};

export default Card;
