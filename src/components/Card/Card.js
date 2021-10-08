import React from 'react';
import Select from '../Select/Select';
import './Card.css';

const Card = ( props ) => {
    console.log( props.contact )
    const { contact } = props;
    let totalSalary = 0;
    for ( const country of contact ) {
        totalSalary = totalSalary + country.salary;
    }

    return (
        <div className="side-card">
            <h3 className="selected">Selected : { props.contact.length } Company</h3>
            <h3 className="salary">Company Salary : ${totalSalary}</h3>
            <h3 className="select-company">Selected Company</h3>
            <h3>
                { contact.map(con=> <Select con={con}></Select>)}
            </h3>
        </div>
    );
};

export default Card;