<template>
  <input :type="type" :class="['btn', className]" :value="text" />
</template>

<script>
export default {
  name: 'VButton',
  props: {
    text: String,
    type: { type: String, default: 'submit' },
    className: String
  }
};
</script>
