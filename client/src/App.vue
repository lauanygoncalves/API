<script setup>
import RegisterUser from './components/registerUser.vue';
import GetAllUser from './components/getAllUser.vue';
import PutUser from './components/putUser.vue';
import DeleteUser from './components/deleteUser.vue';

</script>

<template>
  <RegisterUser> </RegisterUser>
  <GetAllUser> </GetAllUser>
  <PutUser> </PutUser>
  <DeleteUser> </DeleteUser>

</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
