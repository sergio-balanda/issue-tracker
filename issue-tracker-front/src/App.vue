<template>
  <v-app>

    <router-view></router-view>

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
    this.checkUserState().then(()=>{
      if(this.loggedIn){
        this.me();
      }
    });
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
      checkUserState: 'user/setLoggedInState',
      removeNotification: 'application/removeNotification',
      addNotification:'application/addNotification',
      me: 'user/me'
    }),

    updateNotification(show, index){
      if(!show){
        this.removeNotification(index);
      }
    }
  },//methods
};
</script>
