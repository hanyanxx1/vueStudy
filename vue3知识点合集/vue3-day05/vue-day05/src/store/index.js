// 状态集中管理
// 数据实现响应式
// ref reactive--->对象中存储着状态msg,age,counter
import {reactive} from 'vue'
const store={
    state:reactive({//定义状态
        msg:"helloworld",
        bannersList:[]
    }),
    updateMsg:function(){
        this.state.msg='你好'
    },
    updateBannersList(value){
        this.state.bannersList=value
        console.log(this.state.bannersList);
    }
} 
// 如何在App组件通过provide提供
export default store