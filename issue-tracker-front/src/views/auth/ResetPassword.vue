<template>
  <div class="resetPassword">
    <v-container class="fill-height mt-4" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>

              <v-form ref="resetPasswordForm">
                <v-text-field label="Correo" name="email" type="email" v-model="user.email"/>
                <v-text-field id="password" label="Contraseña" name="password" type="password" v-model="user.password"/>
                <v-text-field id="password_confirmation" label="Confirmar contraseña" name="password_confirmation" type="password" v-model="user.password_confirmation"/>
              </v-form>

            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="sendResetPassword">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar
      v-model="snackbar.show"
      :top="top" 
      :color="color"
      :right="right"
    >
      {{ snackbar.text }}
      <v-btn
        color="white"
        text
        @click="snackbar.show = false"
      >
        Cerrar
      </v-btn>
    </v-snackbar>
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
        password:'',
        password_confirmation:''
      },
      snackbar:{
        show: false,
        text:''
      },
      top:true,
      color:'',
      right:true,
    }
  },//data
  methods:{
    ...mapActions({
      resetPassword: 'user/resetPassword'
    }),

    sendResetPassword(){
      if(this.$refs.resetPasswordForm.validate()){
        const token = this.$route.query.token;
          this.resetPassword({
            ...this.user, token
          })
          //this.$store.dispatch('user/loginUser', this.user)
          .then(()=>{
            this.$router.push({name: 'login'});
          });
      }
    }
  },//methods
}
</script>