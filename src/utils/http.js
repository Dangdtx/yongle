import axios from "axios";
import qs from "qs";
// import Loading from "lib/loading/index.js"

// 解决删除loading的问题  vm 在进行创建和删除的是同一个
// let vm = Loading();
const server = axios.create({
    // baseUEL:""
    timeout:5000,
    withCredentials:true
})
// 请求拦截器
server.interceptors.request.use((config)=>{
    if(config.method == "GET"){
        config.params = {...config.data}
    }else if(config.method == "POST"){
        config.headers["content-type"] ="appliaction/x-www/form-urlencoded";
        // config.data = qs.stringify(config.data)
    }
    // vm.handleMount()
    return config
},(err)=>{
    Promise.reject(err);
})
// 响应拦截器
server.interceptors.response.use((res)=>{
    if(res.statusText == "OK"){
        // vm.handleDestroy();
        return res.data
    }
},(err)=>{
    Promise.reject(err)
})

export default(method,url,data={})=>{
    if(method.toUpperCase()== "GET"){
        return server.get(url,{
            params:data
        })
    }else if(method.toUpperCase() == "POST"){
        return server.post(url,data)
    }
}