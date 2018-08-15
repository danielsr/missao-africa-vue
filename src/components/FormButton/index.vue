<template>
  <input type="submit" class="btn primary" :value="text" />
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    text: String
  }
};
</script>
