import React,{useEffect} from 'react';
import "./style.css";
import {calculateTotalHeadLoss,calculateHP} from '../../action/PageFour';
import {connect} from 'react-redux';
import PageSix from './PageSix';
const PageFive = ({calculateTotalHeadLoss,calculateHP,values:{submainPlace,hpReaquired,noOfLateral,dischargeRateQL,filterLoss,totalHeadLoss,fittingLoss,venturyLoss,suctionHeadAndDeliverHead,operatingPressureOfDrip,headLossOfMainLine}}) =>{

    useEffect(()=>{
      calculateTotalHeadLoss(filterLoss+fittingLoss+venturyLoss+suctionHeadAndDeliverHead+operatingPressureOfDrip+headLossOfMainLine);
     
      
      let r1=totalHeadLoss*noOfLateral*dischargeRateQL;
      let r2=75*0.80*0.75;
     
      calculateHP((r1/r2)*1.1);
    },[totalHeadLoss,headLossOfMainLine,dischargeRateQL,noOfLateral]);


  return(
      <>
    <div className="card mt-4 border-light">
    {/* <!-- card-body 2 --> */}
                          <div className="card-body mt-5 border-light">
                                <ul>
                                        <li className="text-danger pt-0 h3"><h5>HP requirements of the pump</h5></li>
                                </ul>

                         </div>
                         {/* <!--card body 2 end -->
                         <!--footer --> */}
                         <div className="card-footer mt-2 border-light">
                                <h5> Result, </h5>
                                <div className="card-text pl-2 pt-0">
                        <h5>HP required = {hpReaquired&&hpReaquired!==Infinity?<span class="text-success">{Math.round(hpReaquired)} HP required </span>:<></>}</h5>
                                     {/* <!--Place result of HP --> */}
                                </div>
                                
                        </div>
                        {/* <!-- footer end --> */}
                    </div>
                    {/* //  <!-- Third card end--> */}
                   
                 
                  {hpReaquired&&hpReaquired!==Infinity&&submainPlace==="anyside"?<PageSix img="anyside"/>:<></>}
                  {hpReaquired&&hpReaquired!==Infinity&&submainPlace==="half"?<PageSix img="half"/>:<></>}
                 
                  </>
  )

}

const mapStateToProps = state =>{

  return {
    values:state.values
  }
}

export default connect(mapStateToProps,{calculateTotalHeadLoss,calculateHP})(PageFive)