import API from '../../../../utils/api';
import Notify from '../../../../utils/notify/notify';

type UserParams = {
    data: any;
    id: string;
}

export const updateProfile = async ({id, data}: UserParams) => {
    try {
        const response = await API.put(`/user/update/${id}`, data);
        Notify.top(response.data.message);
        return [null, response.data.payload];
    } catch (err: any) {
        const message = err.response.data.message;
        Notify.top(message ? message : 'Something went wrong');
        return [err.response.data]
    }
}