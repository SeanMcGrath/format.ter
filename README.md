# format.ter - A Collection of Useful Tools for Software Engineers

## Installation

1. Clone the repo
2. Make sure you have current versions of node/npm
3. Run the following commands:
   ```
   npm install
   npm install -D @types/node  # If not already installed
   ```

## Development

To start the development server:

`npm run dev`

## Project Structure

- `src/`: Root folder for the application
- `src/assets/`: Application assets
- `src/components/`: React components (both from shadcn/ui and custom)
- `src/lib/`: Helper files and other configurations
- `src/pages/`: Application pages
- `src/index.css`: Global CSS file

## Configuration

- `vite.config.js`: Vite configuration file
  - Contains an import alias for cleaner imports:
    ```js
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    ```
- `tailwind.config.js`: Tailwind CSS configuration
- `components.json`: shadcn/ui library configuration

## Customization

- Modify `src/index.css` to adjust color codes and theme the application.
- Update `tailwind.config.js` to customize the Tailwind CSS setup.
- Adjust `components.json` to change shadcn/ui library configuration if needed.
