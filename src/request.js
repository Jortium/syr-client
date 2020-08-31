import axios from 'axios';

const request = async (requestOptions) => {
    let formattedResponse;
    try {
        const res = await axios.request(requestOptions);
        const { data } = res;
        formattedResponse = {
            status: 'SUCCESS',
            body: { data },
        };
    } catch (error) {
        formattedResponse = {
            status: 'FAILURE',
            body: { error },
        };
    }
    return formattedResponse;
};

export default request;