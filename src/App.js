import React, { Fragment } from 'react';
import Form from './components/Form';


function App() {
  return (
    <Fragment>    
      <h1 className='title'>Appointments Administrator</h1> 

      <div className='container'>

        <div className='content'>
          <div className='content__form'>
            <Form />
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
