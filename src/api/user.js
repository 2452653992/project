import myAxios from "./axios";
// 用户登录
export function loginAPI(data) {
    return myAxios({
        url: `/user/login?telephonenumber=${data.telephoneNumber}`,
        method: 'post',
        data: data,
    })
}
// 用户注册
export function registerAPI(data) {
    return myAxios({
        url: '/user/register',
        method: 'post',
        data: data
    })
}
// 用户修改密码
export function changePasswordAPI(oldPassword,newPassword){
    return myAxios({
        url: `/user/${oldPassword}/${newPassword}`,
        method: 'put'
    })
}

