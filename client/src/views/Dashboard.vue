<template>
  <div class="container grid">
    <div class="col-12 pt-3 pb-3">
      <data-grid :model="model" :items="users" editRoute="/sponsors/55" />
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import DataGrid from '@/components/DataGrid';

export default {
  name: 'Dashboard',
  mounted: function() {
    this.loadUsers();
  },
  data: () => ({
    model: [{ name: 'name', label: 'Nome' }, { name: 'email', label: 'E-mail' }]
  }),
  components: {
    DataGrid
  },
  methods: {
    ...mapActions(['loadUsers'])
  },
  computed: {
    ...mapState(['users'])
  }
};
</script>

