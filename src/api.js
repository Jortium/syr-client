import request from './request';
import { config } from './config';

export const getAllRigs = async () => {
    return request({
        method: 'GET',
        url: `${config.API_ENDPOINT}/parts`,
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${config.API_KEY}`,
        },
    });
};

// export const selfDestructButton = async () => {
//     return request({
//         method: 'DELETE',
//         url: `${config.API_ENDPOINT}/parts`,
//         headers: {
//             'content-type': 'application/json',
//             Authorization: `Bearer ${config.API_KEY}`,
//         },
//     });
// };

export const powerOnSelfTest = async () => {
    return request({
        method: 'POST',
        url: `${config.API_ENDPOINT}/parts`,
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${config.API_KEY}`,
        },
    });
};

export default { getAllRigs, selfDestructButton, powerOnSelfTest };
