import React, { useState } from 'react';
import logo from '../bosta-ar.jpg';
import './Nav.css'
import Stepper from './Stepper';
import Details from './Details';
import Search from './Search';
import Canceled from './Canceled';
import CanceledDet from './CanceledDet'
import Delivered from './Delivered';
import DeliveredDet from './DeliveredDet'

function Nav(){

    var getData = (data) => {
        console.log(data)
        setTest(data)
    }
    const [test, setTest] = useState("");

    const x = "false"
    const [show, setShow] = useState(false)
     const track = () =>{
        if (show === true){
            setShow(false)
        }else{
            setShow(true)
        }
        
     }
    
    if(x){
    return(
        <>
        <div className='Nav'>

        
        <div><img src={logo} alt='logo'/></div>

            <div>
            <ul>
                <li><a href='##'> الرئيسية</a></li>
                <li><a href='##'> الأسعار</a></li>
                <li><a href='##'> كلم المبيعات</a></li>
            </ul>
            </div>
            
            
            <div className='btns'>
                <button className='uniqueBtn' onClick={track}>تتبع شحنتك </button>
                <button>تسجيل الدخول  </button>
                <button className='uniqueBtn'>Eng</button>
            </div>
        </div>
        {show && <Search onSubmit={getData} />}
        {test === "67151313" && <Stepper />}
        {test === "67151313" && <Details />}
        {test === "13737343" && <Canceled />}
        {test === "13737343" && <CanceledDet />}
        {test === "7234258" && <Delivered />}
        {test === "7234258" && <DeliveredDet />}
        </>
    )
    }
 
    
}

export default Nav;