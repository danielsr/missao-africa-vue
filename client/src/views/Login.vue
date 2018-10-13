<template>
  <v-form @submit="onSubmit">
    <div class="login-background">
      <img src="https://www.missaoafrica.org.br/wp-content/uploads/2016/12/logo-e1481906450131.png">
      <div class="login grid">
        <v-input
          name="email"
          label="E-mail"
          v-model="form.email"
          class="col-12"
          v-validate="'required|email'"
          :error="errors.first('email')"
        />
        <v-input
          name="pwd"
          label="Password"
          type="password"
          v-model="form.pwd"
          class="col-12"
          v-validate="'required'"
          :error="errors.first('pwd')"
        />
        <div class="col-12">
          <v-button text="Login" color="primary" :disabled="isInvalid"/>
        </div>
      </div>
    </div>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';
import VInput from '@/components/VInput';
import VButton from '@/components/VButton';
import VForm from '@/components/VForm';
import VModal from '@/components/VModal';
import { isFormInvalid } from '@/utils/validation';

export default {
  name: 'Login',
  data: () => ({
    form: {}
  }),
  components: {
    VInput,
    VButton,
    VForm,
    VModal
  },
  methods: {
    onSubmit() {
      this.login(this.form);
    },
    ...mapActions(['login'])
  },
  computed: {
    isInvalid() {
      return isFormInvalid(this);
    },
    msg() {
      return this.$store.state.msgs.login;
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/style/vars.scss';

.login-background {
  position: absolute;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: $color-gray-dark;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login {
  background-color: $color-white;
  padding: 20px;
  width: 300px;
  border-radius: 5px;
  margin-top: 20px;
}
</style>
