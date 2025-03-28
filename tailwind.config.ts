import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'wr-black-v0': 'rgba(85, 85, 79, 1)',
        'wr-primary': '#FF8139',
        'wr-primary-hover': '#ff6106',
        'wr-primary-dark': '#ed5600',
        'wr-secondary': '#232323',
        'wr-theme-text-color': '#fff',
        'wr-title': '#222222',
        'wr-theme3-bg-color': '#201916',
        'wr-theme3-secondary': '#301f18',
        'wr-theme3-secondary2': '#ffdd39',
        'wr-bs-gray-100': '#f8f9fa',
        'wr-bs-gray-200': '#e9ecef',
        'wr-bs-gray-300': '#dee2e6',
        'wr-bs-gray-400': '#ced4da',
        'wr-bs-gray-500': '#adb5bd',
        'wr-bs-gray-600': '#6c757d',
        'wr-bs-gray-700': '#495057',
        'wr-bs-gray-800': '#343a40',
        'wr-bs-gray-900': '#212529',
        'wr-bs-primary': '#FF8139',
        'wr-bs-secondary': '#232323',
        'wr-bs-success': '#13c24d',
        'wr-bs-info': '#00aeff',
        'wr-bs-warning': '#FFBD13',
        'wr-bs-danger': '#ff0003',
        'wr-bs-light': '#faf8f2',
        'wr-bs-dark': '#222222',
        'wr-primary-1': 'rgba(255, 129, 57, 0.1)',
        'wr-primary-2': 'rgba(255, 129, 57, 0.2)',
        'wr-primary-3': 'rgba(255, 129, 57, 0.3)',
        'wr-primary-4': 'rgba(255, 129, 57, 0.4)',
        'wr-primary-5': 'rgba(255, 129, 57, 0.5)',
        'wr-primary-05': 'rgba(255, 129, 57, 0.05)',
        'wr-primary-6': 'rgba(255, 129, 57, 0.6)',
        'wr-primary-7': 'rgba(255, 129, 57, 0.7)',
        'wr-primary-8': 'rgba(255, 129, 57, 0.8)',
        'wr-primary-9': 'rgba(255, 129, 57, 0.9)',
      },
      backgroundImage: {
        'wr-gradient': 'linear-gradient(89deg, #FF3C11 1.12%, #FF8139 44%)',
        'wr-gradient-1': 'linear-gradient(90deg, #FF3F13 47.55%, #FF7F38 100.15%)',
        'wr-gradient-2': 'linear-gradient(90deg, #FF8039 0%, #FF3F13 100%)',
        'wr-gradient-3': 'linear-gradient(180deg, #FF8139 0%, #FF0000 100%)',
        'wr-primary-shadow': 'linear-gradient(90deg, #fcde3b 47.55%, #ebc600 100.15%)',
        // 'wr-theme2-bg-pattern1': 'url(../images/pattern/theme/bg-pattern1.svg)',
      },
      boxShadow: {
        'wr-natural': '6px 6px 9px rgba(0, 0, 0, 0.2)',
        'wr-deep': '12px 12px 50px rgba(0, 0, 0, 0.4)',
        'wr-sharp': '6px 6px 0px rgba(0, 0, 0, 0.2)',
        'wr-outlined': '6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1)',
        'wr-crisp': '6px 6px 0px rgba(0, 0, 0, 1)',
      },

    },
  },
  plugins: [
    require('@tailwindcss/typography'),  // Ensure typography plugin is enabled

  ],
};
export default config;
