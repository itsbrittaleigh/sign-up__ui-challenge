<template>
  <div
    class="App"
    id="app"
  >
    <Navigation />
    <div class="Wrapper">
      <HumanInformation />
      <PetInformation />
      <Review />
      <Confirmation />
    </div>
    <Footer />
  </div>
</template>

<script>
import Confirmation from './components/Confirmation.vue';
import Footer from './components/Footer.vue';
import HumanInformation from './components/HumanInformation.vue';
import Navigation from './components/Navigation.vue';
import PetInformation from './components/PetInformation.vue';
import Review from './components/Review.vue';

export default {
  name: 'App',
  components: {
    Confirmation,
    Footer,
    HumanInformation,
    Navigation,
    PetInformation,
    Review,
  },
};
</script>

<style>
@import url('./assets/normalize.css');
@import url('./assets/variables.css');
@import url('./assets/typography.css');

.App {
  background: var(--blue-gradient);
  height: 100vh;
}

.Wrapper {
  width: calc(100% - 80px);
  margin: 0 auto;
}
</style>
