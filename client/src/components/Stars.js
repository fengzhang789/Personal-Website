import React from 'react'
import { useState, useEffect } from 'react'

const Stars = ({ stars }) => {
    console.log(stars[0].left)
    return (
        <div className='stars'>
            {stars && stars.map((star, index) => {
                return <div key={index} className='star' style={star}></div>
            })}
        </div>
    );
}

export default Stars