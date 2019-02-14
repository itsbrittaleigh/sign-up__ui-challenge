<template>
  <div class="FormField">
    <label
      class="FormField__label"
      :for="field.name"
    >
      Add photo
      <input
        class="FormField__input"
        type="file"
        :name="field.name"
        :id="field.name"
        :value="field.value"
      />
    </label>
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

<style scoped>
.FormField {
  margin-top: 20px;
  position: relative;
  width: 100%;
}

.FormField .FormField__label {
  color: var(--white);
  display: inline-block;
  font-weight: bold;
  margin-left: 50%;
  position: relative;
  text-transform: lowercase;
  transform: translateX(-50%);
}

.FormField .FormField__label:after {
  content: '';
  height: 2px;
  width: 0;
  background: var(--white);
  transition: width 0.3s ease-in-out;
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
}

.FormField .FormField__label:hover:after {
  width: 100%;
}

.FormField .FormField__input {
  display: none;
  visibility: hidden;
}
</style>
