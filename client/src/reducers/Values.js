import {SET_HP,SET_THL_VALUES,SETHLML_VALUES,SETHSM_VALUES,SET_NODOL,SET_HL,SET_QL,SET_NOPOL,SET_LOL,ADD_VALUES,SET_NOL,SET_D,SET_L,SETIT_VALUES,SETNOP_VALUES, SETNOD_VALUES,LENGTH_CHANGE,TWR_CHANGE,WIDTH_CHANGE,REGION_CHANGE,AREA_CHANGE,CTOC_CHANGE,RTOR_CHANGE,TABLE_LOAD,TABLE_ERROR } from "../action/types";

const initialState={
    length:null,
    width:null,
    areaOfLand:null,
    tableValues:[],
    rTorSpacing:null,
    cTocSpacing:null,
    region:null,
    panEva:null,
    twr:null,
    a:null,
    b:null,
    it:null,
    noOfPlant:null,
    noOfPlants:null,
    noOfDrippers:null,
    submainPlace:"",
    d:null,
    l:null,
    noOfLateral:null,
    lol:null,
    lengthOfLateral:null,
    dischargeOfOneDripper:null,
    diameterOfLateral:null,
    noOfPlantOnOneLateral:null,
    
    noOfDrippersOnOneLateral:null,
    dischargeRateQL:null,
    headLossOfLateral:null,
    noOfLateralOnSubMain:null,
    dischargeRateOfSubMainQS:null,
    mainLineDiameter:null,
    lengthOfMainLine:null,
    subMainLineDiameter:null,
    headLossOfSubMain:null,
    headLossOfMainLine:null,
    suctionHeadAndDeliverHead:12,
    operatingPressureOfDrip:10,
    mainLineHeadLoss:null,
    filterLoss:2,
    fittingLoss:2,
    venturyLoss:5,
    totalHeadLoss:null,
    hpReaquired:null






}


export default function(state = initialState, action) {
    const {type,payload}=action;

    switch(type){

        case SET_HP:{
            return {
                ...state,
                hpReaquired:payload
            }
        }
        case SET_THL_VALUES:
            return{
                ...state,
                totalHeadLoss:payload
            }
        case SETHLML_VALUES:
            return{
                ...state,
                headLossOfMainLine:payload
            }
        case SETHSM_VALUES:
            return{
                ...state,
                headLossOfSubMain:payload
            }
        case SET_HL:
            return{
               ...state,
               headLossOfLateral:payload 
            }
        case SET_QL:
            return{
                ...state,
                dischargeRateQL:payload
            }
        case SET_NODOL:
            return{
                ...state,
                noOfDrippersOnOneLateral:payload
            }
        case SET_NOPOL:
            return{
                ...state,
                noOfPlantOnOneLateral :payload
            }
        case LENGTH_CHANGE:
            return{
                ...state,
                length:payload
            }
            case WIDTH_CHANGE:
                return{
                    ...state,
                    width:payload
            }
            case AREA_CHANGE:
                return{
                    ...state,
                    areaOfLand:payload
            }
            case TABLE_LOAD:
                return{
                    ...state,
                    tableValues:payload
                }
            case RTOR_CHANGE:
                return{
                    ...state,
                    rTorSpacing:payload
                } 
            case CTOC_CHANGE:
                return{
                    ...state,
                    cTocSpacing:payload
                }  
             case REGION_CHANGE:
                 return{
                     ...state,
                     panEva:payload
                 }  
             case TWR_CHANGE:
                 return{
                     ...state,
                     twr:payload
                 } 
              case ADD_VALUES:
                  return{
                      ...state,
                     [payload.target.name]:payload.target.value
                  }
              case SET_D:
                  return{
                      ...state,
                      d:payload
                  } 
                  case SET_L:
                        return{
                            ...state,
                            l:payload
                        }         
              case SETIT_VALUES:   
              return{
                  ...state,
                  it:payload
              } 
              case SETNOP_VALUES:
                  return{
                      ...state,
                      noOfPlants:payload
                  }
              case SET_NOL:
                  return{
                      ...state,
                      noOfLateral:payload
                  } 
              case SET_LOL:
                  return{
                      ...state,
                      lengthOfLateral:payload    
                  }        
              case SETNOD_VALUES:
                  return{
                      ...state,
                      noOfDrippers:payload
                  }               
            case  TABLE_ERROR:
                return{
                    ...state,
                    
                }
        default:
            return state
    
    }
}