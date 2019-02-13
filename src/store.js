import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    humanFields: [
      {
        label: 'First name',
        value: '',
        type: 'text',
        component: 'input',
        className: 'is-half',
        validation: [
          'required',
        ],
      },
      {
        label: 'Last name',
        value: '',
        type: 'text',
        component: 'input',
        className: 'is-half',
        validation: [
          'required',
        ],
      },
      {
        label: 'Email address',
        value: '',
        type: 'email',
        component: 'input',
        className: '',
        validation: [
          'required',
          'email',
        ],
      },
      {
        label: 'Password',
        value: '',
        type: 'password',
        component: 'input',
        className: '',
        validation: [
          'required',
          'match',
        ],
      },
      {
        label: 'Photo',
        value: '',
        type: 'image',
        component: 'image',
        className: '',
      },
    ],
    petFields: [
      {
        label: 'Gender',
        value: '',
        type: 'toggle',
        component: 'toggle',
        className: '',
        validation: [
          'required',
        ],
      },
      {
        label: 'Type',
        value: '',
        type: 'select',
        component: 'select',
        className: '',
        validation: [
          'required',
        ],
      },
      {
        label: 'Name',
        value: '',
        type: 'text',
        component: 'input',
        className: '',
        validation: [
          'required',
        ],
      },
      {
        label: 'Breed',
        value: '',
        type: 'select',
        component: 'select',
        className: '',
        validation: [
          'required',
        ],
      },
      {
        label: 'Photo',
        value: '',
        type: 'image',
        component: 'image',
        className: '',
      },
    ],
  },
  getters: {
    humanFields: state => state.humanFields,
  },
  mutations: {

  },
  actions: {

  },
});
