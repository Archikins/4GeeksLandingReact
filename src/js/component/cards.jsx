import React from "react";
import PropTypes from "prop-types";




//create your first component
const Card = (props) => {
    return (
        <div className={`col-${props.cols} `}>
            <div className="card" >
                <svg >
                    <rect width="100%" height="100%" fill="grey"></rect>
                </svg>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">{props.button}</a>
                </div>
            </div>
        </div>

    );
};


Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string,
    cols: PropTypes.number,

}

const SetOfCards = (props) => {
    let colNumber = 12 / props.arrayWithShape.length
    return (props.arrayWithShape.map(card => <Card title={card.title} description={card.description} button={card.button} cols={colNumber}/>));
};

SetOfCards.propTypes = {
    arrayWithShape: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        button: PropTypes.string,
    })).isRequired,

}

export default SetOfCards;
