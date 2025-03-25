import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import purgecss from "@fullhuman/postcss-purgecss";

export default {
  plugins: [
    autoprefixer(),
    cssnano({ preset: "default" }),
    purgecss({
      content: ["./index.html", "./src/**/*.vue", "./src/**/*.js"], // Scans your Vue and JS files
      safelist: ["body", "html"], // Prevents removing essential classes
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [], // Extracts used classes
    }),
  ],
};
