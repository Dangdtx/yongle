<template>
    <div class="message">
        <div class="up">
            <span>{{title}}</span>
            <v-touch tag="span" @tap="handleClose()">×</v-touch>
        </div>
        <div class="down">
            <div class="content">{{message}}</div>
            <div class="btn">
                <v-touch tag="button" @tap="handleTrue()">确定</v-touch>
               <v-touch tag="button" @tap="handleFalse()">关闭</v-touch>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:"Message",
     
}
</script>

<style  >
html{font-size: 100px;} 
.message{  width:  1.5rem; height: 1.5rem; border: 1px solid #cc3333; position: absolute;  margin: 50%  auto;   left:25%}
.up{width: 100%;height: 30% ;display: flex;justify-content: space-between;align-items: center; background: #ccc}
.up span{margin: 0 ,.2rem}
.down {width: 100%;height:70%}
.content{text-align: center;line-height: 200%;height: 40%;margin-top:.3rem}
.btn{display: flex;justify-content: space-around}










</style>
