import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';



function App() {

  //Appointments in local storage
  let initialAppointments = JSON.parse(localStorage.getItem('appointment'));
  if(!initialAppointments) {
    initialAppointments = [];
  }

  //Appointments Array state
  const [appointmentsArray, setAppointmentsArray] = useState(initialAppointments)

  //UseEffect to perform some action when the state changes
  useEffect( () => {
    let initialAppointments = JSON.parse(localStorage.getItem('appointment'));
    if(initialAppointments){
      localStorage.setItem('appointents', JSON.stringify(appointmentsArray))
    } else{
      localStorage.setItem("appointments", JSON.stringify([]))
    }
  }, [ appointmentsArray])


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

  //Conditional rendering
  const title = appointmentsArray.length === 0 ? "You don't have any appointments" : "Manage your appointments"

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
            <h2>{title}</h2>
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
