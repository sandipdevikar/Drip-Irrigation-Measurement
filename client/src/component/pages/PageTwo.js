import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {setValues,calculateIT,calculateNOP,calculateNOD} from '../../action/PageTwo';
import "./style.css";
const PageTwo = ({setValues,calculateIT,calculateNOP,calculateNOD,numberOfDrippersPerPlant,dripperDischarge,values:{rTorSpacing,cTocSpacing,twr,a,b,it,areaOfLand,noOfPlants,noOfDrippers}}) =>{

        useEffect(()=>{
               calculateIT((twr/(a*b)));
               
               calculateNOP(Math.floor(areaOfLand/(rTorSpacing*cTocSpacing)));
               console.log("a:",a);
               console.log("no of plant",noOfPlants);
               calculateNOD(noOfPlants*a);
        },[twr,a,b,areaOfLand,noOfPlants,rTorSpacing,cTocSpacing]);

        const onChange= e=>{
                console.log(e);
                setValues(e);
        }
  return(
    <div className="card mt-4 border-light">
    {/* <!-- card header --> */}
       <div className="card-header mt-4 border-light">
               <h5 className="card-title"></h5>
       </div> 
    {/* <!-- card header end -->  */}
           
    {/* <!-- card body start-->  */}
    <div className="card-body mt-3">
           <ul>
                   <li className="text-danger h3"><h5>Water Irrigation time (IT)</h5></li>
           </ul>
            {/* <!-- Water Irrigation form--> */}
            <form id="it">
                   <div className="row mx-2">
                       <div className="col-12 pr-0">
                           <label>No of dripper per tree (a)</label>
                       </div> 
                       <div className="col-12">
                               <div className="row">
                                       <div className="col-2">
                                               <output>=</output>
                                       </div>
                                       <div className="col-10">
                                       <input list="numberofdripper" onChange={e=>onChange(e)} className="form-control border-primary pl-3 pr-3" name="a"/>
                                                                <datalist id="numberofdripper">
                                                                    {
                                                                                            
                                                                                            numberOfDrippersPerPlant&&numberOfDrippersPerPlant.length>0&&
                                                                                            numberOfDrippersPerPlant.map(rr=>(
                                                                                                    <>
                                                                                                    <option value={rr.values}>{rr.values}</option>
                                                                                                    </>
                                                                                                ))
                                                                                            }
                                                                </datalist> 
                                       </div>

                                   </div>
                          
                       </div>   
                   </div>
                   <div className="row mx-2">
                           <div className="col-12 pr-0">
                               <label>Discharge per dripper (b)</label>
                           </div> 
                           <div className="col-12">
                               <div className="row">
                                   <div className="col-2">
                                           <output>=</output>
                                   </div>
                                   <div className="col-10">
                                   <input list="dripperdischarge" onChange={e=>setValues(e)} className="form-control border-primary pl-3 pr-3" name="b"/>
                                                                <datalist id="dripperdischarge">
                                                                    {
                                                                                            
                                                                                            dripperDischarge&&dripperDischarge.length>0&&
                                                                                            dripperDischarge.map(rr=>(
                                                                                                    <>
                                                                                                    <option value={rr.values}>{rr.values}</option>
                                                                                                    </>
                                                                                                ))
                                                                                            }
                                                                </datalist> 
                                       </div>

                               </div>
                           </div>   
                   </div>
            </form>
           {/* <!-- form end -->  */}
    </div>
    {/* <!-- card body end--> 
    <!-- card footer --> */}
   <div className="card-footer mt-2 border-light">
           <h5> Result, </h5>
           <div className="card-text pl-2 ">
                <h5>IT ={it&&it!==Infinity?<span class="text-success">{it.toFixed(2)} hrs</span>:<></>}</h5> 
               {/* <!--Place result of IT --> */}
           </div>
   </div>
    {/* <!--footer end -->
    <!-- card-body 2 --> */}
    <div className="card-body mt-5 border-light">
           <ul>
                   <li className="text-danger h3"><h5>Number of Plants (NOP)</h5></li>
           </ul>

    </div>
    {/* <!--card body 2 end -->
     <!-- card footer --> */}
   <div className="card-footer mt-2 border-light">
           <h5> Result, </h5>
           <div className="card-text pl-2  ">
               <h5>Number of Plant (NOP) ={noOfPlants&&noOfPlants!==Infinity?<span class="text-success">{noOfPlants}</span>:<></>}</h5>
                {/* <!--Place result of NOP --> */}
           </div>
   </div>
    {/* <!--footer end -->
     <!-- card-body 2 --> */}
     <div className="card-body mt-5 border-light">
           <ul>
                   <li className="text-danger pt-0 h3"><h5>Number of Drippers(NOD)</h5></li>
           </ul>

    </div>
    {/* <!--card body 2 end --> */}
     {/* <!-- card footer --> */}
   <div className="card-footer mt-2 border-light">
           <h5> Result, </h5>
           <div className="card-text pl-2 pt-0">
               <h5>Number of Drippers (NOD) ={noOfDrippers&&noOfDrippers!==Infinity?<span class="text-success">{noOfDrippers}</span>:<></>}</h5> 
               {/* <!--Place result of NOD --> */}
           </div>
   </div>
    {/* <!--footer end --> */}

</div>
  )

}
const mapStateToProps = state =>{
        return{
                // numberOfDrippersPerPlant:state.values.tablevalues.numberOfDrippersPerPlant,
                numberOfDrippersPerPlant:state.values.tableValues.numberOfDrippersPerPlant,
                dripperDischarge:state.values.tableValues.dripperDischarge,
                values:state.values
      
        }
}
export default connect(mapStateToProps,{setValues,calculateNOP,calculateIT,calculateNOD})(PageTwo)