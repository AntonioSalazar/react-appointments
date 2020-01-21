import React, { Fragment, useState } from 'react';
import Form from './components/Form';



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
            <p>  
              second half
            </p>
            <p>Loremafa afa a afdafa fa dsa s</p>
          </div>
        </div>
        
      </div>

    </Fragment>
  );
}

export default App;
