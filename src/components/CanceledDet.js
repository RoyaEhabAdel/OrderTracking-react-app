import React from 'react'
import './Details.css'
import Ques from '../qu.jpg'

function CanceledDet(){
    const columns = ["الفرع", "التاريخ", "الوقت", "تفاصيل"];
    const rows = ["12:30 pm" , "05/02/2023" , "مدينة نصر"];
    const details = [ "تم انشاء الشحنة" , " تم استلام الشحنة من التاجر" , "الشحنة خرجت للتسليم" , "لم يتم تسليم الشحنة" ];
    const address = "امبابة شارع طلعت حرب، القاهرة";
    
    return(
    <>
    <div className='details'>
        <div className='details-table'>
            <h3>تفاصيل الشحنة</h3>
            <table>
                <thead>
                {columns.map((item) => (
                        <td>{item}</td>
                        ))}   
                </thead>
                <tbody>
                    <tr>
                    <div className='mainData'>{rows.map((row) => (
                        <td>{row}</td>
                    ))}
                    </div>
                    <td>{details[0]}</td>
                    </tr>
                    <tr>
                    <div className='mainData'>{rows.map((row) => (
                        <td>{row}</td>
                    ))}
                    </div>
                    <td>{details[1]}</td>
                    </tr>
                    <tr>
                    <div className='mainData'>{rows.map((row) => (
                        <td>{row}</td>)
                    )}
                    </div>
                    <td>{details[2]}</td>
                    </tr>
                    <tr>
                    <div className='mainData'>{rows.map((row) => (
                        <td>{row}</td>)
                    )}
                    </div>
                    <td>{details[3]}
                    <p>تم الغاء الشحنة</p>
                    </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        <div className='address-details'>
            <h3>عنوان التسليم</h3>
            <div className='address'>
                <p>{address}</p>
            </div>
            <div className='problem'>
                <div><img src={Ques} alt='ques' /></div>
                <div className='subProblem'>
                <p>هل يوجد مشكلة في شحنتك؟</p>
                <button>الابلاغ عن مشكلة</button>
                </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default CanceledDet;