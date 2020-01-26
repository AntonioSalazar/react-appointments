import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';



function App() {

  //Appointments Array state
  const [appointmentsArray, setAppointmentsArray] = useState([]);


  //Function that takes current appointments and add's the new one
  const createAppointment = appointment => {
    setAppointmentsArray([
      ...appointmentsArray,
      appointment
    ])
  }

  //Function that deletes an individual appointment

  const deleteAppointment = id => {
    const apptArrayWithoutDeleted = appointmentsArray.filter(appointment => appointment.id !== id);
    setAppointmentsArray(apptArrayWithoutDeleted);
  }

  return (
    <Fragment>    
      <h1 className='title'>Appointments Administrator</h1> 

      <div className='container'>

        <div className='content'>
          <div className='content__form'>
            <Form 
              createAppointment={createAppointment}
            />
          </div>
          <div className="content__appointment">
            <h2>Your appointments:</h2>
            {appointmentsArray.map(appointment => (
              <Appointment 
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
        
      </div>

    </Fragment>
  );
}

export default App;
