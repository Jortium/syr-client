import React, { useContext, useState } from 'react';
import './NewPost.css';
import ApiContext from '../ApiContext';
import { powerOnSelfTest } from '../api';
import { validateInput } from './ValidateInput/ValidateInput';
import {
    SubmitErrorMessage,
    CpuManufacturerErrorMessage,
    CpuModelErrorMessage,
    CpuCoresErrorMessage,
    GpuManufacturerErrorMessage,
    GpuModelErrorMessage,
    RamErrorMessage,
} from './FormErrors/FormErrors';

const NewPost = (props) => {
    const [formValues, setInputValue] = useState({
        cpumanufacturer: '',
        cpumodel: '',
        cpucores: '',
        gpumanufacturer: '',
        gpumodel: '',
        ram: '',
        cpumanufacturerError: '',
        cpumodelError: '',
        cpucoresError: '',
        gpumanufacturerError: '',
        gpumodelError: '',
        ramerror: '',
        submitError: false,
    });

    const CPU_MANUFACTURERS = ['...', 'Intel', 'AMD'];
    const CPU_CORES = ['...', 2, 4, 6, 8, 12];
    const GPU_MANUFACTURER = ['...', 'Nvidia', 'AMD'];
    const RAM = ['...', 4, 6, 8, 10, 12, 14, 16, 32];

    const generatingOptions = useContext(ApiContext);

    const createDropdown = (values) => {
        return values.map((value, i) => (
            <option key={`post${i + 1}`}>{value}</option>
        ));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {
            cpuManufacturerError,
            cpuModelError,
            cpuCoresError,
            gpuManufacturerError,
            gpuModelError,
            ramError,
            cpucores,
            cpumanufacturer,
            cpumodel,
            gpumanufacturer,
            gpumodel,
            ram,
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
        const newRig = {
            cpucores,
            cpumanufacturer,
            cpumodel,
            gpumanufacturer,
            gpumodel,
            ram,
        };
        const response = await powerOnSelfTest(newRig);
        if (response.status === 'FAILURE') {
            console.log('Error posting to server');
            return;
        }
        generatingOptions.postRig(formValues);
        props.history.push('/board');
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
                <label htmlFor="cpumanufacturer">
                    CPU Manufacter
                    <br />
                </label>
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
                name="cpumanufacturer"
                onChange={handleValueChange}
            >
                {createDropdown(CPU_MANUFACTURERS)}
            </select>
            <div>
                <div>
                    <label htmlFor="cpumodel">CPU Model</label>
                </div>
                <div>
                    <p>
                        <CpuModelErrorMessage
                            error={formValues.cpuModelError}
                        />
                    </p>
                </div>
                <input
                    type="text"
                    className="textBox"
                    name="cpumodel"
                    onChange={handleValueChange}
                />
            </div>
            <div>
                <label htmlFor="cpumodel">CPU Cores</label>
                <CpuCoresErrorMessage error={formValues.cpuCoresError} />
            </div>
            <select
                className="dropDown"
                name="cpucores"
                onChange={handleValueChange}
            >
                {createDropdown(CPU_CORES)}
            </select>
            <div>
                <label htmlFor="gpumanufacturer">GPU Manufacter</label>
                <GpuManufacturerErrorMessage
                    error={formValues.gpuManufacturerError}
                />
            </div>
            <select
                className="dropDown"
                name="gpumanufacturer"
                onChange={handleValueChange}
            >
                {createDropdown(GPU_MANUFACTURER)}
            </select>
            <div>
                <label htmlFor="gpumodel">GPU Model</label>
                <GpuModelErrorMessage error={formValues.gpuModelError} />
            </div>
            <input
                type="text"
                className="textBox"
                name="gpumodel"
                onChange={handleValueChange}
            />
            <div>
                <label htmlFor="gpumodel">RAM</label>
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
