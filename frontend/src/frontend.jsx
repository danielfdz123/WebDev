import React from 'react';

function Structure() {
    return (
        <div className = 'homePage'>
            <div className='navTab'> 
                <button className='button'> Home </button>
                <button className='button'> Team </button>
                <button className='button'> Jobs </button>
            </div>
            <div className='About'> 
                <h1> About </h1>
                    {/* add 'about' tab description here*/}
            </div>
            <div className='Team'> 
                <h1> Meet the Team! </h1>
                    {/* add a brief description about our team here*/}
            </div>
            <div className='Jobs'> 
                <h1> Our Work! </h1>
            </div>                
        </div>
    );
}

export default Structure