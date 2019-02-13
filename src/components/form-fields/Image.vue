<template>
  <div class="FormField">
    <label :for="field.name">{{ field.label }}</label>
    <input
      type="file"
      :name="field.name"
      :id="field.name"
      :value="field.value"
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
  name: 'ImageFormField',
  mixins: [
    FieldMixin,
  ],
};
</script>

<style>
@import '../../assets/form-field.css';
</style>
