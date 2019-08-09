import Loading from "./index.vue";
import Vue from "vue";
export default () => {


<<<<<<< HEAD
*/ 
import Loading from "./index.vue"
import Vue from "vue"
export default ()=>{
    let LoadingComponent = Vue.extend(Loading)
   let vm =  new LoadingComponent({
        el:document.createElement("div"),
        data:{
            flag:false
        },
        methods:{
            handleMount(){
                this.flag = true; 
            },
            handleDestroy(){
                this.flag = false; 
            }
        }
    })
   document.body.appendChild(vm.$mount().$el);
    return vm;
=======
    let LoadingComponent = Vue.extend(Loading);

    let child = new LoadingComponent({
        el: document.createElement("div"),
        data:{
            flag:false
        },
        methods: {
            handlemount() {
                this.flag = true;
            },
            handleDestory() {
               this.flag = false;
            }
        }
    })

    document.body.appendChild(child.$mount().$el)
    return child;

>>>>>>> yang
}