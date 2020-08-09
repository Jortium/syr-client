import React from 'react';

const SubmitErrorMessage = (props) => {
    return props.error === true
    ? <div><p>You shall not pass! Until you fix your errors.</p></div>
    : <></>
    };

const CpuManufacturerErrorMessage = (props) => {
    return props.error != null && props.error !== ''
    ? <div><p>Great Scott! We can't reach 1.21 Gigawatts!</p></div>
    : <></>
};
    
const CpuModelErrorMessage = (props) => {
    return props.error != null && props.error !== ''
    ? <div><p>Please enter more than 5 characters.</p></div>
    : <></>
};

const CpuCoresErrorMessage = (props) => {
    return props.error != null && props.error !== ''
        ? <div><p>You shall not pass! Until you fix your errors.</p></div>
        : <></>
};

const GpuManufacturerErrorMessage = (props) => {
    return props.error != null && props.error !== ''
        ? <div><p>You shall not pass! Until you fix your errors.</p></div>
        : <></>
};

const GpuModelErrorMessage = (props) => {
    return props.error != null && props.error !== ''
        ? <div><p>Enter more than 5 characters.</p></div>
        : <></>
};

const RamErrorMessage = (props) => {
    return props.error != null && props.error !== ''
        ? <div><p>You shall not pass! Until you fix your errors.</p></div>
        : <></>
};   

export {
    SubmitErrorMessage,
    CpuManufacturerErrorMessage,
    CpuModelErrorMessage,
    CpuCoresErrorMessage,
    GpuManufacturerErrorMessage,
    GpuModelErrorMessage,
    RamErrorMessage
};
