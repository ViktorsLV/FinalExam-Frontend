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
            accent: colors.indigo.base, 
            headlineLight: colors.grey.darken2
          },
        },
      },
});
