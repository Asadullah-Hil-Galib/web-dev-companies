import React from 'react';
import './Select.css';
const Select = (props) => {
    const { name, img } = props.con;
    return (
        <div className="select-every-company">
            <img src={img} alt={name} />
            <h5>{name}</h5>
            <span className="close-btn">+</span>
        </div>
    );
};

export default Select;