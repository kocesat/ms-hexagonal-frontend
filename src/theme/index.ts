import {extendTheme, StyleFunctionProps} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

export const customTheme = () => extendTheme({
    fonts: {
      body: `'Roboto', sans-serif`,
    },
    styles: {
      global: (props: StyleFunctionProps) => ({
        body: {
          fontFamily: 'body',
          // color: mode('gray.800', 'whiteAlpha.800')(props),
          // bg: mode('gray.50', 'gray.800')(props),
          lineHeight: 'base',
        },
      }),
    },
    colors: {
      success: 'green.500',
      primary: {
        default: 'blue.500',
        _dark: 'blue.300',
      },
      secondary: {
        default: 'red.500',
        _dark: 'red.400',
      },
      blue: {
        50: '#CCE0FF',
        100: '#85B8FF',
        200: '#579DFF',
        300: '#388BFF',
        400: '#1D7AFC',
        500: '#0c66e4',
        600: '#0b5ccd',
        700: '#0a52b6',
        800: '#0847a0',
        900: '#073d89',
      },
      green: {
        50: '#9AFFFF',
        100: '#DCFFF1',
        200: '#BAF3DB',
        300: '#7EE2B8',
        400: '#4BCE97',
        500: '#2ABB7F',
        600: '#22A06B',
        700: '#1F845A',
        800: '#216E4E',
        900: '#164B35',
      },
      red: {
        50: '#FA87A7',
        100: '#FFECEB',
        200: '#FFD5D2',
        300: '#FD9891',
        400: '#F87168',
        500: '#F15B50',
        600: '#E2483D',
        700: '#C9372C',
        800: '#AE2E24',
        900: '#5D1F1A',
      },
      orange: {
        100: "#FFF3EB",
        200: "#FEDEC8",
        300: "#FEC195",
        400: "#FEA362",
        500: "#F38A3F",
        600: "#E56910",
        700: "#C25100",
        800: "#A54800",
        900: "#702E00"
      },
      purple: {
        100:'#F3F0FF  ',
        200:'#DFD8FD',
        300:'#B8ACF6',
        400:'#9F8FEF',
        500:'#8F7EE7',
        600:'#8270DB',
        700:'#6E5DC6',
        800:'#5E4DB2',
        900:'#352C63'
      },
      cyan: {
        50: '#7FFFFF',
        100: '#66F0FF',
        200: '#4DD7F8',
        300: '#33BDDE',
        400: '#1AA4C5',
        500: '#008aab',
        600: '#007192',
        700: '#005778',
        800: '#003E5F',
        900: '#002445',
      },
      yellow: {
        100: '#FFF7D6',
        200: '#F8E6A0',
        300: '#F5CD47',
        400: '#E2B203',
        500: '#CF9F02',
        600: '#B38600',
        700: '#946F00',
        800: '#7F5F01',
        900: '#533F04',
      },
      teal: {
        100: "#E7F9FF",
        200: "#C6EDFB",
        300: "#9DD9EE",
        400: "#6CC3E0",
        500: "#42B2D7",
        600: "#2898BD",
        700: "#227D9B",
        800: "#206A83",
        900: "#164555",
      },
      pink: {
        100: "#FFECF8",
        200: "#FDD0EC",
        300: "#F797D2",
        400: "#E774BB",
        500: "#DA62AC",
        600: "#CD519D",
        700: "#AE4787",
        800: "#943D73",
        900: "#50253F",
      }
    },
    semanticTokens: {
      colors: {
        brand: {
          default: "blue.500",
          _dark: "blue.300"
        },
        cyan: {
          default: 'cyan.500',
          _dark: 'cyan.400',
        },
        blue: {
          default: 'blue.500',
          _dark: 'blue.300',
        },
        yellow: {
          default: 'yellow.500',
          _dark: 'yellow.400',
        },
        purple: {
          default: 'purple.500',
          _dark: 'purple.400',
        },
        green: {
          default: "green.500",
          _dark: "green.400",
        },
        red: {
          default: 'red.500',
          _dark: 'red.400',
        }
      }
    }
  }
);