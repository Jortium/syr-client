import React from 'react';

const SubmitErrorMessage = (props) => {
    return props.error === true
    ? `You shall not pass! Until you fix your errors.`
    : <></>
    };

const CpuManufacturerErrorMessage = (props) => {
    return props.error != null && props.error !== ''
    ? `Great Scott! We can't reach 1.21 Gigawatts!`
    : <></>
};
    
const CpuModelErrorMessage = (props) => {
    return props.error != null && props.error !== ''
    ? `Please enter more than 5 characters.`
    : <></>
};

const CpuCoresErrorMessage = (props) => {
    return props.error != null && props.error !== ''
        ? `You shall not pass! Until you fix your errors.`
        : <></>
};

const GpuManufacturerErrorMessage = (props) => {
    return props.error != null && props.error !== ''
        ? `You shall not pass! Until you fix your errors.`
        : <></>
};

const GpuModelErrorMessage = (props) => {
    return props.error != null && props.error !== ''
        ? `Enter more than 5 characters.`
        : <></>
};

const RamErrorMessage = (props) => {
    return props.error != null && props.error !== ''
        ? `You shall not pass! Until you fix your errors.`
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
