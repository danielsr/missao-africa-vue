<template>
  <v-form @submit="onSubmit">
    <v-modal title="User">
      <div class="container grid">
        <v-input
          name="name"
          label="Nome"
          v-model="form.name"
          class="col-12"
          v-validate="'required'"
          :error="errors.first('name')"
        />
        <v-input
          name="email"
          label="E-mail"
          v-model="form.email"
          class="col-6"
          v-validate="'required|email'"
          :error="errors.first('email')"
        />
        <v-input
          name="pwd"
          label="Password"
          type="password"
          v-model="form.pwd"
          class="col-6"
          v-validate="'required'"
          :error="errors.first('pwd')"
        />
      </div>
      <template slot="footer">
        <v-button text="Enviar" color="primary" :disabled="isInvalid"/>
        <router-link to="/users">
          <v-button text="Cancelar" type="button"/>
        </router-link>
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
  name: 'UserModal',
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
      this.register(this.form);
    },
    ...mapActions(['register'])
  },
  computed: {
    isInvalid() {
      return isFormInvalid(this);
    }
  }
};
</script>
