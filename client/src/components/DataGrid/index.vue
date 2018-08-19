<template>
  <table class="table fill">
    <thead>
      <tr>
        <th v-for="field in model" :key="field.name">{{field.label}}</th>
        <th v-if="editRoute" class="text-center">Editar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td v-for="field in model" :key="field.name">{{item[field.name]}}</td>
        <td v-if="editRoute" class="text-center">
          <router-link :to="editRoute">
            <i class="fas fa-edit" />
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'DataGrid',
  props: {
    items: Array,
    model: Array,
    editRoute: String
  }
};
</script>

<style>
</style>
