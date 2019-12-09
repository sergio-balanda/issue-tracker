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
      loggedIn: 'user/loggedIn'
    })
    //loggedIn(){
    //  return this.$store.getters['user/loggedIn'];
    //}
  },//computed
  data: () => ({
    
  }),//data
  methods:{
    ...mapActions({
      logoutUser: 'user/logoutUser',
      checkUserState: 'user/setLoggedInState',
    }),
    logout(){
      this.logoutUser()
        .then(()=>{
          this.$router.push({name: 'login'});
        })
      //this.$store.dispatch('user/logoutUser');
      //this.$router.push({name: 'login'});
    }
  },//logout
};
</script>
