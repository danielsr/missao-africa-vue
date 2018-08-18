<template>
  <input :type="type" :class="['btn', className]" :value="text" />
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    text: String,
    type: { type: String, default: 'submit' },
    className: String
  }
};
</script>
