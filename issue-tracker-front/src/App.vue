<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-toolbar-title class="headline text-uppercase">
          <span>ISSUE</span>
          <span class="font-weight-light">tracker</span>
        </v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
      <v-btn small @click="logout" v-if="loggedIn">Salir</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-snackbar
      @input="updateNotification($event, index)"
      :key="index"
      v-for="(snackbar, index) in allNotifications"
      v-model="snackbar.show"
      :top="top" 
      :color="snackbar.color"
      :right="right"
    >
      {{ snackbar.text }}
      <v-btn
        color="white"
        text
        @click="removeNotification(index)"
      >
        Cerrar
      </v-btn>
    </v-snackbar>

  </v-app>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {

  },
  created(){
    this.checkUserState();
  },//created
  computed:{
    ...mapGetters({
      loggedIn: 'user/loggedIn',
      allNotifications: 'application/notifications',
    })
    //loggedIn(){
    //  return this.$store.getters['user/loggedIn'];
    //}
  },//computed
  data: () => ({
    color:'',
    top:'',
    right:''
  }),//data
  methods:{
    ...mapActions({
      logoutUser: 'user/logoutUser',
      checkUserState: 'user/setLoggedInState',
      removeNotification: 'application/removeNotification',
      addNotification:'application/addNotification'
    }),
    logout(){
      this.logoutUser()
        .then(()=>{
          return this.addNotification({
            show:true,
            text: 'Logout',
            color:'success'
          }).then(()=>{
            this.$router.push({name: 'login'});
          });
        })
      //this.$store.dispatch('user/logoutUser');
      //this.$router.push({name: 'login'});
    },
    updateNotification(show, index){
      if(!show){
        this.removeNotification(index);
      }
    }
  },//methods
};
</script>
