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
      :name="field.name"
      :id="field.name"
      v-model="localValue"
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

<style scoped src="../../assets/form-field.css"></style>
