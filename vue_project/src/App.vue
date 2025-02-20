<template>
  <div id="app">
    <!-- {{ message }} -->
    <!-- <element-view></element-view> -->
    <!-- <emp></emp> -->
    <!-- <emp-view></emp-view> -->
    <router-view></router-view>
  </div>

</template>

<script>
// import ElementView from './views/element/ElementView.vue';
// import EmpView from './views/tlias/EmpView.vue'
// import Emp from './views/tlias/EmpView.vue';
export default {
  // components: { ElementView },
  components: {},
  data() {
    return {
      "message":"hello world"
    }
  }
}
</script>

<style></style>
