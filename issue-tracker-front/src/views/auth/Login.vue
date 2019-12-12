<template>
  <div class="login">
    <v-container class="fill-height mt-4" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>

              <v-form ref="loginForm">
                <v-text-field label="Email" name="email" type="email" v-model="user.email"/>
                <v-text-field id="password" label="Password" name="password" type="password" v-model="user.password"/>
              </v-form>

            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="loginUser">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
  data: function() {
    return{
      formValid: false,
      user:{
        email:'',
        password:''
      },
      snackbar:{
        show: false,
      },
      top:true,
      color:'',
      right:true,
    }
  },//data
  methods:{
    ...mapActions({
      login: 'user/loginUser',
      addNotification: 'application/addNotification'
    }),

    loginUser(){
      if(this.$refs.loginForm.validate()){
          this.login(this.user)
          //this.$store.dispatch('user/loginUser', this.user)
          .then(()=>{
            this.addNotification({
              text:'Bienvenido',
              show:true,
              color:'success'
            }).then(()=>{
              this.$router.push({name: 'dashboard'});
            });
          }).catch(()=>{
            this.addNotification({
              show:true,
              text:'Error al iniciar sesion',
              color:'red'
            })
          });
      }
    }
  },//methods
}
</script>