<template>
  <button :type="type">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'Next',
    },
    type: {
      type: String,
      default: 'button',
    },
  },
};
</script>
