<template>
  <div id="app">
    <div id="nav">
      <h3>HOTEL 110</h3>
      <hr><hr>
      <router-link to="/Home">Home</router-link> |
      <router-link to="/About">About</router-link> |
      <router-link to="/Signin">Sign In</router-link> |
      <router-link to="/Signup">Sign Up</router-link>
      <hr>
      <img alt="Hotel Pic" src="../assets/tablo.jpg">
    </div>
    <router-view/>
  </div>
</template>