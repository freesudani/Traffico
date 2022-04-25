export const Colors = {
  Brand: {
    PrimaryMain: "#EE4D47",
    PrimaryDark: "#BE3D38",
    BG: "#FDEDE8",
    BG2: "FCDDD4",
  },
  Text: {
    TextWhite: "#FFFFFF",
    TextBlack: "#000000",
  },
};

export const TextStyles = {
  Heading: {
    H1: {
      fontFamily: "DM Serif Display",
      FontSize: "8rem",
      LineHeight: "8rem",
      LetterSpacing: "0",
      FontWeight: 400,
    },
    H2: {
      fontFamily: "DM Serif Display",
      FontSize: "4.5rem",
      LineHeight: "6.02rem",
      LetterSpacing: "0",
      FontWeight: 400,
    },
  },

  Subtitle: {
    Subtitle1: {
      fontFamily: "Rubik",
      FontSize: "24px",
      LineHeight: "40px",
      LetterSpacing: "0",
      FontWeight: 700,
    },
  },

  Body: {
    Body1: {
      fontFamily: "Rubik",
      FontSize: "18px",
      LineHeight: "40px",
      LetterSpacing: "0",
      FontWeight: 300,
    },
    Body2: {
      fontFamily: "Rubik",
      FontSize: "24px",
      LineHeight: "36px",
      LetterSpacing: "0",
      FontWeight: 500,
    },
    Body3: {
      fontFamily: "Rubik",
      FontSize: "18px",
      LineHeight: "30px",
      LetterSpacing: "0",
      FontWeight: 500,
    },
    Body4: {
      fontFamily: "Roboto",
      FontSize: "16px",
      LineHeight: "30px",
      LetterSpacing: "0",
      FontWeight: 700,
    },
    Body5: {
      fontFamily: "Rubik",
      FontSize: "16px",
      LineHeight: "30px",
      LetterSpacing: "0",
      FontWeight: 300,
    },
    Body6: {
      fontFamily: "Rubik",
      FontSize: "20px",
      LineHeight: "30px",
      LetterSpacing: "0",
      FontWeight: 400,
    },
  },

  Lead: {
    Lead: {
      fontFamily: "Rubik",
      FontSize: "16px",
      LineHeight: "18.96px",
      LetterSpacing: "0",
      FontWeight: 700,
    },
  },

  Bundler: function (attr) {
    return `
      font-family: ${attr.fontFamily};
      font-size: ${attr.FontSize};
      font-weight:  ${attr.FontWeight};
      line-height: ${attr.LineHeight};
      letter-spacing: ${attr.LetterSpacing};
      `;
  },
};
