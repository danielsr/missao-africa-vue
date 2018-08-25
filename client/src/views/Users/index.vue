<template>
  <div class="container grid">
    <h1>Users</h1>
    <div class="col-12 pt-3 pb-3">
      <v-grid :model="model" :items="users" editRoute="/users/55" />
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import VGrid from '@/components/VGrid';

export default {
  name: 'Users',
  mounted: function() {
    this.loadUsers();
  },
  data: () => ({
    model: [{ name: 'name', label: 'Nome' }, { name: 'email', label: 'E-mail' }]
  }),
  components: {
    VGrid
  },
  methods: {
    ...mapActions(['loadUsers'])
  },
  computed: {
    ...mapState(['users'])
  }
};
</script>

