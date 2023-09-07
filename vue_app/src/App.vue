<template>
  <div>
    <h1>Vue Component</h1>
    <ReactApp/>
  </div>
</template>
<script>
import ReactApp from './ReactApp.vue';
  export default{
    components: {
      ReactApp
    }
  }
</script>