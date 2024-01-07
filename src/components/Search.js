import React, { useState } from 'react';
import './Search.css'


function Search(props){
    const [required, setReq] = useState("");
    const handleChange = (e) => {
        setReq(e.target.value);
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            props.onSubmit(required);
        }
    return(
        <>
        <div className='search'>
            <h3>تتبع شحنتك</h3>
            <div>
                <form onSubmit={handleSubmit}>
                <input type='text' placeholder='رقم التتبع' value={required} onChange={handleChange} />
                <input type='submit' value={"🔍"} className='submit' />
                </form>
            </div>
        </div>
        </>
    )
}

export default Search;