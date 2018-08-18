<template>
  <div class="layout">
    <div class="header">
      <nav-bar title="Missão África" :items="menuItems" />
    </div>
    <div class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      <div class="container text-center pt-3">Missão África</div>
    </div>
    <content-spinner v-if="isLoading" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import ContentSpinner from '@/components/ContentSpinner';

export default {
  name: 'App',
  data: () => ({
    menuItems: [{ to: 'sponsors', title: 'Sponsors' }]
  }),
  components: {
    NavBar,
    ContentSpinner
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>
