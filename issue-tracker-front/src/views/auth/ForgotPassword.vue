<template>
  <div class="forgotPassword">
    <v-container class="fill-height mt-4" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Forgot password</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>

              <v-form ref="forgotPasswordForm">
                <v-text-field label="Email" name="email" type="email" v-model="email"/>
              </v-form>

            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="sendForgotPassword">Enviar coreo</v-btn>
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
      email:'',
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
      forgotPassword:'user/forgotPassword'
    }),
    sendForgotPassword(){
      if(this.$refs.forgotPasswordForm.validate()){
        this.forgotPassword({
          email:this.email
        }).then((res)=>{
          console.log(res.data);
          if(res.data.message=="Error al enviar correo"){
            this.snackbar={
              show: true,
              text: 'Error al enviar correo'
            };
            this.color="red";
          }else{
            this.snackbar={
              show: true,
              text: 'Correo enviado'
            };
            this.color="success";
          }
        }).catch(()=>{
          this.snackbar={
            show: true,
            text: 'Error al enviar correo'
          };
          this.color="red";
        });
      }
    },
  },//methods
}
</script>