import axios from "axios";


const instance= axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{'API-KEY':'69d4ca22-536f-46da-9ae4-d44380071602'}
})

export const usersAPI={
    getUsers(currentPage=1,pageSize=10){
        return   instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    deleteUser(id=1) {
        return instance.delete(`/follow/${id}`)
            .then(res => res.data)
    },//unfollow user
    postUser(id=1) {
        return instance.post(`/follow/${id}`)
            .then(res => res.data)
    } ,//follow user
    getProfile(id) {
    return  instance.get(`profile/${id}`)}
}

export const authAPI={
    me(){return instance.get(`auth/me`)}
}






