import React ,{useReducer,useEffect}from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/History/history';

function App (){

  // const [data,setData] = useState()
  // const [requestParams,setrequestParams] = useState({})
  // const [history ,setHistory]=useState([{newResponse:{}, requestParams :{method :'',url:''}}])

    const initialState = {
      data :{},
      requestParams:{},
      history:[]
    }



  const reducer=(state , action)=>{
     

switch(action.method){

  case  'get': 
     return changeReqParam(state,action)

     default :
     return changeData(state,action)
}


  }


  const changeReqParam = (state,action)=>{
return {
  ...state,
  requestParams : action 
}
  }


  const changeData = (state,action)=>{
    console.log(state.history)
    state.history.push( {newResponse:action.newResponse, requestParams :action.requestParams})
return{
  ...state,
  data : action.newResponse

}
  }

   const [state, dispatch] = useReducer(reducer, initialState)


 const callApi = (data,formInputs) => {
    console.log(formInputs)
    // setrequestParams(formInputs)
    dispatch(formInputs)
    }

    useEffect(async () => {
      console.log('welcome to Effect')
        const newRequest = await fetch(state.requestParams.url);
        const newResponse = await newRequest.json();
        // setData(newResponse);
        // setHistory([{newResponse,requestParams}])
        let requestParams = state.requestParams
        dispatch({newResponse,requestParams})
    }, [state.requestParams]);
    
  
    return (
      <React.Fragment>
        <Header />
        
        <div data-testid="request">Request Method: {state.requestParams.method}</div>
        <div>URL: {state.requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={state.data} />
        <History history = {state.history} callApi={callApi}/>
        <Footer />
        
      </React.Fragment>
    );
  
}

export default App;