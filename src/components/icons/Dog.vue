<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20.01">
    <title>Dog by Creative Stall from the Noun Project</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          d="M19.7,8.41a29.6,29.6,0,0,0,0-4.4c-.9-1.8-5.9-4.6-6.8-3.9-.1.1-.1.6.1,1.4A10.59,10.59,
          0,0,0,9.9,1a10.59,10.59,0,0,0-3.1.5c.2-.8.2-1.3.1-1.4C6.2-.49,1.2,2.31.3,4a19.77,19.77,0,
          0,0,0,4.4,7.61,7.61,0,0,0-.3,2.1C0,15.81,6.1,20,10,20s10-4.1,10-9.5A7.61,7.61,0,0,0,19.7,
          8.41ZM11,17.91v-2.2A2.21,2.21,0,0,0,12,14c0-.8-.9-1-1.9-1s-1.9.2-1.9,1a2.21,2.21,0,0,0,1,
          1.7v2.2c-2.7-.5-6.2-3.1-6.9-6.2,1.6-1.1,3.2-4.9,4.2-7.8A6.51,6.51,0,0,1,10,3a7.79,7.79,0,
          0,1,3.7.9c.9,3,2.6,6.8,4.2,7.8C17.2,14.81,13.7,17.41,11,17.91Z"
          :fill="color"
        />
        <circle cx="7.1" cy="10.01" r="1" :fill="color" />
        <circle cx="13" cy="10.01" r="1" :fill="color" />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'dogIcon',
  props: {
    color: {
      type: String,
      default: '#575859',
    },
  },
  data() {
    return {};
  },
};
</script>
