<template>
  <section class="PetInformation">
    <component
      v-for="field in petFields"
      :key="field.name"
      :is="`${field.component}-form-field`"
      :field="field"
    />
    <div class="ButtonContainer">
      <button @click="goToPreviousSection()">
        <arrow-icon />
        Previous
      </button>
      <Button
        className="is-half"
        @clicked="goToNextSection()"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ArrowIcon from './icons/Arrow.vue';
import Button from './form-fields/Button.vue';
import ImageFormField from './form-fields/Image.vue';
import InputFormField from './form-fields/Input.vue';
import SelectFormField from './form-fields/Select.vue';
import ToggleFormField from './form-fields/Toggle.vue';

export default {
  name: 'PetInformation',
  components: {
    ArrowIcon,
    Button,
    ImageFormField,
    InputFormField,
    SelectFormField,
    ToggleFormField,
  },
  computed: {
    ...mapGetters([
      'petFields',
    ]),
  },
  methods: {
    goToNextSection() {
      this.$emit('goToNextSection');
    },
    goToPreviousSection() {
      // eslint-disable-next-line
      console.log('here');
      this.$emit('goToPreviousSection');
    },
  },
};
</script>

<style scoped>
.PetInformation {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.PetInformation .FormField {
  margin-bottom: 8px;
}

.ButtonContainer {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 43px;
  width: 100%;
}

button {
  background: none;
  border: none;
  color: var(--white);
  cursor: pointer;
  font-weight: bold;
  outline: none;
  padding: 0;
  text-decoration: none;
  text-transform: lowercase;
}
</style>
