<template>
  <v-modal title="Login">
    <v-form @submit="onSubmit">
      <div class="container grid">
        <v-input name="email" label="E-mail" v-model="form.email" className="col-12" v-validate="'required|email'" :error="errors.first('email')" />
        <v-input name="pwd" label="Password" type="password" v-model="form.pwd" className="col-12" v-validate="'required'" :error="errors.first('pwd')" />
        <div class="col-12">
          <v-button text="Login" className="primary" :disabled="isInvalid" />
        </div>
      </div>
    </v-form>
  </v-modal>
</template>

<script>
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
      console.log(this.form);
    }
  },
  computed: {
    isInvalid() {
      return isFormInvalid(this);
    }
  }
};
</script>
