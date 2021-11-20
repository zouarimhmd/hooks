import React from "react";
import './Rate.css';

const Rate = ({ starIndex = () => {}, rate }) => {
    const stars = (x) => {
        let star = [];
        for (let i = 0; i < 5; i++) {
            if (i < x) {
                star.push(
                    <span
                        key={i}
                        onClick={() => {
                            starIndex(i + 1);
                        }}
                    >
                        ★
                    </span>
                );
            } else {
                star.push(
                    <span
                        className='rate'
                        key={i}
                        onClick={() => {
                            starIndex(i + 1);
                        }
                        }
                    >
                        ☆
                    </span>
                );
            }
        }
        return star;
    };
    return <div>{stars(rate)}</div>;
};

export default Rate;