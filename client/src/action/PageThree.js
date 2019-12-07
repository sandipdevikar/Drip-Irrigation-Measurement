import {ADD_VALUES,SET_HL,SET_D,SET_L,SET_QL,SET_NOL,SET_LOL,SET_NOPOL,SET_NODOL} from './types';

export const setValues = e => dispatch=>{
    
    dispatch({
        type:ADD_VALUES,
        payload:e
    })
   
}
export const setD = e => dispatch=>{
    
    dispatch({
        type:SET_D,
        payload:e
    })
   
}
export const setL = e => dispatch=>{
    
    dispatch({
        type:SET_L,
        payload:e
    })
   
}

export const calculateNOL = e => dispatch=>{
    
    dispatch({
        type:SET_NOL,
        payload:e
    })
   
}
export const calculateLOL = e => dispatch=>{
   
    dispatch({
        type:SET_LOL,
        payload:e
    })
   
}
export const SetNoOfPlantOnOneLateral = e => dispatch=>{
   
    dispatch({
        type:SET_NOPOL,
        payload:e
    })
   
}
export const SetNoOfDrippersOnOneLateral = e => dispatch=>{
   
    dispatch({
        type:SET_NODOL,
        payload:e
    })
   
}
export const SetDischargeRateQL = e => dispatch=>{
   
    dispatch({
        type:SET_QL,
        payload:e
    })
   
}

export const setHeadLossofLateral = e => dispatch=>{
   
    dispatch({
        type:SET_HL,
        payload:e
    })
   
}