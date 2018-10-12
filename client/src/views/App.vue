<template>
  <div class="layout">
    <div class="header">
      <v-menu title="Missão África" :items="menuItems"/>
    </div>
    <div class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      <div class="container text-center pt-3">Missão África</div>
    </div>
    <v-spinner v-if="isLoading"/>
  </div>
</template>

<script>
import VMenu from '@/components/VMenu';
import VSpinner from '@/components/VSpinner';

export default {
  name: 'App',
  data: () => ({
    menuItems: [{ to: 'users', title: 'Users' }]
  }),
  components: {
    VMenu,
    VSpinner
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/style/vars.scss';

.layout {
  display: grid;
  grid-template-rows: 50px auto 70px;
  width: 100%;
  height: 100%;
}

.header {
  grid-row: 1 / 2;
  background: $color-gray-dark;
}

.main {
  grid-row: 2 / 3;
}

.footer {
  grid-row: 3 / 4;
  background-color: $color-gray;
}
</style>

