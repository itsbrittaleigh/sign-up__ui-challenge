<template>
  <button
    :class="`Button ${className}`"
    :type="type"
    @click="emitClicked()"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    className: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: 'Next',
    },
    type: {
      type: String,
      default: 'button',
    },
  },
  methods: {
    emitClicked() {
      this.$emit('clicked');
    },
  },
};
</script>

<style scoped>
.Button {
  background: var(--pink);
  border: 0;
  border-radius: 5px;
  color: var(--white);
  font-weight: bold;
  outline: 0;
  padding: 12px 20px;
  text-transform: lowercase;
  transition: background 0.3s ease-in-out;
  width: 100%;
}

.Button:hover {
  background: var(--dark-pink);
}

.Button.is-half {
  width: 138px;
}
</style>
