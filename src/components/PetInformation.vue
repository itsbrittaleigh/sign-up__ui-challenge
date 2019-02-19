<template>
  <section class="PetInformation">
    <component
      v-for="field in petFields"
      :key="field.name"
      :is="`${field.component}-form-field`"
      :field="field"
    />
    <Button
      :style="{ marginTop: '43px' }"
      @clicked="goToNextSection()"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Button from './form-fields/Button.vue';
import ImageFormField from './form-fields/Image.vue';
import InputFormField from './form-fields/Input.vue';
import SelectFormField from './form-fields/Select.vue';
import ToggleFormField from './form-fields/Toggle.vue';

export default {
  name: 'PetInformation',
  components: {
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
  },
};
</script>

<style>
.HumanInformation {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.HumanInformation .FormField {
  margin-bottom: 8px;
}
</style>
