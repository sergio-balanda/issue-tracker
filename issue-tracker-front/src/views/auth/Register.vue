<template>
  <div class="register">
    <v-container class="fill-height mt-4" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Registro</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>

              <v-form  ref="registerForm" :value="formValid">
                <v-text-field label="Nombre" name="name" type="email" v-model="newUser.name"/>
                <v-text-field label="Email" name="email" type="text" v-model="newUser.email"/>
                <v-text-field id="password" label="Password" name="password" type="password" v-model="newUser.password"/>
              </v-form>

            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="registerUser">Registrarse</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import axios from 'axios';
import {mapActions} from 'vuex';
export default {
  data: function() {
    return{
      formValid: false,
      newUser:{
        name:'',
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
      addNotification: 'application/addNotification'
    }),

    registerUser(){
      if(this.$refs.registerForm.validate()){

        axios.post('http://issue-tracker-backend.test/api/register',this.newUser)
          .then((res)=>{
            if(res.data && res.data.success){
              this.addNotification({
                show:true,
                text: 'Usuario creado',
                color:'success'
              }).then(()=>{
                this.color='success';
                this.$router.push({
                  name:'login'
                });
                //console.log(res);
              })
            }
          }).catch(()=>{

            this.addNotification({
              show: true,
              text: 'Error al registrar!!!',
              color:'error'
            });
          });
        //console.log({event, $form: this.$refs.registerForm.validate()});
      }
    }
  }//methods
}
</script>