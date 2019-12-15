<template>
<v-content>
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
</v-content>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'AppLayout',
  components: {

  },
  computed:{
    ...mapGetters({
      loggedIn: 'user/loggedIn',
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
  },//methods
};
</script>
