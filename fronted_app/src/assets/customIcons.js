import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiAlert  } from '@mdi/js'


export const customAliases = {
  ...aliases,      // Incluye los aliases por defecto de Vuetify
  account: mdiAlert,  // Alias personalizado
}