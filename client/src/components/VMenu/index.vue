<template>
  <div class="container menu">
    <router-link to="/" class="menu-item">{{title}}</router-link>
    <router-link v-for="item in items" :key="item.to" :to="item.to" class="menu-item">
      {{item.title}}
    </router-link>
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

