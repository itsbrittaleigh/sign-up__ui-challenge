<template>
  <section class="HumanInformation">
    <component
      v-for="field in humanFields"
      :key="field.name"
      :is="`${field.component}-form-field`"
      :field="field"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ImageFormField from './form-fields/Image.vue';
import InputFormField from './form-fields/Input.vue';

export default {
  name: 'HumanInformation',
  components: {
    ImageFormField,
    InputFormField,
  },
  computed: {
    ...mapGetters([
      'humanFields',
    ]),
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
