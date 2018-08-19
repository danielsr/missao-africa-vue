<template>
  <transition name="fade">
    <div class="modal-background">
      <div class="modal">
        <div class="modal-body">
          <h2>{{title}}</h2>
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'ModalDefault',
  props: {
    title: String
  }
};
</script>
<style lang="scss" scoped>
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background: rgba(204, 204, 204, 0.9);
}

.modal {
  max-width: 100%;
  max-height: 100%;
  z-index: 100;
  background: #fff;
  box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
  border-radius: 5px;
  padding: 20px;
  width: 600px;
  height: 500px;
}

.modal-body {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
