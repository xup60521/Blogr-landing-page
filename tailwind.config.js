/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Light_red_CTA_text: "hsl(356, 100%, 66%)",
                c_Very_light_red_CTA_hover_background: "hsl(355, 100%, 74%)",
                c_Very_dark_blue_headings: "hsl(208, 49%, 24%)",
                c_Grayish_blue_footer_text_: "hsl(240, 2%, 79%)",
                c_Very_dark_grayish_blue_body_copy: "hsl(207, 13%, 34%)",
                c_Very_dark_black_blue_footer_background_: "hsl(240, 10%, 16%)",
                g_nav_red1: "hsl(13, 100%, 72%)",
                g_nav_red2: "hsl(353, 100%, 62%)",
                g_body_blue1: "hsl(237, 17%, 21%)",
                g_body_blue2: "hsl(237, 23%, 32%)"
            },
            fontFamily: {
                overpass: ["Overpass", "sans-serif"],
                ubuntu: ["Ubuntu", "system-ui"]
            }
        },
    },
    plugins: [],
}

