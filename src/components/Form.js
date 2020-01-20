import React, {Fragment} from 'react';
 

const Form = () => {
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
                />

                <label>Name of the owner:</label>
                <input 
                    type="text"
                    name="owner"
                    className='u-full-width'
                    placeholder="Name of the owner"
                />

                <label>Date:</label>
                <input 
                    type="date"
                    name="date"
                    className='u-full-width'
                />

                <label>Hour:</label>
                <input 
                    type="time"
                    name="hour"
                    className='u-full-width'
                />

                <label>Symptopms</label>
                <textarea
                    className='u-full-width'
                    name="symptoms"
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