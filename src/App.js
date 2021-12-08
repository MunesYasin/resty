import React ,{useState,useEffect}from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';

function App (){

  const [data,setData] = useState()
  const [requestParams,setrequestParams] = useState({})

 const callApi = (data,formInputs) => {
    
    setrequestParams(formInputs)
    }

    useEffect(async () => {
      console.log('welcome to Effect')
        const newRequest = await fetch(requestParams.url);
        const newResponse = await newRequest.json();
        setData(newResponse);
      
    }, [requestParams]);
    
  
    return (
      <React.Fragment>
        <Header />
        
        <div data-testid="request">Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </React.Fragment>
    );
  
}

export default App;
