import { nextui } from '@nextui-org/theme'
/** @type {import('tailwindcss').Config} */

/* eslint-env node */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
]
export const theme = {
  colors: {
    'black-100': '#000000',
    'black-A80': 'rgba(0, 0, 0, 0.8)',
    'black-A60': 'rgba(0, 0, 0, 0.6)',
    'black-A50': 'rgba(0, 0, 0, 0.5)',
    'black-A40': 'rgba(0, 0, 0, 0.4)',
    'black-A20': 'rgba(0, 0, 0, 0.2)',
    'black-A10': 'rgba(0, 0, 0, 0.1)',
    'black-A5': 'rgba(0, 0, 0, 0.05)',

    'gray-100': '#212121',
    'gray-90': '#353535',
    'gray-80': '#444444',
    'gray-70': '#666666',
    'gray-60': '#999999',
    'gray-50': '#aeaeae',
    'gray-40': '#cccccc',
    'gray-30': '#e7e7e7',
    'gray-20': '#f2f2f2',
    'gray-15': '#f7f7f7',
    'gray-10': '#fafafa',

    'white-100': '#ffffff',
    'white-A95': 'rgba(255, 255, 255, 0.95)',
    'white-A80': 'rgba(255, 255, 255, 0.8)',
    'white-A60': 'rgba(255, 255, 255, 0.6)',
    'white-A50': 'rgba(255, 255, 255, 0.5)',
    'white-A40': 'rgba(255, 255, 255, 0.4)',
    'white-A20': 'rgba(255, 255, 255, 0.2)',
    'white-A10': 'rgba(255, 255, 255, 0.1)',
    'white-A5': 'rgba(255, 255, 255, 0.05)',

    'primary-100': '#164f62',
    'primary-80': '#1b7fb7',
    'primary-50': '#1d9baa',
    'primary-30': '#8ddef2',
    'primary-20': '#b7e1eb',
    'primary-10': '#dbf5fb',
    'primary-5': '#f1fbfd',

    'secondary-100': '#f26131',
    'secondary-30': '#f2cbab',
    'secondary-20': '#fff1e6',

    'tertiary-100': '#54b592',
    'tertiary-30': '#8dd8d3',
    'tertiary-10': '#e1f5f3',

    'error-60': '#f02b2b',
    'error-50': '#f04f4f',
    'error-40': '#f8b0b0',
    'error-20': '#fff1f1',
    'error-10': '#fdeced',

    'warning-50': '#ffc107',
    'warning-40': '#ffe38f',
    'warning-10': '#fffaeb',

    'success-50': '#4bb34b',
    'success-40': '#aeddae',
    'success-20': '#dcf5dc',

    'info-50': '#2787f5',
    'info-40': '#a3bdda',

    'blue-100': '#346cad',
    'blue-80': '#2787f5',
    'blue-A45': 'rgba(52, 108, 173, 0.45)',
    'blue-A40': 'rgba(39, 135, 245, 0.4)',
    'blue-A25': 'rgba(52, 108, 173, 0.25)',
    'blue-A20': 'rgba(39, 135, 245, 0.2)',
    'blue-A10': 'rgba(39, 135, 245, 0.1)',

    'gray-blue-80': '#57717f',
    'gray-blue-70': '#687F8C',
    'gray-blue-60': '#8a9ca6',
    'gray-blue-50': '#c5ced3',
    'gray-blue-40': '#D9DFE2',
    'gray-blue-30': '#e7ebed',
    'gray-blue-20': '#f2f4f5',
    schedule: {
      100: 'rgba(181, 207, 147, 1)',
      200: 'rgba(132, 144, 248, 1)',
      300: 'rgba(164, 202, 238, 1)',
      400: 'rgba(236, 208, 122, 1)',
      500: 'rgba(234, 146, 129, 1)',
      600: 'rgba(177, 148, 187, 1)',
    },
    primary: '#212121', // gray-100
    secondary: '#999999', // gray-60
    action: '#1b7fb7', // primary-80
    success: '#4BB34B', // success-50
    error: '#F04F4F', // error-50
  },
  fontFamily: {
    formular: ['Formular'],
  },
  fontSize: {
    sm: ['0.75rem !important', { lineHeight: '18px' }], // 12
    md: ['0.875rem !important', { lineHeight: '20px' }], // 14
    lg: '1rem !important', // 16
    xl: '1.125rem !important', // 18
    xxl: '1.25rem !important', // 20
    '3xl': '1.5rem', // 24
    '4xl': '1.75rem', // 28
    '5xl': '2rem', // 32
    '5xxl': '2.5rem',
    '6xl': '3.75rem', // 60
    '8xl': '5rem', // 80
  },
  spacing: {
    0: '0rem',
    0.5: '0.125rem', // 2
    1: '0.25rem', // 4
    1.5: '0.375rem', //6
    2: '0.5rem', // 8
    2.5: '0.625rem', // 10
    3: '0.75rem', // 12
    3.5: '0.875rem', // 14
    4: '1rem', // 16
    4.5: '1.125rem', // 18
    5: '1.25rem', // 20
    5.5: '1.375rem', // 22
    6: '1.5rem', // 24
    6.5: '1.625rem', // 26
    7: '1.75rem', // 28,
    7.5: '1.875rem', //30
    8: '2rem', //32
  },
  fontWeight: {
    normal: '400',
    bold: '700',
  },
  lineHeight: {
    0: '0',
    1: '0.25rem', // 4px
    2: '0.5rem', // 8px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    4.5: '1.125rem', // 18px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    7: '1.75rem', // 28px
    8: '2rem', // 32px
    9: '2.25rem', // 36px
    10: '2.5rem', // 40px
  },
  textColor: {
    primary: '#212121', // gray-100
    secondary: '#999999', // gray-60
    action: '#1b7fb7', // primary-80
    success: '#4BB34B', // success-50
    error: '#F04F4F', // error-50
    'black-100': '#000000',
    'black-A80': 'rgba(0, 0, 0, 0.8)',
    'black-A60': 'rgba(0, 0, 0, 0.6)',
    'black-A50': 'rgba(0, 0, 0, 0.5)',
    'black-A40': 'rgba(0, 0, 0, 0.4)',
    'black-A20': 'rgba(0, 0, 0, 0.2)',
    'black-A10': 'rgba(0, 0, 0, 0.1)',
    'black-A5': 'rgba(0, 0, 0, 0.05)',

    'gray-100': '#212121',
    'gray-90': '#353535',
    'gray-80': '#444444',
    'gray-70': '#666666',
    'gray-60': '#999999',
    'gray-50': '#aeaeae',
    'gray-40': '#cccccc',
    'gray-30': '#e7e7e7',
    'gray-20': '#f2f2f2',
    'gray-15': '#f7f7f7',
    'gray-10': '#fafafa',

    'white-100': '#ffffff',
    'white-A95': 'rgba(255, 255, 255, 0.95)',
    'white-A80': 'rgba(255, 255, 255, 0.8)',
    'white-A60': 'rgba(255, 255, 255, 0.6)',
    'white-A50': 'rgba(255, 255, 255, 0.5)',
    'white-A40': 'rgba(255, 255, 255, 0.4)',
    'white-A20': 'rgba(255, 255, 255, 0.2)',
    'white-A10': 'rgba(255, 255, 255, 0.1)',
    'white-A5': 'rgba(255, 255, 255, 0.05)',

    'primary-100': '#164f62',
    'primary-80': '#1b7fb7',
    'primary-50': '#1d9baa',
    'primary-30': '#8ddef2',
    'primary-20': '#b7e1eb',
    'primary-10': '#dbf5fb',
    'primary-5': '#f1fbfd',

    'secondary-100': '#f26131',
    'secondary-30': '#f2cbab',
    'secondary-20': '#fff1e6',

    'tertiary-100': '#54b592',
    'tertiary-30': '#8dd8d3',
    'tertiary-10': '#e1f5f3',

    'error-60': '#f02b2b',
    'error-50': '#f04f4f',
    'error-40': '#f8b0b0',
    'error-20': '#fff1f1',
    'error-10': '#fdeced',

    'warning-50': '#ffc107',
    'warning-40': '#ffe38f',
    'warning-10': '#fffaeb',

    'success-50': '#4bb34b',
    'success-40': '#aeddae',
    'success-20': '#dcf5dc',

    'info-50': '#2787f5',
    'info-40': '#a3bdda',

    'blue-100': '#346cad',
    'blue-80': '#2787f5',
    'blue-A45': 'rgba(52, 108, 173, 0.45)',
    'blue-A40': 'rgba(39, 135, 245, 0.4)',
    'blue-A25': 'rgba(52, 108, 173, 0.25)',
    'blue-A20': 'rgba(39, 135, 245, 0.2)',
    'blue-A10': 'rgba(39, 135, 245, 0.1)',

    'gray-blue-80': '#57717f',
    'gray-blue-70': '#687F8C',
    'gray-blue-60': '#8a9ca6',
    'gray-blue-50': '#c5ced3',
    'gray-blue-40': '#D9DFE2',
    'gray-blue-30': '#e7ebed',
    'gray-blue-20': '#f2f4f5',
  },
  boxShadow: {
    highlight: '0px 0px 26px rgba(0, 0, 0, 0.1)',
    base: '0px 2px 16px rgba(0, 0, 0, 0.04)',
    tooltip: '0 2px 25px rgba(33, 121, 171, 0.15)',
    light: '0 2px 25px 0 rgba(185, 185, 185, 0.30)',
    none: '0 0 0 0',
  },
  keyframes: {
    popup: {
      '0%': { opacity: '0' },
      '100%': { opacity: '100%' },
    },
    bg: {
      '0%': { opacity: '0' },
      '100%': { opacity: '50%' },
    },
    popover: {
      '0%': { opacity: '100%' },
      '100%': { opacity: '0' },
    },
    spin: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    showFromLeft: {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(0)' },
    },
    hideFromRight: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-100%)' },
    },
    slideX: {
      '0%': { transform: 'translateX(0)' },
      '33%': { transform: 'translateX(-100%)' },
      '50%': { transform: 'translateX(0)' },
      '66%': { transform: 'translateX(100%)' },
      '100%': { transform: 'translateX(0)' },
    },
    slideY: {
      '0%': { transform: 'translateY(0)' },
      '10%': { transform: 'translateY(0)' },
      '20%': { transform: 'translateY(0)' },
      '30%': { transform: 'translateY(-100%)' },
      '40%': { transform: 'translateY(-100%)' },
      '50%': { transform: 'translateY(-100%)' },
      '60%': { transform: 'translateY(-200%)' },
      '70%': { transform: 'translateY(-200%)' },
      '80%': { transform: 'translateY(-200%)' },
      '100%': { transform: 'translateY(0)' },
    },
    ripple: {
      '0%': {
        width: '0px',
        height: '0px',
        opacity: '0.8',
        transform: 'translate(-50%, -50%) scale(0)',
        borderWidth: '2px',
        borderColor: 'rgba(255, 255, 255, 0.8)',
      },
      '25%': {
        opacity: '0.6',
        borderColor: 'rgba(255, 255, 255, 0.6)',
      },
      '50%': {
        width: '300px',
        height: '300px',
        opacity: '0.4',
        borderColor: 'rgba(255, 255, 255, 0.4)',
      },
      '75%': {
        opacity: '0.2',
        transform: 'translate(-50%, -50%) scale(1.2)',
        borderColor: 'rgba(255, 255, 255, 0.2)',
      },
      '100%': {
        width: '600px',
        height: '600px',
        opacity: '0',
        transform: 'translate(-50%, -50%) scale(1.4)',
        borderColor: 'rgba(255, 255, 255, 0)',
      },
    },
  },
  animation: {
    popup: 'popup .3s ease-in-out 1',
    popover: 'popover .3s ease-in-out 1',
    spin: 'spin 1s linear infinite',
    menu: 'showFromLeft .3s ease-in-out 1',
    menuout: 'hideFromRight .3s ease-in-out 1 forwards',
    bg: 'bg .4s ease-in-out 1',
    fastbg: 'bg .2s ease-in-out 1',
    slideX: 'slideX 5s infinite',
    slideY: 'slideY 5s infinite',
    ripple: 'ripple 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  },
  transitionProperty: {
    height: 'height',
  },
  gridTemplateColumns: {
    default: 'repeat(12, minmax(0, 1fr))',
    12: '100px 81px repeat(10, minmax(0, 1fr))',
    11: 'repeat(11, minmax(0, 1fr))',
    10: 'repeat(10, minmax(0, 1fr))',
    9: 'repeat(9, minmax(0, 1fr))',
    8: 'repeat(8, minmax(0, 1fr))',
    7: 'repeat(7, minmax(0, 1fr))',
    6: 'repeat(6, minmax(0, 1fr))',
    5: 'repeat(5, minmax(0, 1fr))',
    4: 'repeat(4, minmax(0, 1fr))',
    3: 'repeat(3, minmax(0, 1fr))',
    2: 'repeat(2, minmax(0, 1fr))',
    1: 'repeat(1, minmax(0, 1fr))',
  },
  screens: {
    sm: { max: '768px' },
    md: { min: '769px', max: '1080px' },
    lg: { min: '1080px', max: '1280px' },
    xl: { min: '1281px', max: '1401px' },
    xxl: { min: '1401px' },
  },
  extend: {},
}
export const darkMode = 'class'
export const plugins = [nextui()]
