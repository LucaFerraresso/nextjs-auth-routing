module.exports = {
      content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {
          colors: {
            'primary': '#4A90E2',
            'secondary': '#F4F4F4',
            'tertiary': '#D3D3D3',
            'text-primary': '#333333',
            'text-secondary': '#777777',
            'background': '#F8F8F8',
          },
        },
      },
      plugins: [],
    }
