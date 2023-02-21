import { METHODS, SERVICE_ROUTES } from "../../utils/constants/service.constant";
import Axios from "axios";


export function dateLeaveService(data) {

    return new Promise((resolve, reject) => {
        let config = {
            url: SERVICE_ROUTES.CREATE_LEAVE,
            method: METHODS.POST,
            data,
        };
        Axios.request(config)
            .then((response) => {
                console.log(response);
                return resolve(response);
            })
            .catch((error) => {
                return reject(error);
            });
    });
}
