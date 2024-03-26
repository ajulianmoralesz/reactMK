/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content : ["./src/**/*.{.html,js,css}"],
  theme: {
    extend: {}
  },
  plugins: []

})

