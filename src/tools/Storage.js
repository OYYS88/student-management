import { createStore } from 'vuex'
const Store = createStore({
    state(){
        return {
            userName:"",
            userPassword:"",
        }
    },
    getters:{
        isLogin:(state)=>{
            return state.userName.length > 0
        }
    },
    mutations:{
        // 清除缓存的用户信息，登出使用
        cleaUSerInfo(state){
            state.userName = '';
            state.userPassword = '';
        },
    //     注册用户信息，登录使用
        registUserInfo(state,{name,password}){
            state.userName=name;
            state.userPassword=password;
        },
        logout(state){
            this.commit('cleaUSerInfo',state);
        }
    }
})
export default Store;