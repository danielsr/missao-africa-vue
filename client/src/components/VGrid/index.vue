<template>
  <table>
    <thead>
      <tr>
        <th v-for="field in model" :key="field.name">{{field.label}}</th>
        <th v-if="editRoute" class="text-center">Editar</th>
        <th v-if="deleteRoute" class="text-center">Excluir</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td v-for="field in model" :key="field.name">{{item[field.name]}}</td>
        <td v-if="editRoute" class="text-center">
          <router-link :to="editRoute">
            <v-icon icon="edit"/>
          </router-link>
        </td>
        <td v-if="deleteRoute" class="text-center">
          <router-link :to="deleteRoute">
            <v-icon icon="trash"/>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import VIcon from '@/components/VIcon';

export default {
  name: 'VGrid',
  props: {
    items: Array,
    model: Array,
    editRoute: String,
    deleteRoute: String
  },
  components: {
    VIcon
  }
};
</script>
<style lang="scss" scoped>
@import '@/style/vars.scss';

table {
  border-spacing: 0px;
  width: 100%;

  th,
  td {
    padding: 7px;
    text-align: left;
  }

  thead th {
    border-bottom: 1px solid $color-gray-dark;
  }

  tbody tr:hover {
    transition: 0.3s;
    background-color: $color-gray !important;
  }

  tbody tr:nth-child(odd) {
    background-color: $color-gray-light;
  }
}
</style>

