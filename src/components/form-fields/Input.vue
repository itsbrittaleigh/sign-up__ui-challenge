<template>
  <div :class="`FormField ${field.className} ${localValue ? 'FormField--filled' : ''}`">
    <label
      class="FormField__label"
      :for="field.name"
    >
      {{ field.label }}
    </label>
    <input
      class="FormField__input"
      :type="field.type"
      v-model="localValue"
      @change="updateFieldValue({
        name: field.name,
        value: localValue,
      })"
    />
    <Error
      v-for="(error, index) in errors"
      :key="index"
      error="error"
    />
  </div>
</template>

<script>
import FieldMixin from '../../mixins/FieldMixin';

export default {
  name: 'InputFormField',
  mixins: [
    FieldMixin,
  ],
};
</script>

<style scoped src="../../assets/styles/form-field.css"></style>
