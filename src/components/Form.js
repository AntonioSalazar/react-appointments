import React, {Fragment, useState} from 'react';
 


const Form = () => {
    //create the state of the appointments
    
    const [appointment, setAppointment ] = useState({
        pet: '',
        owner: '',
        date: '',
        hour: '',
        symptoms: ''
    });
    
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

        //Assign an ID

        //Create the appointment

        //Set the form to blank
        
    }


    return ( 
        <Fragment>
            <h2>Create an appointment</h2>
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