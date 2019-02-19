<template>
  <div class="FormField FormField--select">
    <label
      :for="field.name"
      class="FormField__label"
    >
      {{ field.label }}
    </label>
    <select
      class="FormField__input"
      v-model="localValue"
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
import FieldMixin from '../../mixins/FieldMixin';

export default {
  name: 'SelectFormField',
  mixins: [
    FieldMixin,
  ],
};
</script>

<style scoped src="../../assets/styles/form-field.css"></style>
