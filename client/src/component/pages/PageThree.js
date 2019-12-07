import React,{useEffect} from 'react';
import "./style.css";
import {setValues,setD,setL,SetDischargeRateQL,setHeadLossofLateral,SetNoOfDrippersOnOneLateral,calculateNOL,calculateLOL,SetNoOfPlantOnOneLateral} from '../../action/PageThree';
import {connect} from 'react-redux';
const PageThree = ({SetNoOfPlantOnOneLateral,SetDischargeRateQL,setHeadLossofLateral,SetNoOfDrippersOnOneLateral,setValues,calculateNOL,calculateLOL, setL,setD,values:{diameterOfLateral,a,submainPlace,length,width,d,l,rTorSpacing,noOfLateral,headLossOfLateral,lengthOfLateral,cTocSpacing,noOfPlantOnOneLateral,dischargeOfOneDripper,noOfDrippersOnOneLateral,dischargeRateQL}}) =>{

 useEffect(()=>{
         var ll;
         length=parseInt(length);
         width=parseInt(width);
         if(length<width){
                 console.log("length",length);
                 console.log("width",width);
                 setD(length);
                 setL(width);
                ll=width;
                console.log("length is less than");
         }else{
                console.log("width is less than");
                console.log("length",length);
                console.log("width",width);
                setD(width);
                setL(length);
              ll=length;
         }
         var nol;
        if(submainPlace==="half"){
                let r1=d/rTorSpacing;
                let r2=r1-1;
              
            nol=r2*2;
                console.log("......");
                      
                        
                console.log("......");
               calculateNOL(r2*2);
              
        }else{
               
           nol=(d/rTorSpacing)-1;
               
                calculateNOL((d/rTorSpacing)-1);
              
             
        }
        if(submainPlace==="half"){
               
              
               var lol1=(nol*ll)/2;
              
               
                calculateLOL(lol1);
                
        }else{
              var lol=nol*ll;
              
                calculateLOL((lol));
               
        }

        SetNoOfPlantOnOneLateral(l/cTocSpacing);
        SetNoOfDrippersOnOneLateral(noOfPlantOnOneLateral*a);
        SetDischargeRateQL((noOfDrippersOnOneLateral*dischargeOfOneDripper)/3600);
        let h1=1.21*Math.pow(10,10);
        let h2=dischargeRateQL/140;
        let h3=Math.pow(h2,1.852);
        let h4=diameterOfLateral-2.2;
        let h5=Math.pow(h4,-4.871);
        let h6=(l+(noOfDrippersOnOneLateral*0.37));

        console.log("...........");
                console.log(diameterOfLateral);
                console.log(d);
                console.log(dischargeRateQL);
                console.log(noOfDrippersOnOneLateral);
        console.log("...........");
         setHeadLossofLateral(h1*h3*h5*h6*0.37);
        },[diameterOfLateral,dischargeRateQL,dischargeOfOneDripper,calculateNOL,calculateLOL,submainPlace,d,rTorSpacing,noOfLateral,a,noOfPlantOnOneLateral]);
        const onChange = e =>{
                setValues(e);
        }
  return(
    <div className="card mt-4 border-light">
                             {/* <!-- card header --> */}
                             <div className="card-header mt-4 border-light">
                                    <h5 className="card-title"></h5>
                            </div> 
                         {/* <!-- card header end -->  */}
                          {/* <!-- card-body  --> */}
                          <div className="card-body mt-3 border-light">
                                <ul>
                                        <li className="text-danger pt-0 h3"><h5>Length of lateral</h5></li>
                                </ul>

                                <form id="submain">
                                        <div className="row ">
                                                <div className="col-12">
                                                    <label>Select submain place</label>
                                                </div> 
                                                <div className="col-1 ">
                                                        <output>=</output>
                                                </div>
                                                <div className="col-8 px-0">  
                                                    <div className="form-group">
                                                 <select name="submainPlace" onChange={e => onChange(e)} className=" form-control border-primary pl-3 pr-3"  form="submain"><option>Select...</option><option value="half">Half of field</option><option value="anyside">Any one side of field</option></select>
                                                    </div>
                                                </div>   
                                        </div>
                                 </form>

                             </div>
                         {/* <!--card body  end --> */}
                           {/* <!-- card footer --> */}
                        <div className="card-footer mt-2 border-light">
                                <h5> Result, </h5>
                                <div className="card-text pl-2 pt-0">
                                        <h5>Number of Lateral (NOL) ={submainPlace&&noOfLateral&&noOfLateral!==Infinity?<span class="text-success">{Math.round(noOfLateral)}</span>:<></>}</h5>
                                     {/* <!--Place result of NOL --> */}
                                </div>
                                <div className="card-text pl-2 pt-0">
                                        <h5>Length of Lateral (LOL) = {submainPlace&&lengthOfLateral&&lengthOfLateral!==Infinity?<span class="text-success">{Math.round(lengthOfLateral)}</span>:<></>}</h5>
                                         {/* <!--Place result of LOL --> */}
                                 </div>
                        </div>
                         {/* <!--footer end --> */}
                         {/* <!-- card-body 2 --> */}
                         <div className="card-body mt-5 border-light">
                                <ul>
                                        <li className="text-danger pt-0 h3"><h5>Discharge and diameter lateral</h5></li>
                                </ul>

                                {/* <!-- >Discharge and diameter lateral form--> */}
                                <form id="lataral">
                                        <div className="row mx-2">
                                            <div className="col-12 pr-0">
                                                <label>Discharge of one dripper</label>
                                            </div> 
                                            <div className="col-12">
                                                    <div className="row">
                                                            <div className="col-2">
                                                                    <output>=</output>
                                                            </div>
                                                            <div className="col-10 area-of-land">
                                                                    <input type="number" className="form-control border-primary pl-3 pr-3 drip" name="dischargeOfOneDripper" onChange={e=>onChange(e)} placeholder=""/><span className="pl-2 drip-unit">lit/hr</span>
                                                 
                                                            </div>
    
                                                        </div>
                                               
                                            </div>   
                                        </div>
                                        <div className="row mx-2">
                                                <div className="col-12 pr-0">
                                                    <label>Diameter of lateral</label>
                                                </div> 
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-2">
                                                                <output>=</output>
                                                        </div>
                                                        <div className="col-10">
                                                                <select name="diameterOfLateral" onChange={e=>onChange(e)} className=" form-control border-primary pl-3 pr-3"  form="lataral"><option>Select Diameter</option><option value="12">12</option><option value="16">16</option><option value="20">20</option></select>
                                                   
                                                        </div>

                                                    </div>
                                                </div>   
                                        </div>
                                 </form>
                                {/* <!-- form end -->  */}

                         </div>
                         {/* <!--card body 2 end --> */}
                           {/* <!-- card footer --> */}
                        <div className="card-footer mt-2 border-light" >
                                <h5> Result, </h5>
                                <div className="card-text pl-2 pt-0">
                                    <h5>Number of plants on one lateral = {noOfPlantOnOneLateral&&noOfPlantOnOneLateral!==Infinity?<span class="text-success">{Math.round(noOfPlantOnOneLateral).toFixed(2)}</span>:<></>}</h5>
                                     {/* <!--Place result of NOL --> */}
                                </div>
                                <div className="card-text pl-2 pt-0">
                                        <h5>Number of drippers on one lateral = {noOfDrippersOnOneLateral&&noOfDrippersOnOneLateral!==Infinity?<span class="text-success">{Math.round(noOfDrippersOnOneLateral).toFixed(2)}</span>:<></>}</h5> 
                                        {/* <!--Place result of LOL --> */}
                                 </div>
                                 <div className="card-text pl-2 pt-0">
                                        <h5>Discharge rate of lateral (QL)  = {submainPlace&&dischargeRateQL&&dischargeRateQL!==Infinity?<span class="text-success">{dischargeRateQL.toFixed(2)} lit/sec</span>:<></>}</h5> 
                                        {/* <!--Place result of LOL --> */}
                                 </div>
                                 <div className="card-text pl-2 pt-0">
                                        <h5>Head loss of lateral (H<sub>l</sub>) = {submainPlace&&headLossOfLateral&&headLossOfLateral!==Infinity?<>{headLossOfLateral.toFixed(2)}</>:<></>}</h5>
                                        {submainPlace&&headLossOfLateral&&headLossOfLateral!==Infinity?<>{parseFloat(headLossOfLateral)>1.1?<><div class="alert alert-danger" style={{lineHeight:'1.5'}}  role="alert">
 It is not safe to carry flow, Change diameter!
</div></>:<></>} </>:<></>}
                                        
                                         {/* <!--Place result of LOL --> */}
                                 </div>
                        </div>
    </div>
  )

}
const mapStateToProps = state =>{
        return{
                values:state.values
        }
}

export default connect(mapStateToProps,{SetDischargeRateQL,setHeadLossofLateral,SetNoOfDrippersOnOneLateral,SetNoOfPlantOnOneLateral,setValues,setD,setL,calculateNOL,calculateLOL})(PageThree)