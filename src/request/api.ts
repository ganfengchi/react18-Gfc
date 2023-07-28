import http from './index'



const baseURL = {
    getUserRule: "prod-api/captchaImage",
}
export function getCaptchaImage() {
    return http({
        method: "get",
        baseURL: baseURL.getUserRule,
        // params:params
    })
}