import axios from 'axios'

const state ={
    isLoggedIn: false,
    userDetails:{}
};

const mutations={
    setLoggedIn(state, payload){
        state.isLoggedIn=payload;
    }
};

const actions={
    loginUser(ctx, payload){
        return new Promise((resolve, reject)=>{ 
          axios.post('http://issue-tracker-backend.test/api/login', payload)
            .then((res)=>{
                ctx.commit('setLoggedIn', true);
                localStorage.setItem('token', res.data);
                resolve(res);
            }).catch((error)=>{
              reject(error);
            })
        })
    },

    logoutUser(ctx){
        return new Promise((resolve)=>{ 
            localStorage.removeItem('token');
            ctx.commit('setLoggedIn',false);
            resolve(true);
        })
    },

    setLoggedInState(ctx){
        return new Promise((resolve)=>{ 
            if(localStorage.getItem('token')){
                ctx.commit('setLoggedIn',true);
                resolve(true)
            }else{
                ctx.commit('setLoggedIn',false);
                resolve(false)
            }
        })
    }
};

const getters ={
    loggedIn(state){
        return state.isLoggedIn;
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}