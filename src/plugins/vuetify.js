import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#00aa89',
        secondary: '#00756d',
        lightGreen: '#E0F2F1',
        accent: colors.indigo.base,
        headlineLight: colors.grey.darken2,
        disabled: '#E0E0E0',
        delete: '#FF5252'
      },
    },
  },
});