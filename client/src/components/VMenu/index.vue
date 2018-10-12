<template>
  <div class="container menu">
    <router-link to="/" class="menu-item">{{title}}</router-link>
    <router-link v-for="item in items" :key="item.to" :to="item.to" class="menu-item">{{item.title}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'VMenu',
  props: {
    title: String,
    items: Array
  }
};
</script>
<style lang="scss" scoped>
@import '@/style/vars.scss';

.menu {
  display: flex;
  flex-direction: row;
  font-size: 20px;
  height: 50px;
}

.menu-item {
  color: $color-white;
  padding: 15px 15px 0px 15px;
  text-decoration: none;
}

.menu-item:hover {
  color: $color-gray-light;
  cursor: pointer;
}
</style>


