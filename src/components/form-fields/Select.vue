<template>
  <div class="FormField">
    <label
      :for="field.name"
      class="FormField__label"
    >
      {{ field.label }}
    </label>
    <select
      :name="field.name"
      :id="field.name"
      :value="field.value"
    >
      <option
        v-for="{ value, label } in field.options"
        :key="value"
        :value="value"
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
import FieldMixin from '../../mixins/FieldMixin';

export default {
  name: 'SelectFormField',
  mixins: [
    FieldMixin,
  ],
};
</script>

<style scoped src="../../assets/styles/form-field.css"></style>
