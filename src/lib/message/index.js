import messageBox from "./index.vue";
import Vue from "vue";

// 封装js组件导出一个方法  立即执行函数
export const MessageBox = (function(){
    //定义初始默认信息  有点击的操作  所以要有点击函数
    let defaultProps = {
        title:"信息",
        message:"上海",
        // 外部传入的事件
        handleOk:function(){},
        handleCancel:function(){} 
    }

    // 用extend继承 获取一个vue的小型实例  new可以实例  进行全局挂载
  var  messageVue = Vue.extend( messageBox)


    // 返回用户输入的信息
    return (options)=>{
        for(var key in options){
            if(options[key]){
                defaultProps[key] = options[key]
            }
        }
        
       let messageVm =  new messageVue({
            el:document.createElement("div"),
            data:{
                title:defaultProps.title,
                message:defaultProps.message, 
            },
            methods:{
                // 确认按钮和取消按钮的事件
                handleTrue(){
                    defaultProps.handleOk&& defaultProps.handleOk()
                    document.body.removeChild(messageVm.$mount().$el)
                },
                handleFalse(){
                    defaultProps.handleCancel&& defaultProps.handleCancel()
                    document.body.removeChild(messageVm.$mount().$el)
                },
                handleClose(){
                    document.body.removeChild(messageVm.$mount().$el)
                }
            }
        })
        // 在页面进行挂载  this.$mount().$el
        document.body.appendChild(messageVm.$mount().$el)
    }
 

})()


/*
引入写好的静态布局   给其设定默认值  导出 自执行函数



* */
 