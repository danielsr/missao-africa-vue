<template>
  <div :class="['form-control', className]">
    <label>{{label}}</label>
    <input :name="name" :type="type" :value="value" @input="$emit('input', $event.target.value)" />
    <span v-if="error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'VInput',
  props: {
    label: String,
    name: String,
    value: String,
    error: String,
    type: { type: String, default: 'text' },
    className: String
  }
};
</script>
