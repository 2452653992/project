import myAxios from "./axios";
//获得用户分类的数量
export function getsortNumberAPI() {
    return myAxios({
        url: '/sortnumber',
        method: 'get',
        
    })
}
// 添加分类
export function addsortAPI(params) {
    return myAxios({
        url: '/sort',
        method: 'post',
        data: params
    })
}
// 获得分类
export function getsortAPI() {
    return myAxios({
        url: '/sort',
        method: 'get',
    })
}
// 删除分类
export function deletesortAPI() {
    return myAxios({
        url: '/sort',
        method: 'delete',
    })
}