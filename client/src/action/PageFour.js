import {SETHSM_VALUES,SETHLML_VALUES,SET_THL_VALUES,SET_HP} from './types';



export const calculateHeadLossofSubmain = e => dispatch=>{
    console.log("output",e);
    dispatch({
        type:SETHSM_VALUES,
        payload:e
    })
   
}

export const calculateHP = e => dispatch =>{
    dispatch({
        type:SET_HP,
        payload:e

    })
}

export const calculateHeadLossOfMainLine = e => dispatch=>{
    
    dispatch({
        type:SETHLML_VALUES,
        payload:e
    })
   
}
export const calculateTotalHeadLoss = e => dispatch=>{
    
    dispatch({
        type:SET_THL_VALUES,
        payload:e
    })
   
}
