// Paleta e tokens extraídos de
// stitch-export/stitch_vitrine_esta_o_dos_bichos/.../esta_o_dos_bichos/DESIGN.md
// (tema gerado pelo Stitch para este cliente — NÃO reaproveita a paleta de
// nenhum outro projeto do repositório).
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#f9f9ff",
        "surface-dim": "#d0daf0",
        "surface-bright": "#f9f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f0f3ff",
        "surface-container": "#e7eeff",
        "surface-container-high": "#dee8ff",
        "surface-container-highest": "#d9e3f9",
        "on-surface": "#121c2c",
        "on-surface-variant": "#3f4949",
        "inverse-surface": "#273141",
        "inverse-on-surface": "#ebf1ff",
        "outline": "#6f7979",
        "outline-variant": "#bec9c8",
        "surface-tint": "#13696a",
        "primary": "#006162",
        "on-primary": "#ffffff",
        "primary-container": "#2c7a7b",
        "on-primary-container": "#c1ffff",
        "inverse-primary": "#89d3d4",
        "secondary": "#9d4400",
        "on-secondary": "#ffffff",
        "secondary-container": "#fe8439",
        "on-secondary-container": "#662900",
        "tertiary": "#54585a",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#6c7072",
        "on-tertiary-container": "#f1f4f6",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "primary-fixed": "#a5eff0",
        "primary-fixed-dim": "#89d3d4",
        "on-primary-fixed": "#002020",
        "on-primary-fixed-variant": "#004f50",
        "secondary-fixed": "#ffdbca",
        "secondary-fixed-dim": "#ffb68f",
        "on-secondary-fixed": "#331100",
        "on-secondary-fixed-variant": "#773200",
        "tertiary-fixed": "#e0e3e5",
        "tertiary-fixed-dim": "#c3c7c9",
        "on-tertiary-fixed": "#181c1e",
        "on-tertiary-fixed-variant": "#434749",
        "background": "#f9f9ff",
        "on-background": "#121c2c",
        "surface-variant": "#d9e3f9"
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px"
      },
      spacing: {
        "unit": "8px",
        "container-max": "1200px",
        "gutter": "24px",
        "margin-mobile": "16px",
        "margin-desktop": "40px"
      },
      fontFamily: {
        "display-lg": ["Quicksand", "sans-serif"],
        "display-lg-mobile": ["Quicksand", "sans-serif"],
        "headline-lg": ["Quicksand", "sans-serif"],
        "headline-lg-mobile": ["Quicksand", "sans-serif"],
        "headline-md": ["Quicksand", "sans-serif"],
        "headline-sm": ["Quicksand", "sans-serif"],
        "body-lg": ["Open Sans", "sans-serif"],
        "body-md": ["Open Sans", "sans-serif"],
        "label-md": ["Open Sans", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["36px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "700" }],
        "headline-lg-mobile": ["28px", { lineHeight: "1.3", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "headline-sm": ["20px", { lineHeight: "1.4", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }]
      }
    }
  },
  plugins: []
};
