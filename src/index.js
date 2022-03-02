import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, ColorModeScript, extendTheme, useColorModeValue } from '@chakra-ui/react'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/400.css'

// import "@fontsource/itim"
// import "@fontsource/gochi-hand"
import "@fontsource/bungee"


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
      green: '#B3FFC7',
      blue: '#BBEFFF',
      purple: '#C5C5FF',
      orange: '#FFCC99',
      yellow: '#FFE98A',
      accent: '#11249c'
    },
    dark: {
      pink: '#FFA4D4',
      green: '#79E8B3',
      blue: '#80B1FF',
      purple: '#A4A4F4',
      orange: '#FFAB57',
      yellow: '#FFDE4F',
      accent: '#80B1FF'
    }
  },
  styles: {
  },
  components: {
    Heading: {
      // color: 'red',
      // textShadow: 'rgb(86, 92, 155) - 3px 3px 0px'
      defaultProps: {
        size: '4xl',

      },
      baseStyle: (props) => ({
        color: props.colorMode === 'light' ? '#2C2C2C' : 'white'
      })
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

