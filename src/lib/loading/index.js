/*
封装js组件 引入index.vue 
对组件进行导出   
引入的index.vue是一个函数  当组件作为函数使用的时候作为install使用
有vue参数  
通过Vue.extend继承Vue的方法和属性   
通过new 这个vue 建立新的挂载点   

删除挂载点的时候注意 删除的和创建的不是同一个  用接一下

*/ 
import Loading from "./index.vue"
import Vue from "vue"
export default ()=>{
    let LoadingComponent = Vue.extend(Loading)
   let vm =  new LoadingComponent({
        el:document.createElement("div"),
      
        methods:{
            handleMount(){
                  document.body.appendChild(vm.$mount().$el);
            },
            handleDestroy(){
                document.body.removeChild(vm.$mount().$el);
            }
        }
    })
  
    return vm;
}