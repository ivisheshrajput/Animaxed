/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#242428',
        'secondary-color': '#2b2b2f',
        'tertiary-color':'#ffdd95',
        // 'custom-gray': {
        //   '50': '#F8F9FA',
        //   '100': '#E9ECEF',
        //   '200': '#DEE2E6',
        //   '300': '#CED4DA',
        //   '400': '#ADB5BD',
        //   '500': '#6C757D',
        //   '600': '#495057',
        //   '700': '#343A40',
        //   '800': '#212529',
        //   '900': '#16181B',
        // },
      },
     fontFamily:{
      PoppinsExtraLightItalic: ["Poppins-ExtraLightItalic",'sans-serif'],
      PoppinsBlack:["Poppins-Black",'sans-serif'],
      PoppinsBlackItalic:["Poppins-BlackItalic",'sans-serif'],
      PoppinsBold:["Poppins-Bold",'sans-serif'],
      PoppinsBoldItalic:["Poppins-BoldItalic",'sans-serif'],
      PoppinsExtraBold:["Poppins-ExtraBold",'sans-serif'],
      PoppinsExtraBoldItalic:["Poppins-ExtraBoldItalic",'sans-serif'],
      PoppinsExtraLight: ["Poppins-ExtraLight",'sans-serif'],
      PoppinsItalic:["Poppins-Italic",'sans-serif'],
      PoppinsLightItalic:["Poppins-LightItalic",'sans-serif'],
      PoppinsMedium:["Poppins-Medium",'sans-serif'],
      PoppinsRegular:["Poppins-Regular",'sans-serif'],
      PoppinsMediumItalic:["Poppins-MediumItalic",'sans-serif'],
      PoppinsSemiBold:["Poppins-SemiBold",'sans-serif'],
      PoppinsSemiBoldItalic:["Poppins-SemiBoldItalic",'sans-serif'],
      PoppinsThin:["Poppins-Thin",'sans-serif'],
      PoppinsThinItalic:["Poppins-ThinItalic",'sans-serif'],
        },  
    },
  },
  plugins: [],
}

