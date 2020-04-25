<template>
  <div id="app">
    <div id="nav">
      <Header />
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
#nav {
  padding: 10px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #dddddd;
  margin: 15px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
