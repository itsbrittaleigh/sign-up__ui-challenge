<template>
  <svg
    :class="className"
    width="6"
    height="9"
    viewBox="0 0 6 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      :d="`M0.345346 3.25326C-0.115115 3.65203 -0.115115 4.36635 0.345346 4.76512L3.81782
        7.77237C4.46546 8.33325 5.47247 7.87319 5.47247 7.01644V6.60727L3.34535 4.76512C2.88488
        4.36635 2.88488 3.65203 3.34535 3.25326L5.47247 1.41111V1.00194C5.47247 0.145187 4.46547
        -0.314866 3.81782 0.24601L0.345346 3.25326Z`"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'ArrowIcon',
  props: {
    className: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#FFFFFF',
    },
  },
  data() {
    return {};
  },
};
</script>
