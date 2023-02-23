import { METHODS, SERVICE_ROUTES, replaceUrl } from "../../utils/constants/service.constant";
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


export function GetLeavesService(date) {
    return new Promise((resolve, reject) => {
        console.log("-------------------------->URL---->", replaceUrl(SERVICE_ROUTES.GET_LEAVE, date));
        let config = {
            url: replaceUrl(SERVICE_ROUTES.GET_LEAVE, date),
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


export function GetUserDeatilService(date) {
    return new Promise((resolve, reject) => {
        let config = {
            url: replaceUrl(SERVICE_ROUTES.USER_DETAIL, date),
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