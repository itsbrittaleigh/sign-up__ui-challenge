<template>
  <nav class="Navigation">
    <div class="Wrapper">
      <ul class="Navigation__list">
        <li class="Navigation__list-item">
          <PawPrintIcon
            class-name="Navigation__list-item-icon"
            color="#FFFFFF"
          />
          <span class="Navigation__list-item-content">Human information</span>
        </li>
        <li class="Navigation__list-item">
          <PawPrintIcon
            class-name="Navigation__list-item-icon"
            color="#FFFFFF"
          />
          <span class="Navigation__list-item-content">Pet information</span>
        </li>
        <li class="Navigation__list-item">
          <PawPrintIcon
            class-name="Navigation__list-item-icon"
            color="#FFFFFF"
          />
          <span class="Navigation__list-item-content">Review</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import PawPrintIcon from './icons/PawPrint.vue';

export default {
  name: 'Navigation',
  components: {
    PawPrintIcon,
  },
};
</script>

<style>
.Navigation__list {
  margin: 0;
  padding: 30px 0 60px;
  list-style-type: none;
}

.Navigation__list-item {
  display: flex;
  align-items: center;
  margin-bottom: 45px;
  text-transform: lowercase;
}

.Navigation__list-item:last-of-type {
  margin-bottom: 0;
}

.Navigation__list-item-icon {
  width: 25px;
  transform: rotate(-20deg);
}

.Navigation__list-item-content {
  color: var(--white);
  margin-left: 15px;
}
</style>
