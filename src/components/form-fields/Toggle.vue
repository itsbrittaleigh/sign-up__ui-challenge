<template>
  <div
    :class="`
      FormField
      ${field.className}
      ${localValue ? 'FormField--filled' : ''}
      ${localValue === field.options[1].value ? 'FormField--checked' : ''}
    `"
    @click="toggle()"
  >
    <legend class="FormField__label">{{ field.label }}</legend>
    <span class="FormField__input FormField__input--toggle">
      <span class="FormField__option--toggle">
        <label
          class="FormField__label--toggle"
          :for="field.options[0].value"
        >
          {{ field.options[0].label }}
        </label>
        <input
          type="radio"
          :checked="localValue === field.options[0].value"
          :id="field.options[0].value"
          :value="field.options[0].value"
          v-model="field.name"
        />
      </span>
      <span class="FormField__option--toggle">
        <label
          class="FormField__label--toggle"
          :for="field.options[1].value"
        >
          {{ field.options[1].label }}
        </label>
        <input
          type="radio"
          :checked="localValue === field.options[1].value"
          :id="field.options[1].value"
          :value="field.options[1].value"
          v-model="field.name"
        />
      </span>
    </span>
  </div>
</template>

<script>
import FieldMixin from '../../mixins/FieldMixin';

export default {
  name: 'ToggleFormField',
  mixins: [
    FieldMixin,
  ],
  methods: {
    toggle() {
      if (this.localValue === this.field.options[0].value) {
        this.localValue = this.field.options[1].value;
      } else {
        this.localValue = this.field.options[0].value;
      }
    },
  },
};
</script>

<style scoped src="../../assets/styles/form-field.css"></style>
<style scoped>
.FormField__input--toggle {
  display: flex;
  padding-left: 0;
  padding-right: 0;
  position: relative;
}

.FormField__input--toggle:after {
  background: var(--pink);
  border-radius: 5px;
  content: '';
  height: calc(100% - 8px);
  left: 4px;
  position: absolute;
  opacity: 0.7;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.3s ease-in-out;
  width: calc(50% - 4px);
  z-index: 1;
}

.FormField--checked .FormField__input--toggle:after {
  transform: translate(100%, -50%);
}

.FormField .FormField__option--toggle:last-of-type .FormField__label--toggle,
.FormField.FormField--checked .FormField__option--toggle:first-of-type .FormField__label--toggle {
  color: var(--dark-gray);
}

.FormField .FormField__option--toggle:first-of-type .FormField__label--toggle,
.FormField--checked .FormField__option--toggle:last-of-type .FormField__label--toggle {
  color: var(--white);
}

.FormField__input--toggle input {
  display: none;
  visibility: hidden;
}

.FormField__label--toggle {
  position: relative;
  transition: 0.3s color 0.1s linear;
  z-index: 2;
}

.FormField__option--toggle {
  display: block;
  text-align: center;
  width: 50%;
}
</style>
