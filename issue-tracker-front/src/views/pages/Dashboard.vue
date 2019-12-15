<template>
  <div class="dashboard">
    <div class="container mt-4">
      <div class="row">
        <div class="col">
            <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('user/me');
  },
};
</script>

<style>
</style>