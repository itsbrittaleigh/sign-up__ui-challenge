<template>
  <div :class="`FormField ${field.className} ${localValue ? 'FormField--filled' : ''}`">
    <label
      class="FormField__label"
      :for="field.name"
    >
      {{ field.label }}
    </label>
  </div>
</template>

<script>
import FieldMixin from '../../mixins/FieldMixin';

export default {
  name: 'EmailFormField',
  mixins: [
    FieldMixin,
  ],
};
</script>

<style scoped src="../../assets/form-field.css"></style>
