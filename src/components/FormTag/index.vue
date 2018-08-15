<template>
  <form @submit.prevent="$emit('submit')">
    <slot />
  </form>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

export default {
  name: 'FormTag'
};
</script>
