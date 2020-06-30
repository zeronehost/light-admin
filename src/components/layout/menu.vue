<template>
  <a-menu mode="inline" theme="dark" :inline-collapsed="collapsed" @select="goto" :selected-keys="selected">
    <a-menu-item key="/index">
      <a-icon type="pie-chart" />
      <span>仪表盘</span>
    </a-menu-item>
    <a-sub-menu key="/blog">
      <span slot="title"><a-icon type="book" /><span>博客管理</span></span>
      <a-menu-item key="/blog/index">
        <a-icon type="gold" />
        <span>博客</span>
      </a-menu-item>
      <a-menu-item key="/blog/add">
        <a-icon type="file-add" />
        <span>添加文章</span>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script>
export default {
  name: "l-menu",
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    selected() {
      const route = this.$route;
      return [route.path];
    }
  },
  methods: {
    goto({key}) {
      this.$router.push({path: key});
    }
  }
};
</script>