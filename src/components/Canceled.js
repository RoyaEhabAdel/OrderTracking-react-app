import React, { useState } from 'react'
import './canceled.css';
import axios from 'axios';

function Canceled(){
    
    const [set, setSet] = useState("");
    const [exception, setException] = useState("");
    const [track, setTrack] = useState("");

        axios.get("https://tracking.bosta.co/shipments/track/13737343")
        .then((res)=>{
            setSet(res.data.CurrentStatus?.timestamp);
            setException(res.data.CurrentStatus?.state);
            setTrack(res.data.TrackingNumber);
        })
        



    const steps = ["تم انشاء الشحنة" , "تم استلام الشحنة من التاجر" , "الشحنة خرجت للتسليم" , "تم التسليم"]
    const [currentStep, setCurrentStep] = useState(2)
    return(
        <>
        <div className='stepper'>
            <div className='aboveStepper'>
                <div>
                    <p className='titleStepper'> {track} رقم الشحنة</p>
                    <p className='status'>تم الغاء الشحنة</p>
                </div>
                <div>
                    <p className='titleStepper'>اخر تحديث</p>
                    <p className='date'>{set} </p>
                    <p className='exception'>{exception}</p>
                </div>
                <div>
                    <p className='titleStepper'>موعد التسليم خلال</p>
                    <p className='date'>مارس 2023</p>
                </div>
            </div>
            <div>
            <div className='mainStepper'>
                {
                steps?.map((step,i)=>(
                    <div key={i} className={`stepItem ${currentStep === i+1 && 'active'} ${i+1 < currentStep && 'complete'}`}>
                        <div className='step'>
                           {
                           (i+1 < currentStep && `complete`) ? "✔️" : "🚚"
                        }</div>
                        <p>{step}</p>
                    </div>
                ))
                }

            </div>
            
            </div>

        </div>
        </>
    )
}

export default Canceled;