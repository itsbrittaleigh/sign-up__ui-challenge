<template>
  <button
    class="Button"
    :type="type"
  >
    {{ text }}
  </button>
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
</style>
