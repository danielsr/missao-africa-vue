<template>
  <v-form @submit="onSubmit">
    <v-modal title="Login">
      <div class="container grid">
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
      </div>
      <template slot="footer">
        <v-button text="Login" class="primary" :disabled="isInvalid"/>
        <span class="label label-danger" v-if="msg">{{msg}}</span>
      </template>
    </v-modal>
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
