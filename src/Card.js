// import { useState } from "react";
// import Modal from "./Modal"
import './Card.css';
const Card = ({name , email , id , geo ,showModal}) => {
    // const [openModal,setOpenModal] = useState(false);
    return(
        <div className="card"  onClick={()=>{showModal({geo,id});}}>
            <img alt="Robot" src={`https://robohash.org/${id}?200x200`}></img>
            <div className="info">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            {/* {openModal && <Modal closeModal={setOpenModal}  />} */}
        </div>
        
    );
}
// positionlat={position["lat"]} positionlng={position["lng"]}
export default Card;