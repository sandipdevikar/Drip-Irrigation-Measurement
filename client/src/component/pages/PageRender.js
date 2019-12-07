import React from 'react';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import PageFive from './PageFive';
import {connect} from 'react-redux';
import Spinner from '../spinner/Spinner'
const PageRender = ({values:{twr,it,headLossOfLateral}}) =>{

    return(<>
    
                         <PageOne/>

                         {
                             twr&&twr!==Infinity?
                             <>
                              <PageTwo/>
                             {
                                  it&&it!==Infinity?           <>                 
                                  <PageThree/>
                                  {
                                    headLossOfLateral&&headLossOfLateral!==Infinity? <> <PageFour/>
                                    <PageFive/></>:<><Spinner/></>   
                                  }
                                 </>:<><Spinner/></>
                             }
                            </>:<><Spinner/></>
                            

                         }
                          
    
    
    </>)
}
const mapStateToProps = state =>{
    return{
        values:state.values
    }
}
export default connect(mapStateToProps,{})(PageRender)
