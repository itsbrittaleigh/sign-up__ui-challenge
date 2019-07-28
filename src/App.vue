<template>
  <div
    class="App"
    id="app"
  >
    <main>
      <Navigation :active-section="activeSection" />
      <div class="Wrapper">
        <HumanInformation
          v-if="activeSection === 'humanInformation'"
          @goToNextSection="setActiveSection(sections[1])"
        />
        <PetInformation
          v-if="activeSection === 'petInformation'"
          @goToNextSection="setActiveSection(sections[2])"
          @goToPreviousSection="setActiveSection(sections[0])"
        />
        <Review
          v-if="activeSection === 'review'"
          @goToNextSection="setActiveSection(sections[3])"
          @goToPreviousSection="setActiveSection(sections[1])"
        />
        <Confirmation v-if="activeSection === 'confirmation'" />
      </div>
    </main>
    <Footer />
    <div class="Overlay">
      <img
        v-if="activeSection === 'humanInformation'"
        class="Overlay__image"
        src="./assets/images/white-dog.jpg"
        alt="Long coated white dog"
      />
      <img
        v-if="activeSection === 'petInformation'"
        class="Overlay__image"
        src="./assets/images/calico-cat.jpg"
        alt="Calico cat standing on grass field"
      />
      <img
        v-if="activeSection === 'review'"
        class="Overlay__image"
        src="./assets/images/cat-dog.jpg"
        alt="White dog and gray cat hugging each other on grass"
      />
    </div>
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
@import url('./assets/styles/normalize.css');
@import url('./assets/styles/variables.css');
@import url('./assets/styles/typography.css');

.App {
  background: var(--blue-gradient);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  position: relative;
}

.Overlay {
  /* TODO: This is adding an extra pixel at the end -- investigate */
  height: 100%;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
}

.Overlay__image {
  height: 100%;
  object-fit: cover;
  opacity: 0.07;
  width: 100%;
}

.Wrapper {
  margin: 0 auto;
  width: calc(100% - 80px);
}

main {
  flex: 1;
  margin-bottom: 70px;
}
</style>
