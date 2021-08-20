<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/lendering">Lendering</router-link> |
    <router-link to="/formbasic">Formbasic</router-link> |
    <router-link to="/classbinding">Classbinding</router-link> |
    <router-link to="/event">Event</router-link> |
    <router-link to="/compute_watch">Compute_Watch</router-link> |
    <router-link to="/severdata">SeverData</router-link> |
    <router-link to="/componentexample">ComponentExample</router-link> |
    <router-link to="/customdirective">Customdirective</router-link> |
    <router-link to="/storeaccess">storeAccess</router-link> |
    <router-link to="/kakaologin">kakaologin</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
