<template>
  <div
    class="App"
    id="app"
  >
    <Navigation :active-section="activeSection" />
    <div class="Wrapper">
      <HumanInformation
        v-if="activeSection === 'humanInformation'"
        @goToNextSection="setActiveSection(sections[1])"
      />
      <PetInformation
        v-if="activeSection === 'petInformation'"
        @goToNextSection="setActiveSection(sections[2])"
      />
      <Review
        v-if="activeSection === 'review'"
        @goToNextSection="setActiveSection(sections[3])"
      />
      <Confirmation v-if="activeSection === 'confirmation'" />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
  computed: {
    ...mapGetters([
      'sections',
      'activeSection',
    ]),
  },
  methods: {
    ...mapActions([
      'setActiveSection',
    ]),
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
