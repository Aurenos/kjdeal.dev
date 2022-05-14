module.exports = {
  content: ["../*.slime", "../*.eex", "../**/*.slime", "../**/*.eex"],
  theme: {
    extend: {
      colors: {
        dark: "#2E2E3A",
        darker: "#24242e",
        aquamarine: "#49DCB1",
        "cool-gray": "#9A98B5",
        lemon: "#F4FF52",
        "yellow-red": "#F5B841"
      },
      fontFamily: {
        sans: ["Oswald", "ui-sans-serif", "sans-serif"],
        serif: ["Quattrocento", "ui-serif", "serif"],
        heading: ["Metal Mania", "ui-sans-serif", "sans-serif"]
      },
    },
  },
  plugins: [],
};
