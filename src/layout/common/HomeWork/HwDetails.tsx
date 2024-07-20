import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

function HwDetails() {
    const location = useLocation();
    const pathArr = location.pathname.split('/')
    const hwId = pathArr[pathArr.length - 1]


    useEffect(() => {

    }, [hwId])
    return (
        <div>HwDetails</div>
    )
}

export default HwDetails