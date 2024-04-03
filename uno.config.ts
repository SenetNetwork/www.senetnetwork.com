import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss"

export default defineConfig({
  rules: [
    [
      /^truncate-(\d+)$/,
      ([, d]) => ({
        display: "-webkit-box",
        overflow: "hidden",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": `${d}`,
      }),
    ],
  ],
  shortcuts: [
    {
      "flex-center": "flex items-center justify-center",
      "flex-col": "flex flex-col",
      "base-max-width": "max-w-87.5rem",
      "overflow-ellipsis": "overflow-hidden text-ellipsis text-nowrap",
      "button-base": "px-10 py-3 rounded-1",
      "button-primary": "bg-#DAFD60 hover-bg-opacity-60 active-bg-opacity-80 text-main button-base",
      "button-black": "bg-black hover-bg-opacity-60 active-bg-opacity-80 text-primary button-base",
      "family-regular": "font-[var(--font-regular)]",
      "family-semi-bold": "font-[var(--font-semi-bold)]",
      "family-medium": "font-[var(--font-medium)]",
    },

    [/^size-?(.*)$/, ([, c]) => `w-${c} h-${c}`],
  ],
  presets: [presetUno(), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      primary: "var(--primary-color)",
      main: "var(--main-color)",
      gray: "#666666",
      background: "var(--bg-color)",
      mainDark: "#011828",
    },
  },
})
