import React from 'react';
import './App.css';
import {Helmet} from 'react-helmet';
import PageRender from './component/pages/PageRender'
import {Provider} from "react-redux";
import store from './store';
function App() {
  return (
    <Provider store={store}>
    <Helmet>
      <title>Drip Irrigation</title>
    </Helmet>  
    <div class="container-fluid">
                 <div class="row">
                     <div class="col-md-10 col-10  offset-md-1 offset-1">
                  
                         <PageRender/>
                     </div>
                  </div>  
     </div> 
   </Provider> 
  );
}

export default App;
