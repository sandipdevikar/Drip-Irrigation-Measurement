import {TWR_CHANGE,LENGTH_CHANGE,WIDTH_CHANGE,REGION_CHANGE,AREA_CHANGE,CTOC_CHANGE,TABLE_LOAD,TABLE_ERROR,RTOR_CHANGE} from './types';
import axios from 'axios'

export const lengthChange = e => dispatch=>{
    dispatch({
        type:LENGTH_CHANGE,
        payload:e
    })
   
}
export const widthChange = e => dispatch=>{
    dispatch({
        type:WIDTH_CHANGE,
        payload:e
    })
   
}

export const areaOfLandM = e => dispatch=>{
    dispatch({
        type:AREA_CHANGE,
        payload:e
    })
   
   
}


export const setTwr = e => dispatch=>{
    dispatch({
        type:TWR_CHANGE,
        payload:e
    })
   
   
}
export const setRowToRowDis = e => dispatch=>{
    dispatch({
        type:RTOR_CHANGE,
        payload:e
    })
   
}
export const setCToCDis = e => dispatch=>{
    dispatch({
        type:CTOC_CHANGE,
        payload:e
    })
   
}
export const setRegion  = e => dispatch=>{

    
    dispatch({
        type:REGION_CHANGE,
        payload:e
    })
   
}
export const loadTableByCropName =(e) => async dispatch => {
    
    try{
      const res=await axios.get(`api/table/${e}`);
      console.log("succcess");
      dispatch({
        type:TABLE_LOAD,
        payload:res.data
      });
    }catch(err){
      dispatch({
        type:TABLE_ERROR
      });
  
    }
  }