import React, { useContext, useState } from 'react';
import './NewPost.css';
import apiContext from '../apiContext';
import {
    SubmitErrorMessage,
    CpuManufacturerErrorMessage,
    CpuModelErrorMessage,
    CpuCoresErrorMessage,
    GpuManufacturerErrorMessage,
    GpuModelErrorMessage,
    RamErrorMessage,
} from '../FormErrors/FormErrors';

const NewPost = (props) => {
    const [formValues, setInputValue] = useState({
        cpuManufacturer: '',
        cpuModel: '',
        cpuCores: '',
        gpuManufacturer: '',
        gpuModel: '',
        ram: '',
        cpuManufacturerError: '',
        cpuModelError: '',
        cpuCoresError: '',
        gpuManufacturerError: '',
        gpuModelError: '',
        ramError: '',
        submitError: false,
    });

    const CPU_MANUFACTURERS = ['...', 'Intel', 'AMD'];
    const CPU_CORES = ['...', 2, 4, 6, 8, 12];
    const GPU_MANUFACTURER = ['...', 'Nvidia', 'AMD'];
    const RAM = ['...', 4, 6, 8, 10, 12, 14, 16, 32];

    const generatingOptions = useContext(apiContext);

    const createDropdown = (values) => {
        return values.map((value) => <option>{value}</option>);
    };

    const handleSubmit = () => {
        const {
            cpuManufacturerError,
            cpuModelError,
            cpuCoresError,
            gpuManufacturerError,
            gpuModelError,
            ramError,
        } = formValues;
        if (
            cpuManufacturerError === '' ||
            cpuModelError === '' ||
            cpuCoresError === '' ||
            gpuManufacturerError === '' ||
            gpuModelError === '' ||
            ramError === ''
        ) {
            setInputValue({
                ...formValues,
                submitError: true,
            });
            return;
        }
        setInputValue({
            ...formValues,
            submitError: false,
        });
        generatingOptions.postRig(formValues);
        props.history.push('/');
    };

    const validateInput = (name, value) => {
        switch (name) {
            case 'cpuManufacturer':
                if (value === '...') {
                    return true;
                }
                break;
            case 'cpuModel':
                if (value.length <= 3) {
                    return true;
                }
                break;
            case 'cpuCores':
                if (value === '...') {
                    return true;
                }
                break;
            case 'gpuManufacturer':
                if (value === '...') {
                    return true;
                }
                break;
            case 'gpuModel':
                if (value.length <= 3) {
                    return true;
                }
                break;
            case 'ram':
                if (value === '...') {
                    return true;
                }
                break;
            default:
                return false;
        }
    };

    const handleValueChange = (e) => {
        const { name, value } = e.target;
        const error = validateInput(name, value);
        if (!error) {
            setInputValue({
                ...formValues,
                [name]: value,
                [`${name}Error`]: null,
            });
            return;
        }
        setInputValue({
            ...formValues,
            [name]: value,
            [`${name}Error`]: error,
        });
    };

    return (
        <div className="newPost">
            <h2>Share Your Specifications</h2>
            <div className="cpuLabel">
                <label htmlFor="cpuManufacturer">CPU Manufacter<br /></label>
            </div>
            <div>
                <p>
                <CpuManufacturerErrorMessage
                    error={formValues.cpuManufacturerError}  
                />
                </p>
            </div>
            <select
                className="dropDown"
                name="cpuManufacturer"
                onChange={handleValueChange}
            >
                {createDropdown(CPU_MANUFACTURERS)}
            </select>
            <div>
                <div>
                    <label htmlFor="cpuModel">CPU Model</label>
                </div>
                <div>
                        <p>
                        <CpuModelErrorMessage
                                error={formValues.cpuModelError}/>
                        </p>
                    </div>
                <input
                    type="text"
                    className="textBox"
                    name="cpuModel"
                    onChange={handleValueChange}
                />
            </div>
            <div>
                <label htmlFor="cpuModel">CPU Cores</label>
                <CpuCoresErrorMessage error={formValues.cpuCoresError} />
            </div>
            <select
                className="dropDown"
                name="cpuCores"
                onChange={handleValueChange}
            >
                {createDropdown(CPU_CORES)}
            </select>
            <div>
                <label htmlFor="gpuManufacturer">GPU Manufacter</label>
                <GpuManufacturerErrorMessage
                    error={formValues.gpuManufacturerError}
                />
            </div>
            <select
                className="dropDown"
                name="gpuManufacturer"
                onChange={handleValueChange}
            >
                {createDropdown(GPU_MANUFACTURER)}
            </select>
            <div>
                <label htmlFor="gpuModel">GPU Model</label>
                <GpuModelErrorMessage error={formValues.gpuModelError} />
            </div>
            <input
                type="text"
                className="textBox"
                name="gpuModel"
                onChange={handleValueChange}
            />
            <div>
                <label htmlFor="gpuModel">RAM</label>
                <RamErrorMessage error={formValues.ramError} />
            </div>
            <select
                className="dropDown"
                name="ram"
                onChange={handleValueChange}
            >
                {createDropdown(RAM)}
            </select>
            <SubmitErrorMessage error={formValues.submitError} />
            <button onClick={handleSubmit} className="postButton">
                POST
            </button>
        </div>
    );
};

export default NewPost;
