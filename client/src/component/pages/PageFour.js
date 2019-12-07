import React,{useEffect} from 'react';
import "./style.css";
import {connect} from "react-redux";
import { setValues } from '../../action/PageThree';
import {calculateHeadLossofSubmain ,calculateHeadLossOfMainLine} from '../../action/PageFour';
const PageFour = ({setValues,calculateHeadLossofSubmain,calculateHeadLossOfMainLine,values:{headLossOfMainLine,dischargeRateQL,headLossOfSubMain,noOfLateral,mainLineDiameter,lengthOfMainLine,noOfLateralOnSubMain,subMainLineDiameter}}) =>{

        useEffect(()=>{
                let h1=1.21*Math.pow(10,10);
                let QS=dischargeRateQL*parseInt(noOfLateralOnSubMain);

                let h2=QS/150;
                let h3=Math.pow(h2,1.852);
                let h4=parseInt(subMainLineDiameter)-2.4;
                let h5=Math.pow(h4,-4.871);
                let nl=parseInt(noOfLateral);
                let h6=(parseInt(mainLineDiameter)+(nl*0.37));
                calculateHeadLossofSubmain(h1*h3*h5*h6*0.37);
                let m1=1.21*Math.pow(10,10);
                let m2=QS/150;
                let m3=Math.pow(m2,1.852);
                let m4=mainLineDiameter-2.4;
                let m5=Math.pow(m4,-4.871);
                calculateHeadLossOfMainLine(m1*m3*m5*lengthOfMainLine);
        },[subMainLineDiameter,lengthOfMainLine,mainLineDiameter,dischargeRateQL,noOfLateralOnSubMain]);
        const onChange = e =>{
                e.persist();
                setValues(e);
        }

  return(
      
    <div className="card mt-4 border-light">
    {/* // <!-- card-body 2 --> */}
                           <div className="card-body mt-5 border-light">
                                <ul>
                                        <li className="text-danger pt-0 h3"><h5>Number of laterals on sub-main</h5></li>
                                </ul>
                                 {/* <!-- >Number of lateral on sub-main form--> */}
                                 <form id="mainlataral">
                                        <div className="row mx-2">
                                            <div className="col-12 pr-0 pl-0">
                                                <label>Number of lateral on submain</label>
                                            </div> 
                                            <div className="col-12">
                                                    <div className="row">
                                                            <div className="col-2">
                                                                    <output>=</output>
                                                            </div>
                                                            <div className="col-10">
                                                                    <input type="number" className="form-control border-primary pl-3 pr-3 drip" value={noOfLateralOnSubMain} name="noOfLateralOnSubMain" onChange={e => onChange(e)} placeholder=""/>
                                                 
                                                            </div>
    
                                                        </div>
                                               
                                            </div>   
                                        </div>
                                        <div className="row mx-2">
                                                <div className="col-12 pr-0">
                                                    <label>Discharge rate of sub-main (QS)</label>
                                                </div> 
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-2">
                                                                <output>=</output>
                                                        </div>
                                                        <div className="col-10">
                                                                <input type="number" className="form-control border-primary pl-3 pr-3 drip" name="dischargeRateOfSubMainQS" value={noOfLateral&&noOfLateralOnSubMain&&(noOfLateralOnSubMain*dischargeRateQL).toFixed(2)} onChange={e =>onChange(e)} placeholder="" readOnly/>
                                                 
                                                        </div>

                                                    </div>
                                                </div>   
                                              
                                        </div>
                                        <div className="row mx-2">
                                                <div className="col-12 pr-0">
                                                    <label>Main line Diameter in mm</label>
                                                </div> 
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-2">
                                                                <output>=</output>
                                                        </div>
                                                        <div className="col-10">
                                                                <select name="mainLineDiameter" className=" form-control border-primary pl-3 pr-3" value={mainLineDiameter} onChange={e=>onChange(e)} form="mainlataral"><option>Select Diameter</option><option value="40">40</option><option value="50">50</option><option value="63">63</option><option value="75">75</option><option value="90">90</option><option value="110">110</option></select>
                                                   
                                                        </div>

                                                    </div>
                                                </div>   
                                        </div>
                                        <div className="row mx-2">
                                                <div className="col-12 pr-0">
                                                    <label>Length of main line</label>
                                                </div> 
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-2">
                                                                <output>=</output>
                                                        </div>
                                                        <div className="col-10">
                                                                <input type="number" className="form-control border-primary pl-3 pr-3 drip" name="lengthOfMainLine" value={lengthOfMainLine} onChange={e=>onChange(e)} placeholder=""/>
                                                 
                                                        </div>

                                                    </div>
                                                </div>   
                                        </div>
                                        <div className="row mx-2">
                                                <div className="col-12 pr-0">
                                                    <label>Sub main line Diameter in mm</label>
                                                </div> 
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-2">
                                                                <output>=</output>
                                                        </div>
                                                        <div className="col-10">
                                                                <select name="subMainLineDiameter" value={subMainLineDiameter} onChange={e=>onChange(e)} className=" form-control border-primary pl-3 pr-3"  form="mainlataral"><option>Select Diameter</option><option value="32">32</option><option value="40">40</option><option value="50">50</option><option value="63">63</option><option value="75">75</option></select>
                                                   
                                                        </div>

                                                    </div>
                                                </div>   
                                        </div>
                                        <div className="row mx-2">
                                                <div className="col-12 pr-0">
                                                    <label>Head loss of sub-main (H<sub>sm</sub>)</label>
                                                </div> 
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-2">
                                                                <output>=</output>
                                                        </div>
                                                        <div className="col-10">
                                                                <input type="number" className="form-control border-primary pl-3 pr-3 drip" value={headLossOfSubMain&&headLossOfSubMain!=Infinity&&headLossOfSubMain.toFixed(2)} name="headlosssubmain" placeholder="" readOnly/>
                                                 
                                                        </div>

                                                    </div>
                                                </div>   
                                        </div>
                                        <div className="row mx-2">
                                                <div className="col-12 pr-0">
                                                        <label>Head loss of main line (H<sub>m</sub>)</label>
                                                </div> 
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-2">
                                                                <output>=</output>
                                                        </div>
                                                        <div className="col-10">
                                                                <input type="number" className="form-control border-primary pl-3 pr-3 drip" name="headlossmainline" value={headLossOfMainLine&&headLossOfMainLine!=Infinity&&headLossOfMainLine.toFixed(2)} placeholder="" readOnly/>
                                                 
                                                        </div>

                                                    </div>
                                                </div>   
                                        </div>
                                 </form>
                                {/* <!-- form end -->  */}

                         </div>
                        {/* //  <!--card body 2 end --> */}
                         <div className="card-footer mt-2 border-light">
                                <h5> Result, </h5>
                                <div className="card-text pl-2 pt-0">
 <h5>Head loss of main line (H<sub>m</sub>) ={headLossOfMainLine&&headLossOfMainLine!==Infinity?<span class="text-success">{headLossOfMainLine.toFixed(2)}</span>:<></>}</h5>
                                    {/* <!--Place result of NOL --> */}
                                </div>
                                <div className="card-text pl-2 pt-0">
  <h5>Head loss of sub-main (H<sub>sm</sub>) ={headLossOfSubMain&&headLossOfSubMain!==Infinity?<span class="text-success">{headLossOfSubMain.toFixed(2)}</span>:<></>}</h5> 
  {headLossOfSubMain&&headLossOfSubMain&&headLossOfSubMain!==Infinity?<>{parseFloat(headLossOfSubMain)>0.9?<><div class="alert alert-danger" style={{lineHeight:'1.5'}}  role="alert">
 It is not safe to carry flow, Change diameter of lateral !
</div></>:<></>} </>:<></>}                                  {/* <!--Place result of LOL --> */}
                                 </div>
                        </div>
                       </div> 
                        // // <!-- footer end -->
                         
  )

}

const mapStateToProps = state =>{
        return {
                values:state.values
        }
}

export default connect(mapStateToProps,{setValues,calculateHeadLossofSubmain,calculateHeadLossOfMainLine})(PageFour)