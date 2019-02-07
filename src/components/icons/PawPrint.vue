<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.05 90.83">
    <title>dog paw by Kimberlin Ferreira Rochedo from the Noun Project</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          d="M19,78.71S10.7,50.31,46.58,44c0,0,30.71-4.07,30.49,34.73,0,0-2.22,12.66-14.54,5.9,0,
          0-7.11-9.67-17.06-6.88a25.74,25.74,0,0,0-12.42,10.7S23.37,98.08,19,78.71Z"
          :fill="color"
        />
        <path
          d="M45.27,16.5c-1.31,9.07-3.52,17.17-10.44,18S21.37,28.76,20.22,19.66s3.52-17.18,
          10.44-18S46.9,5.23,45.27,16.5Z"
          :fill="color"
        />
        <path
          d="M76,18c0,10-5.87,18-13.1,18S50.17,26.91,49.74,18C49.26,8.09,55.61,0,62.85,0S76,8.08,
          76,18Z"
          :fill="color"
        />
        <path
          d="M96.05,41c0,7.77-5.31,11.78-11.34,14.08C78.86,57.27,73.38,48.74,73.38,41A13.83,13.83,
          0,0,1,84.71,26.88C91.46,25.63,96.05,33.19,96.05,41Z"
          :fill="color"
        />
        <path
          d="M0,41c0,7.77,5.3,11.78,11.33,14.08C17.18,57.27,22.67,48.74,22.67,41A13.83,13.83,0,0,0,
          11.33,26.88C4.59,25.63,0,33.19,0,41Z"
          :fill="color"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'pawPrintIcon',
  props: {
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
