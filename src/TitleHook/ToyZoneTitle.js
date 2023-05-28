/* eslint-disable no-unused-vars */

import React, { useEffect } from 'react';
const ToyZoneTitle = (title) => {
    return (
        useEffect(()=>{
            document.title =`ToyZone  | ${title}`;
        },[title])
    );
};

export default ToyZoneTitle;