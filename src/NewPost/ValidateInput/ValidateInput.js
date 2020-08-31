export const validateInput = (name, value) => {
    switch (name) {
        case 'cpumanufacturer':
            if (value === '...') {
                return true;
            }
            break;
        case 'cpumodel':
            if (value.length <= 3) {
                return true;
            }
            break;
        case 'cpucores':
            if (value === '...') {
                return true;
            }
            break;
        case 'gpumanufacturer':
            if (value === '...') {
                return true;
            }
            break;
        case 'gpumodel':
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

export default {validateInput};