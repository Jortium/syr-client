import React, { useContext, useState } from 'react';
import './NewPost.css';
import ApiContext from '../ApiContext';

const NewPost = () => {
    const [formValues, setInputValue] = useState({
        cpuManufacturer: '',
        cpuModel: '',
        cpuCores: '',
        gpuManufacturer: '',
        gpuModel: '',
        RAM: '',
    });

    const CPU_MANUFACTURERS = ['Intel', 'AMD'];
    const CPU_CORES = [2, 4, 6, 8, 12];
    const GPU_MANUFACTURER = ['Nvidia', 'AMD'];
    const RAM = [4, 6, 8, 10, 12, 14, 16, 32];

    const generatingOptions = useContext(ApiContext);

    const createDropdown = (values) => {
        return values.map((value) => <option>{value}</option>);
    };

    const handleSubmit = () => {
        generatingOptions.postRig(formValues);
    };

    const handleValueChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...formValues, [name]: value });
    };

    return (
        <div className="newPost">
            <h2>Share Your Specifications</h2>
            <select
                className="dropDown"
                name="cpuManufacturer"
                onChange={handleValueChange}
            >
                {createDropdown(CPU_MANUFACTURERS)}
            </select>
            <div>
                <label htmlFor="cpuModel">CPU Model</label>
                <input
                    type="text"
                    className="textbox"
                    name="cpuModel"
                    onChange={handleValueChange}
                />
            </div>
            <select
                className="dropDown"
                name="cpuCores"
                onChange={handleValueChange}
            >
                {createDropdown(CPU_CORES)}
            </select>
            <select
                className="dropDown"
                name="gpuManufacturer"
                onChange={handleValueChange}
            >
                {createDropdown(GPU_MANUFACTURER)}
            </select>
            <div>
                <label htmlFor="gpuModel">GPU Model</label>
                <input
                    type="text"
                    className="textbox"
                    name="gpuModel"
                    onChange={handleValueChange}
                />
            </div>
            <select
                className="dropDown"
                name="RAM"
                onChange={handleValueChange}
            >
                {createDropdown(RAM)}
            </select>
            <button onClick={handleSubmit}>POST</button>
        </div>
    );
};

export default NewPost;
