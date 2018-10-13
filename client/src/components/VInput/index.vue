<template>
  <div :class="['form-control', className]">
    <label>{{label}}</label>
    <input :name="name" :type="type" :value="value" @input="$emit('input', $event.target.value)">
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
<style lang="scss" scoped>
@import '@/style/vars.scss';

.form-control {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-bottom: $size-3;
  margin-right: $size-2;

  label {
    padding: 0px 0px 5px 3px;
    font-weight: bold;
  }

  input {
    padding: 8px;
    border: 1px solid $color-gray-dark;
    border-radius: 3px;
    font-family: $font;
    font-size: 16px;
    color: $color-gray-dark;
  }

  span {
    padding-top: $size-1;
    font-size: 12px;
    color: $color-danger;
  }
}
</style>
