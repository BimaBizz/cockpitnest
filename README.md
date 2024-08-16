
# Project Documentation

## Introduction

Welcome to the **Project Documentation** repository. This project utilizes **Cockpit CMS** for content management and **Tailwind CSS** for styling. It includes custom components that are dynamically managed through Cockpit CMS and styled using Tailwind CSS with dynamic class handling. This documentation will guide you through the setup, usage, and customization processes of the project.

----------

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Custom Components in Cockpit CMS](#custom-components-in-cockpit-cms)
-   [Using Tailwind CSS with Cockpit CMS](#using-tailwind-css-with-cockpit-cms)
-   [API Hooks](#api-hooks)
-   [Sitemap Generation](#sitemap-generation)
-   [License](#license)

----------

## Installation

1.  **Clone the repository**:
    
    bash
    
    Salin kode
    ```bash
    git clone https://github.com/your-repo-url.git
    cd your-project-directory
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Set up environment variables**: Make sure to set up the following environment variables in a `.env` file:
    

    ```
    HOST=https://example.com
    DOMAIN=https://yourdomain.com
    ```
4.  **Build Tailwind CSS**: Run the build command to generate your Tailwind CSS styles:
    
    bash
    
    Salin kode
    ```bash
    npm run build 
    ```

----------

## Usage

### Running the Project

To start the development server, run:

bash

Salin kode
```bash
npm run dev 
```
Open your browser and navigate to `http://localhost:3000` (or your specified port).

----------

## Custom Components in Cockpit CMS

### Adding Custom Components

1.  **Navigate to Cockpit CMS**:  
    Open Cockpit CMS and go to the **Components** section (`https://example.com/layout-components`).
    
2.  **Add a New Component**:  
    Click on **Add Component**, fill in the relevant fields (such as `title`, `class`, etc.), and save the component.
    
3.  **Template Setup**:  
    If your component uses dynamic fields such as a `class`, include them in your template using Vue.js:
    ```html
    `<div v-if="data.class" :class="data.class">{{ data.class }}</div>` 
    ```
4.  **Save and Use**:  
    Save the component and use it within your Cockpit CMS pages.
    

----------

## Using Tailwind CSS with Cockpit CMS

### Tailwind CSS Safelist

To ensure dynamic Tailwind CSS classes are retained during the build process, configure the `safelist` in `tailwind.config.js`.

#### Example Configuration:

```js
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  safelist: [
    'bg-red-500',
    'text-center',
    'hover:bg-blue-500',
    'md:flex',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

After configuring the safelist, rebuild the Tailwind CSS:


```bash
npm run build
``` 

For more details on safelisting, refer to the [Tailwind CSS Safelist Documentation](https://tailwindcss.com/docs/content-configuration#safelisting-classes).

----------

## API Hooks

The project uses custom API hooks to fetch data dynamically. Here are some of the hooks:

-   **`fetchRoutes`**: Fetches route data from the API.
-   **`fetchLayout`**: Retrieves page layout based on the route.
-   **`fetchMenus`**: Fetches menu data.
-   **`fetchSettings`**: Retrieves application settings.
-   **`fetchSitemap`**: Fetches sitemap data for SEO purposes.

### Example Usage of `fetchRoutes` Hook

```js
export const fetchRoutes = async () => {
    const response = await fetch(`${process.env.HOST}/api/pages/routes`, {
        cache: 'no-cache'
    });
    const data = await response.json();
    return data.default;
};
```

These hooks allow for flexible content management and are essential for rendering the correct data in your components.

----------

## Sitemap Generation

The sitemap generation is handled through a custom function that dynamically builds the sitemap based on the fetched routes and their last modified dates.

### Example Code:

```js
import { fetchSitemap } from "@/lib/hook";

export async function getData() {
    const data = await fetchSitemap();
    return data;
}

export default async function sitemap() {
    const data = await getData();
    const listmain = data.map(item => ({
        url: process.env.DOMAIN + item.routes.default,
        lastModified: item.lastmod,
    }));

    return [...listmain];
}
```
This sitemap is essential for **SEO** purposes and ensures your website pages are correctly indexed by search engines.

----------

## License

This project is licensed under the MIT License - see the LICENSE file for details.
