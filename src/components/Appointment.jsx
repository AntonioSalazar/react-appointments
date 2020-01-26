import React from 'react';


const Appointment = ({appointment, deleteAppointment}) => {

    const { pet, owner, date, hour, symptoms, id } = appointment;
    console.log(appointment)
    return(
        <div className="appointment">
            <p>Pet Name: <span>{pet}</span></p>
            <p>Owner Name: <span>{owner}</span></p>
            <p>Date: <span>{date}</span></p>
            <p>Time: <span>{hour}</span></p>
            <p>Symptoms: <span>{symptoms}</span></p>

            <button className="button delete u-full-width"
                onClick={ () => deleteAppointment(id)}
            >Delete &times;
            </button>
        </div>
    )
}

export default Appointment;