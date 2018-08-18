<template>
  <div class="form-control">
    <label>{{label}}</label>
    <input :name="name" type="text" :value="value" @input="$emit('input', $event.target.value)" />
    <span v-if="error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    label: String,
    name: String,
    value: String,
    error: String
  }
};
</script>
