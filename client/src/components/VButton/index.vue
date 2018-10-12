<template>
  <input :type="type" :class="className" :value="text">
</template>

<script>
export default {
  name: 'VButton',
  props: {
    text: String,
    color: { type: String, default: 'default' },
    type: { type: String, default: 'submit' }
  },
  computed: {
    className: function() {
      return `btn btn-${this.color}`;
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/style/vars.scss';

.btn {
  padding: 10px;
  border: 0px;
  border-radius: 3px;
  font-family: $font;
  font-size: 1rem;
  font-weight: bold;
  margin-right: $size-2;

  &-default {
    background-color: transparent;
    color: $color-gray-dark;
  }
  &-primary {
    background-color: $color-primary;
    color: $color-white;
  }
  &-danger {
    background-color: $color-danger;
    color: $color-white;
  }
  &-success {
    background-color: $color-success;
    color: $color-white;
  }
}

.btn:hover {
  opacity: 0.85;
  cursor: pointer;
}

.btn:disabled {
  opacity: 0.85;
  cursor: default;
}
</style>
