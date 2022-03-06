import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/400.css'

// import "@fontsource/itim"
// import "@fontsource/gochi-hand"
import "@fontsource/bungee"
import './fonts/alba/ALBAS___.TTF'
import './fonts/dunkin/Dunkin.otf'
import './fonts/mat_saleh//Mat Saleh.ttf'
import './index.css'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme({
  fonts: {
    heading: 'Bungee',
    body: 'Poppins'
  },
  colors: {
    light: {
      pink: '#FFD2EA',
      green: '#A1FF9C',
      blue: '#BBEFFF',
      purple: '#C5C5FF',
      orange: '#FFD49C',
      yellow: '#FFE98A',
      accent: '#244f9d'
    },
    dark: {
      pink: '#FFA4D4',
      green: '#1B9115',
      blue: '#19559f',
      purple: '#A4A4F4',
      orange: '#D07908',
      yellow: '#FFDE4F',
      accent: '#80B1FF'
    }
  },
  styles: {
  },
  components: {
    Heading: {
      defaultProps: {
        size: '4xl',

      },
      baseStyle: (props) => ({
        color: props.colorMode === 'light' ? '#2C2C2C' : 'white'
      })
    },
    Text: {
      baseStyle: {
        fontFamily: 'Mat',
        fontSize: 'xl',
      },
    },
    Button: {
      defaultProps: {
      },
      baseStyle: {
        borderRadius: '80px',

      },
    },
    IconButton: {
      baseStyle: {

      },
      defaultProps: {
        isRound: true,
      },
    },
  },
  config
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

