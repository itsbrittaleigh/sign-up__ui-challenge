<template>
  <nav class="Navigation">
    <div class="Wrapper">
      <ul class="Navigation__list">
        <li
          :class="
            `Navigation__list-item
            ${activeSection === 'humanInformation' ? 'Navigation__list-item--active' : ''}`"
        >
          <PawPrintIcon
            class-name="Navigation__list-item-icon"
            color="#FFFFFF"
          />
          <span class="Navigation__list-item-content">Human information</span>
        </li>
        <span class="Navigation__dot"></span>
        <span class="Navigation__dot"></span>
        <li
          :class="
            `Navigation__list-item
            ${activeSection === 'petInformation' ? 'Navigation__list-item--active' : ''}`"
        >
          <PawPrintIcon
            class-name="Navigation__list-item-icon"
            color="#FFFFFF"
          />
          <span class="Navigation__list-item-content">Pet information</span>
        </li>
        <span class="Navigation__dot"></span>
        <span class="Navigation__dot"></span>
        <li
          :class="
            `Navigation__list-item
            ${activeSection === 'review' ? 'Navigation__list-item--active' : ''}`"
        >
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
  props: {
    activeSection: {
      type: String,
      required: true,
    },
  },
  components: {
    PawPrintIcon,
  },
};
</script>

<style>
.Navigation__list {
  margin: 0;
  padding: 30px 0;
  list-style-type: none;
}

.Navigation__list-item {
  align-items: center;
  display: flex;
  margin: 13px 0;
  opacity: 0.5;
  text-transform: lowercase;
}

.Navigation__list-item--active {
  opacity: 1;
}

.Navigation__list-item:first-of-type {
  margin-top: 0;
}

.Navigation__list-item-icon {
  width: 25px;
  transform: rotate(-20deg);
}

.Navigation__list-item-content {
  color: var(--white);
  margin-left: 15px;
}

.Navigation__dot {
  background: var(--white);
  border-radius: 5px;
  display: block;
  height: 5px;
  margin: 8px 0 8px 13px;;
  opacity: 0.5;
  width: 5px;
}
</style>
