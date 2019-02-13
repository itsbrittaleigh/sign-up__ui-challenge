<template>
  <div class="FormField">
    <label :for="name">{{ field.label }}</label>
    <select
      type="email"
      :name="field.name"
      :id="field.name"
      :value="field.value"
    >
      <option :value="field.option.value">{{ field.option.label }}</option>
    </select>
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
  name: 'SelectFormField',
  mixins: [
    FieldMixin,
  ],
};
</script>
