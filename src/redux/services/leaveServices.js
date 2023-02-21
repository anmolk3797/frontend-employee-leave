import { METHODS, SERVICE_ROUTES } from "../../utils/constants/service.constant";
import Axios from "axios";


export function createleaveServices(data) {

    return new Promise((resolve, reject) => {
        let config = {
            url: SERVICE_ROUTES.CREATE_LEAVE,
            method: METHODS.POST,
            data,
        };
        Axios.request(config)
            .then((response) => {
                return resolve(response);
            })
            .catch((error) => {
                return reject(error);
            });
    });
}


export function GetLeavesService() {
    return new Promise((resolve, reject) => {
        let config = {
            url: SERVICE_ROUTES.GET_LEAVE,
            method: METHODS.GET,
        };

        Axios.request(config)
            .then((response) => {

                return resolve(response);
            })
            .catch((error) => {

                return reject(error);

            });
    });
}
