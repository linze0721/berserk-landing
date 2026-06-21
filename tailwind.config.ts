import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', "Menlo", "Monaco", "Consolas", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        terminal: {
          green: "#00FF00",
          border: "#333333",
          muted: "#555555",
          secondary: "#888888",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
