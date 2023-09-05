/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-banner': "url('/images/hero-banner.jpg')"
      },
      width: {
        'inputSearch' : '300px',
        'iconsearch': '28px',
        'maxcontainer': '1440px',
        'maxnavbar': '1286px',
        'imageproduct': '285px',
        'sizebox': '30px',
        'category': '23%',
        'cardProduct':'45%'

      },
      backgroundColor: {
        'boxOrange': '#B88E2F',
        'buttonBuy': '#FFF3E3',
        'Productcard': '#F4F5F7',
        'price': '#9F9F9F',
        'creams': '#F9F1E7',
        'violets': '#816DFA',
        'bordergrey': '#D9D9D9',
        'waranty': '#FAF3EA',
        'textgrey': '#898989',
        'brown':'#B87333',
        'violet':'#7A16BC',
        'navy':'#07283E',
        'grey':'#617584',
        'silver': '#C0C0C0',
        'pink': '#EA9999',
        'blue':'#316A9E',
        'black':'#000000',
        'green':'#38761D',
        'cream':'#FFFDD0'
      },
      fontSize: {
        '5.5xl': '52px',
        '3.5xl': '32px',
        '4.5xl': '40px'
      },
      lineHeight: {
        'h1': '56px'
      },
      height: {
        'banner-height': '718px',
        'imageheight': '301px',
        'maxproductcard': '500px'
      },
      margin: {
        'rightImage': '105px'
      },
      padding: {
        'sizebox': '5px'
      }
    },
  },
  plugins: [],
}
