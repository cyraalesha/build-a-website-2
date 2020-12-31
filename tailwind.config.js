module.exports = {
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "jakarta-background": "url('Assets/jakarta.png')",
        "london-background": "url('Assets/london.png')",
        "sydney-background": "url('Assets/sydney.png')",
        "main-background": "url('Assets/background.png')",
      }),
    },
  },
  variants: {
    backgroundColor: ["hover"],
  },
};
