import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4'


const Form = ({createAppointment}) => {
    //create the state of the appointments
    
    const [appointment, setAppointment ] = useState({
        pet: '',
        owner: '',
        date: '',
        hour: '',
        symptoms: ''
    });

    //Error state

    const [error, setError] = useState(false);
    
    //this function will get executed each time the user writes something in the input tag
    const setAppointmentState = e => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    //extract the values from the appointment state

    const {pet, owner, date, hour, symptoms} = appointment;

    //Function that get's executed when the form is submitted

    const submitAppointment = e => {
        e.preventDefault();

        //Validate the form

        if(pet.trim() === "" || owner.trim() === "" || date.trim() === "" || hour.trim() === "" || symptoms.trim() === ""){
            setError(true)
            return;
        }

        //removing error previous message 

        setError(false);

        //Assign an ID
        appointment.id = uuid();

        //Create the appointment
        createAppointment(appointment);

        //Set the form to blank

        setAppointment({
            pet: '',
            owner: '',
            date: '',
            hour: '',
            symptoms: ''
        })
    }


    return ( 
        <Fragment>
            <h2>Create an appointment</h2>

            { error ? <p className="error-alert">All the fields are required</p>            : null}
            <form
                onSubmit={submitAppointment}
            >
                <label>Name of your pet:</label>
                <input 
                    type="text"
                    name="pet"
                    className='u-full-width'
                    placeholder="Name of your pet"
                    onChange={setAppointmentState}
                    value={pet}
                />

                <label>Name of the owner:</label>
                <input 
                    type="text"
                    name="owner"
                    className='u-full-width'
                    placeholder="Name of the owner"
                    onChange={setAppointmentState}
                    value={owner}
                />

                <label>Date:</label>
                <input 
                    type="date"
                    name="date"
                    className='u-full-width'
                    onChange={setAppointmentState}
                    value={date}
                />

                <label>Hour:</label>
                <input 
                    type="time"
                    name="hour"
                    className='u-full-width'
                    onChange={setAppointmentState}
                    value={hour}
                />

                <label>Symptopms</label>
                <textarea
                    className='u-full-width'
                    name="symptoms"
                    onChange={setAppointmentState}
                    value={symptoms}
                ></textarea>

                <button
                    type="submit"
                    className='u-full-width button-primary'
                >
                    Add appointment
                </button>
            </form>
        </Fragment>
     );
}
 
export default Form;