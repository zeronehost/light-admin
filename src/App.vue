<template>
  <router-view></router-view>
</template>
<script>
import LLayout from "./components/layout";
export default {
  components: {
    [LLayout.name]: LLayout
  }
};
</script>
<style lang="less">

</style>
