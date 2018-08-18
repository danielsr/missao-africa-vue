<template>
  <table class="table fill">
    <thead>
      <tr>
        <th v-for="field in model" :key="field.name">{{field.label}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td v-for="field in model" :key="field.name">{{item[field.name]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'DataGrid',
  props: {
    items: Array,
    model: Array
  }
};
</script>

<style>
</style>
