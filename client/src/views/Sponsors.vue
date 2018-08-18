<template>
  <form-tag @submit="onSubmit">
    <h1>Sponsors</h1>
    <div class="container grid">
      <form-input name="name" label="Nome" v-model="form.name" className="col-12" v-validate="'required'" :error="errors.first('name')" />
      <form-input name="email" label="E-mail" v-model="form.email" className="col-6" v-validate="'required|email'" :error="errors.first('email')" />
      <form-input name="pwd" label="Password" type="password" v-model="form.pwd" className="col-6" v-validate="'required'" :error="errors.first('pwd')" />
      <div class="col-12">
        <form-button text="Enviar" className="primary" :disabled="isInvalid" />
      </div>
    </div>
  </form-tag>
</template>
<script>
import { mapActions } from 'vuex';
import FormInput from '@/components/FormInput';
import FormButton from '@/components/FormButton';
import FormTag from '@/components/FormTag';
import { isFormInvalid } from '@/utils/validation';

export default {
  name: 'Sponsors',
  data: () => ({
    form: {}
  }),
  components: {
    FormInput,
    FormButton,
    FormTag
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

