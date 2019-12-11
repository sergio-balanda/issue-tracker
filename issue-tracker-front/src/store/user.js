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
                if(res.data.access_token){
                    ctx.commit('setLoggedIn', true);
                    localStorage.setItem('token', res.data);
                    resolve(res);
                }else{
                    reject(res);
                }

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
    },

    forgotPassword(ctx, payload){
        return new Promise((resolve, reject)=>{ 
            axios.post('http://issue-tracker-backend.test/api/forgot-password', payload)
              .then((res)=>{
                resolve(res);
              }).catch((error)=>{
                reject(error);
              })
          })
    },

    resetPassword(ctx, payload){
        return new Promise((resolve, reject)=>{ 
            axios.post('http://issue-tracker-backend.test/api/reset-password', payload)
              .then((res)=>{
                resolve(res);
              }).catch((error)=>{
                reject(error);
              })
          })
    },

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