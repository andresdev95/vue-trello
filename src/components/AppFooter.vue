<template>
  <footer>
    <span> programmig with &amp; <a href="//vuejs.org">Vue.js</a> in Ecuador </span>
  </footer>
</template>

<script>
export default{
  name: 'app-footer'
}
</script>

<style lang="scss" scoped>
  footer {
    box-sizing: border-box;
    background-color: #cfd8dd;
    /*bottom: 0;*/
    left: 0;
    padding: 1rem;
    position: absolute;
    width: 100%;

    a{
      text-decoration: none;
      color: #546e74;
    }
  }
</style>
