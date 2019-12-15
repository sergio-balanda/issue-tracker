<template>
  <div class="dashboard">
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <v-container class="fill-height mt-4" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                  <v-toolbar color="primary" dark flat>
                    <v-toolbar-title>Profile</v-toolbar-title>
                    <v-spacer />
                  </v-toolbar>
                  <v-card-text>
                    <p><strong>{{ userDetails.data.name }}</strong></p>
                    <p><strong>{{ userDetails.data.email }}</strong></p>
                    <p><strong>{{ userDetails.data.created_at }}</strong></p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      userDetails:"user/userDetails"
    })
  }
};
</script>

<style>
</style>