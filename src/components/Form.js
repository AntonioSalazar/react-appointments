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
    const setAppointmentState = () => {
        console.log('writing');
    }


    return ( 
        <Fragment>
            <h2>Create an appointment</h2>
            <form>
                <label>Name of your pet:</label>
                <input 
                    type="text"
                    name="pet"
                    className='u-full-width'
                    placeholder="Name of your pet"
                    onChange={setAppointmentState}
                />

                <label>Name of the owner:</label>
                <input 
                    type="text"
                    name="owner"
                    className='u-full-width'
                    placeholder="Name of the owner"
                    onChange={setAppointmentState}
                />

                <label>Date:</label>
                <input 
                    type="date"
                    name="date"
                    className='u-full-width'
                    onChange={setAppointmentState}
                />

                <label>Hour:</label>
                <input 
                    type="time"
                    name="hour"
                    className='u-full-width'
                    onChange={setAppointmentState}
                />

                <label>Symptopms</label>
                <textarea
                    className='u-full-width'
                    name="symptoms"
                    onChange={setAppointmentState}
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