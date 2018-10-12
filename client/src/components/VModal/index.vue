<template>
  <div class="modal-background">
    <div class="modal">
      <div class="modal-header">{{title}}</div>
      <div class="modal-body">
        <slot/>
      </div>
      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VModal',
  props: {
    title: String
  }
};
</script>
<style lang="scss" scoped>
@import '@/style/vars.scss';

.modal-background {
  position: fixed;
  z-index: 1000;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0px;
  border: 1px solid #888;
  max-width: 90%;
  max-height: 90%;
  width: 600px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  animation-name: animate;
  animation-duration: 0.4s;
}

@keyframes animate {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

.modal-header {
  border-bottom: 1px solid $color-gray-light;
  padding: 15px;
  color: $color-primary;
  font-size: 1.5rem;
}

.modal-body {
  flex: 1;
  padding: 15px;
}

.modal-footer {
  border-top: 1px solid $color-gray-light;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  button:first-child {
    margin-right: 20px;
  }
}
</style>
