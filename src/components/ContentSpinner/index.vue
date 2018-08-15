<template>
  <div class="spinner">
    <i class="fas fa-spinner fa-spin fa-10x" />
  </div>
</template>
<script>
export default {
  name: 'ContentSpinner'
};
</script>

<style lang="scss" scoped>
.spinner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: #cccccc;
  opacity: 0.5;
  color: #ffffff;
}
</style>

