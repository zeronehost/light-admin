<template>
  <a-layout class="l-layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" :class="{'collapsed': collapsed}">
        <p class="l-layout__title" @click="goHome">
          <span>Light</span>
        </p>
        <a-icon :type="collapsed?'menu-unfold':'menu-fold'" style="width: 1rem;cursor: pointer;" @click="toggleCollapsed" />
      </div>
      <!-- <a-menu mode="inline" theme="dark" :inline-collapsed="collapsed">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>
      </a-menu> -->
      <l-menu :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="l-header" style="background: #fff">
        <div></div>
        <a-icon type="logout" :style="{fontSize: '1.5rem'}" @click="logout" />
      </a-layout-header>
      <a-layout-content><router-view/></a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import LMenu from "./menu";
export default {
  name: "l-layout",
  components: {
    [LMenu.name]: LMenu
  },
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    goHome () {
      this.$router.replace({path: "/"});
    },
    logout() {
      this.$store.dispatch("user/logout");
      this.$router.push({name: "login"});
    }
  }
};
</script>
<style lang="less">
.l-layout {
  height: 100vh;
  .logo {
    line-height: 40px;
    height: 40px;
    padding: 0 16px 0 24px;
    display: flex;
    align-items: center;
    transition: all 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    &.collapsed{
      padding: 0 32px;
      p {
        width: 0;
      }
      .anticon {
        font-size: 16px;
      }
    }
    p {
      flex: 1;
      overflow: hidden;
    }
    .anticon {
      color: rgba(255, 255, 255, .65);
      &:hover {
        color: #fff;
      }
    }
  }
  .l-layout__title {
    height: 100%;
    margin: 0;
    background-image: url("~@/assets/logo.png");
    background-position: left center;
    background-size: 2rem;
    background-repeat: no-repeat;
    span {
      margin-left: 3rem;
      color: #fff;
    }
  }
  .l-header{
    display: grid;
    grid-template-columns: auto 3rem;
    grid-template-rows: 100%;
    align-items: center;
  }
}
</style>