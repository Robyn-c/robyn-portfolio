'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    yellow: {
      50: "#FFF2E5",
      100: "#FFDAB8",
      200: "#FFC28A",
      300: "#FFAA5C",
      400: "#FF922E",
      500: "#FF7A00",
      600: "#CC6200",
      700: "#994900",
      800: "#663100",
      900: "#331800"
    },
    "purple": {
      "50": "#F1EFF6",
      "100": "#D7D2E4",
      "200": "#BDB5D3",
      "300": "#A498C2",
      "400": "#8A7CB1",
      "500": "#705FA0",
      "600": "#5A4C80",
      "700": "#433960",
      "800": "#2D2640",
      "900": "#161320"
    },
    "gray": {
      "50": "#F0F2F4",
      "100": "#D6DAE1",
      "200": "#BCC2CD",
      "300": "#A1AABA",
      "400": "#8792A6",
      "500": "#6D7A92",
      "600": "#576275",
      "700": "#414958",
      "800": "#2B313B",
      "900": "#16181D"
    }
  },
  textStyles: {
    h1: {
      fontSize: ['48px', '72px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
  fonts: {
    heading: `'Roboto Mono Variable', sans-serif`,
    body: `'Quicksand Variable', sans-serif`,
  }
})

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}