<template>
  <div
    :class="`
      FormField
      FormField--select
      ${field.className}
      ${localValue ? 'FormField--filled' : ''}
    `"
  >
    <label
      :for="field.name"
      class="FormField__label"
    >
      {{ field.label }}
    </label>
    <select
      class="FormField__input"
      v-model="localValue"
      @change="updateSelectValue(field)"
    >
      <option value=""></option>
      <option
        v-for="{ name, label } in field.options"
        :key="name"
        :value="name"
      >
        {{ label }}
      </option>
    </select>
    <Error
      v-for="(error, index) in errors"
      :key="index"
      error="error"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import FieldMixin from '../../mixins/FieldMixin';

export default {
  name: 'SelectFormField',
  mixins: [
    FieldMixin,
  ],
  methods: {
    ...mapActions([
      'setBreedOptions',
    ]),
    updateSelectValue(field) {
      if (field.name === 'type') {
        this.setBreedOptions(this.localValue);
      }

      this.updateFieldValue({
        name: field.name,
        value: this.localValue,
      });
    },
  },
};
</script>

<style scoped src="../../assets/styles/form-field.css"></style>
