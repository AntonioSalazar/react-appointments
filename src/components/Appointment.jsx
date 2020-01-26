import React from 'react';


const Appointment = ({appointment}) => {

    const { pet, owner, date, hour, symptoms } = appointment;
    console.log(appointment)
    return(
        <div className="appointment">
            <p>Pet Name: <span>{pet}</span></p>
            <p>Owner Name: <span>{owner}</span></p>
            <p>Date: <span>{date}</span></p>
            <p>Time: <span>{hour}</span></p>
            <p>Symptoms: <span>{symptoms}</span></p>
        </div>
    )
}

export default Appointment;