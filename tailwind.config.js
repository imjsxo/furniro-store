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
        'imageproduct': '285px'

      },
      backgroundColor: {
        'boxOrange': '#B88E2F',
        'buttonBuy': '#FFF3E3',
        'Productcard': '#F4F5F7'
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
      }
    },
  },
  plugins: [],
}
