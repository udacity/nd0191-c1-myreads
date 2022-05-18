import React from "react"; 
import { FaStar, FaRegStar, FaStarHalfAlt} from "react-icons/fa";

const BookRatings = ({ratings}) => {
    const outOfNumStars = 5
    const numFullStars = Math.floor(ratings);
    const numHalfStars = Math.ceil(ratings % 1);
    const numStarsLeft = Math.ceil(outOfNumStars - (numFullStars + numHalfStars));

    return (
        <span>
            {
                [...Array(numFullStars)].map((elementInArray, index) => ( 
                    <FaStar key={index} />
                ))
            }
            {
                [...Array(numHalfStars)].map((elementInArray, index) => ( 
                    <FaStarHalfAlt key={index} />
                ))
            }
            {
                [...Array(numStarsLeft)].map((elementInArray, index) => ( 
                    <FaRegStar key={index} />
                ))
            }
        </span>
    
    );
}

export default BookRatings;