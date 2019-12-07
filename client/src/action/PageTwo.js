
import {ADD_VALUES,SETIT_VALUES,SETNOP_VALUES,SETNOD_VALUES} from './types';

export const setValues = e => dispatch=>{
    
    dispatch({
        type:ADD_VALUES,
        payload:e
    })
   
}

export const calculateIT = e => dispatch=>{
    
    dispatch({
        type:SETIT_VALUES,
        payload:e
    })
   
}
export const calculateNOP = e => dispatch=>{
    
    dispatch({
        type:SETNOP_VALUES,
        payload:e
    })
   
}

export const calculateNOD = e => dispatch=>{
    console.log(e);
    dispatch({
        type:SETNOD_VALUES,
        payload:e
    })
   
}


