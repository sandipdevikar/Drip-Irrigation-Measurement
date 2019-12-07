import React,{useEffect} from 'react';
import "./style.css";
import {lengthChange,widthChange,setRegion,setTwr,areaOfLandM,loadTableByCropName,setCToCDis,setRowToRowDis} from '../../action/PageOne'
import {connect} from 'react-redux';
const PageOne = ({lengthChange,widthChange,setTwr,setRegion,setCToCDis,loadTableByCropName,setRowToRowDis,rowToRowSpacing,soilType,cropToCropSpacing,areaOfLandM,values:{twr,length,width,areaOfLand,tableValues:{w,cropFactor},cTocSpacing,rTorSpacing,region,panEva}}) =>{
               
    useEffect(()=>{
            var area;
            if(length===null||width===null||length==" "||width==" "){
                    area=null;
            }else{
                    
                    area=length*width;
                
            }
            areaOfLandM(area);
        
            setTwr((rTorSpacing*panEva*cTocSpacing*w*cropFactor*0.75)/0.90)
      
    },[length,width,panEva,w,rTorSpacing,cTocSpacing]);
   const onChangeAreaLength = e =>{
   
    lengthChange(e.target.value);
   
   } 
   const onChangeAreaWidth = e =>{
   
    widthChange(e.target.value);
   
   }
   const cropSelect = e =>{
       loadTableByCropName(e.target.value);
   } 
   const onChangeRowToRowDis = e =>{
        setRowToRowDis(e.target.value);
   }
   const onChangeCToCDis = e =>{
    setCToCDis(e.target.value);
   }
   const onChangeRegion = e =>{
    if(e.target.value==="pune"){
        setRegion(8.33);
    }
    else{
        setRegion(8.68);
    }
   }
  return(
    <>
        
               {/* <!--card--> */}
                         <div className="card border-light">
                           <div className="card-header border-light">
                               <h5 className="card-title"></h5>
                           </div>
                           {/* <!--card Body --> */}
                           <div className="card-body mt-5">
                               <ul>
                                    <li className="text-danger h3"><h5>Area of land</h5></li>
                               </ul>
                               {/* <!-- Area of land form--> */}
                               <form>
                               <div className="form-row">
                                   <div className="col">
                                       <label className="">Length =</label>
                                       <input type="number" className="form-control border-primary pl-3 pr-3" name="length" value={length} onChange={e=>onChangeAreaLength(e)} placeholder="Enter Length"/>
                                   </div>
                                   <div className="col">
                                        <label className="">Width =</label>
                                        <input type="number" className="form-control border-primary pl-3 pr-3" name="width" value={width} onChange={e=>onChangeAreaWidth(e)} placeholder="Enter Width" />
                                    </div>    

                               </div> 
                               <div className="form-inline area-of-land mt-5">
                                   <label className="">Area of Land = </label>
                                   <input type="number" className="form-control border-primary pl-3 pr-3" name="area" value={areaOfLand} readOnly/><span className="pl-2 area-unit">m<sup>2</sup></span>
                                </div>       
                               </form>
                            
                              
                           </div>
                         <div className="card-body border-light mt-5">       
                            {/* <!-- Area of land form ends--> */}
                               <ul>
                                    <li className="text-danger h3"><h5>Total Water Requirement (TWR)</h5></li>
                               </ul>
                             {/* <!-- TWR form--> */}
                                    <form id="twr">
                                            <div className="row mb-3">
                                                <div className="col-3 px-0">
                                                    <label>Crop</label>
                                                </div> 
                                                <div className="col-1 pl-0">
                                                        <output>=</output>
                                                </div>
                                                <div className="col-7 px-0">
                                                <select name="crop" className=" form-control border-primary pl-3 pr-3" onChange={e=>cropSelect(e)}  form="twr">
                                                    <option>Select Crop</option>
                                                    <option value="Pomegranate">Pomegranate</option>
                                                    <option value="Grapes">Grapes</option>
                                                    <option value="Banana">Banana</option>
                                                    <option value="vegetables">Vegetables</option>
                                                    <option value="Sugarcane">Sugarcane</option>
                                                    <option value="flowers">Flowers</option>
                                               </select>
                                                      </div>   
                                            </div>
                                            <div className="row">
                                                    <div className="col-3 px-0">
                                                        <label>r- r distance</label>
                                                    </div> 
                                                    <div className="col-1 pl-0">
                                                            <output>=</output>
                                                    </div>
                                                    <div className="col-7 px-0">
                                                        <input type="number" list="rrdistance" className="form-control border-primary pl-3 pr-3" onChange={e=>onChangeRowToRowDis(e)} name="rrdistance"/>
                                                                <datalist id="rrdistance">
                                                                    {
                                                                                            
                                                                                            rowToRowSpacing&&rowToRowSpacing.length>0&&
                                                                                                rowToRowSpacing.map(rr=>(
                                                                                                    <>
                                                                                                    <option value={rr.values}>{rr.values}</option>
                                                                                                    </>
                                                                                                ))
                                                                                            }
                                                                </datalist>
                                                    </div>   
                                                </div>
                                                <div className="row ">
                                                        <div className="col-3 px-0">
                                                            <label>c - c distance</label>
                                                        </div> 
                                                        <div className="col-1 pl-0">
                                                                <output>=</output>
                                                        </div>
                                                        <div className="col-7 px-0">
                                                        <input type="number" list="ccdistance" className="form-control border-primary pl-3 pr-3" onChange={e=>onChangeCToCDis(e)} name="rrdistance"/>
                                                                <datalist id="ccdistance">
                                                                    {
                                                                                            
                                                                                            cropToCropSpacing&&cropToCropSpacing.length>0&&
                                                                                            cropToCropSpacing.map(rr=>(
                                                                                                    <>
                                                                                                    <option value={rr.values}>{rr.values}</option>
                                                                                                    </>
                                                                                                ))
                                                                                            }
                                                                </datalist> </div>   
                                                    </div>
                                                    <div className="row ">
                                                            <div className="col-3 px-0">
                                                                <label>Type of soil</label>
                                                            </div> 
                                                            <div className="col-1 pl-0">
                                                                    <output>=</output>
                                                            </div>
                                                            <div className="col-7 px-0">
                                                            <input list="typeofsoil" className="form-control border-primary pl-3 pr-3" name="rrdistance"/>
                                                                <datalist id="typeofsoil">
                                                                    {
                                                                                            
                                                                                            soilType&&soilType.length>0&&
                                                                                            soilType.map(rr=>(
                                                                                                    <>
                                                                                                    <option value={rr.soilTypes}>{rr.soilTypes}</option>
                                                                                                    </>
                                                                                                ))
                                                                                            }
                                                                </datalist>  </div>   
                                                        </div>
                                            <div className="row ">
                                                    <div className="col-3 px-0">
                                                        <label>Select region</label>
                                                    </div> 
                                                    <div className="col-1 pl-0">
                                                            <output>=</output>
                                                    </div>
                                                    <div className="col-7 px-0">  
                                                        <div className="form-group">
                                                     <select name="region" className=" form-control border-primary pl-3 pr-3" onChange={e=>onChangeRegion(e)}  form="twr"><option>Select Region</option><option value="pune">Pune</option><option value="akola">Akola</option></select>
                                                        </div>
                                                    </div>   
                                            </div>
                                            
                                     </form>
                                     {/* <!-- TWR form ends--> */}
                                     
                                          
                               

                           </div>
                            {/* <!--card Body End--> */}
                           {/* <!--card footer --> */}
                           <div className="card-footer mt-2 border-light">

                               {
                                   
                                    }
                                   <h5> Result, </h5>
                                   <div className="card-text pl-2">
                                <h5>TWR = {twr?<span class="text-success">{twr.toFixed(2)} liter/day/plant</span>:<></>}</h5> 
                                       {/* <!--Place result of TWR --> */}
                                   </div>    

                           </div>
                           {/* <!--card footer End --> */}
                           
                          </div>  
                          {/* <!--card End -->  */}
                         
                         
    </>
  )

}
const mapStateToProps = state =>{
    return{
        values:state.values,
        rowToRowSpacing:state.values.tableValues.rowToRowSpacing,
        cropToCropSpacing:state.values.tableValues.cropToCropSpacing,
        soilType:state.values.tableValues.soilType,
        }
}

export default connect(mapStateToProps,{lengthChange,setTwr,setRegion,setCToCDis,setRowToRowDis,widthChange,areaOfLandM,loadTableByCropName})(PageOne);