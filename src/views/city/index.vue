<template>
    <div class="city">
           
    </div>
</template> 

<script>
import {mapActions} from "vuex" 
export default {
    name:"City",
    created(){
        this.handleGetActions();
    },
    methods:{
        ...mapActions({
            handleGetActions:"city/handleGetActions"
        })
    }
}
</script>
<style>

</style>
