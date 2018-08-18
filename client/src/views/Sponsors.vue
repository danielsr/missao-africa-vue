<template>
  <form-tag @submit="onSubmit">
    <h1>Sponsors</h1>
    <div class="container grid">
      <div class="col-6">
        <form-input name="nome" label="Nome" v-model="form.nome" v-validate="'required'" :error="errors.first('nome')" />
      </div>
      <div class="col-6">
        <form-input name="email" label="E-mail" v-model="form.email" v-validate="'required|email'" :error="errors.first('email')" />
      </div>
      <div class="col-6">
        <form-button text="Enviar" :disabled="isInvalid" />
      </div>
    </div>
  </form-tag>
</template>
<script>
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
      console.log(this.form);
      this.$store.commit('setLoading', true);
    }
  },
  computed: {
    isInvalid() {
      return isFormInvalid(this);
    }
  }
};
</script>

