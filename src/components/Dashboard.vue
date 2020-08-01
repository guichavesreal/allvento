<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <router-link to="/products">Products</router-link>
    </p>
    <p>
      <router-link to="/tasks">Tasks</router-link>
    </p>
    <p>
      <router-link to="/customers">Customers</router-link>
    </p>
  <router-view></router-view>
  </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
export default {
  name: 'Dashboard',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
