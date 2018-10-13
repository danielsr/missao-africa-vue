<template>
  <i :class="className"/>
</template>

<script>
export default {
  name: 'VIcon',
  props: {
    icon: String
  },
  computed: {
    className: function() {
      return `fas fa-${this.icon}`;
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/style/vars.scss';

i {
  color: $color-gray-dark;
}
</style>
