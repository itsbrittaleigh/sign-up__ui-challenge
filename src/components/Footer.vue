<template>
  <footer class="Footer">
    <div class="Footer__overlay"></div>
    <div class="Wrapper">
      <p>Pet Friends</p>
      <DogIcon color="#FFFFFF" />
    </div>
  </footer>
</template>

<script>
import DogIcon from './icons/Dog.vue';

export default {
  name: 'Footer',
  components: {
    DogIcon,
  },
};
</script>

<style scoped>
.Footer {
  padding: 12px;
  position: relative;
}

.Footer__overlay {
  background: #363732;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.Wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

p {
  color: var(--white);
  margin: 0 10px 0 0;
  text-transform: lowercase;
}
</style>
