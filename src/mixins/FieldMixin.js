import { mapActions } from 'vuex';
import Error from '../components/Error.vue';

const FieldMixin = {
  props: {
    field: {
      type: Object,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      localValue: '',
    };
  },
  components: {
    Error,
  },
  methods: {
    ...mapActions([
      'updateFieldValue',
    ]),
  },
  created() {
    this.localValue = this.field.value;
  },
};

export default FieldMixin;
