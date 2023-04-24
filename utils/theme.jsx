



export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {

        }
        : {

            black: {
                100: "#d6d6d6",
                200: "#adadad",
                300: "#858585",
                400: "#5c5c5c",
                500: "#333333",
                600: "#292929",
                700: "#1f1f1f",
                800: "#141414",
                900: "#0a0a0a"
            },
            red: {
                100: "#fbd7d9",
                200: "#f7afb3",
                300: "#f4868e",
                400: "#f05e68",
                500: "#ec3642",
                600: "#bd2b35",
                700: "#8e2028",
                800: "#5e161a",
                900: "#2f0b0d"
            },
            orange: {
                100: "#fae8d1",
                200: "#f5d2a3",
                300: "#efbb76",
                400: "#eaa548",
                500: "#e58e1a",
                600: "#b77215",
                700: "#895510",
                800: "#5c390a",
                900: "#2e1c05"
            },
            teal: {
                100: "#d3efdc",
                200: "#a7dfb9",
                300: "#7ccf97",
                400: "#50bf74",
                500: "#24af51",
                600: "#1d8c41",
                700: "#166931",
                800: "#0e4620",
                900: "#072310"
            },
            yellow: {
                100: "#fff4cf",
                200: "#ffe99f",
                300: "#fedf6f",
                400: "#fed43f",
                500: "#fec90f",
                600: "#cba10c",
                700: "#987909",
                800: "#665006",
                900: "#332803"
            },
            grey: {
                100: "#141414",
                200: "#292929",
                300: "#3d3d3d",
                400: "#525252",
                500: "#666666",
                600: "#858585",
                700: "#a3a3a3",
                800: "#c2c2c2",
                900: "#e0e0e0",
            },


        }),
});

// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.black[900],
                    },
                }
                : {
                    // palette values for light mode
                    // primary: {
                    //     main: colors.primary[100],
                    // },
                    // secondary: {
                    //     main: colors.greenAccent[500],
                    // },
                    // neutral: {
                    //     dark: colors.grey[700],
                    //     main: colors.grey[500],
                    //     light: colors.grey[100],
                    // },
                    background: {
                        default: "#fcfcfc",
                    },

                }),
        },


        typography: {
            fontFamily: ["Roboto", "sans-serif"].join(","),
            fontSize: 12,

            h1: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Nunito", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};

