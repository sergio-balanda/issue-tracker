import axios from '../../axios/index'

export default{
    registerUser(ctx, payload){
        return new Promise((resolve, reject)=>{ 
          axios.post('register', payload)
            .then((res)=>{
                if(res.data){
                    resolve(res);
                }else{
                    reject(res);
                }

            }).catch((error)=>{
              reject(error);
            })
        })
    },

    loginUser(ctx, payload){
        return new Promise((resolve, reject)=>{ 
          axios.post('login', payload)
            .then((res)=>{
                if(res.data.access_token){
                    ctx.commit('setLoggedIn', true);
                    localStorage.setItem('token', res.data.access_token);
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
            axios.post('forgot-password', payload)
              .then((res)=>{
                resolve(res);
              }).catch((error)=>{
                reject(error);
              })
          })
    },

    resetPassword(ctx, payload){
        return new Promise((resolve, reject)=>{ 
            axios.post('reset-password', payload)
              .then((res)=>{
                resolve(res);
              }).catch((error)=>{
                reject(error);
              })
          })
    },

    me(ctx){
        return new Promise((resolve, reject)=>{ 
            axios.get('me')
              .then((res)=>{
                ctx.commit('setUserDetails',res.data);
                resolve(res);
              }).catch((error)=>{
                reject(error);
              })
          })
    },
}