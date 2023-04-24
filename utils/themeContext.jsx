
import {
    createContext,
    useState,
    useMemo,
    useReducer,
    useContext,
    useEffect,
} from "react";
import { reducer, actionTypes } from "./reducer";
import { tokens, themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider as Theme } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./authContext";
import { QueryClient, QueryClientProvider, } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient());
    const router = useRouter()

    const initialState = useMemo(() => {
        return {
            theme: 'light'
        }
    }, [])
    const [state, dispatch] = useReducer(reducer, initialState);
    const mode = useMemo(() => {
        return state.theme
    }, [state])
    const colors = tokens(mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);



    return (
        <ThemeContext.Provider
            value={{
                ...state,
                colors,


            }}
        >
            <QueryClientProvider client={queryClient}>

                <Theme theme={theme}>
                    <AuthProvider>
                        <CssBaseline />
                        {children}

                        <Toaster />
                    </AuthProvider>
                    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
                </Theme>
            </QueryClientProvider>

        </ThemeContext.Provider>
    );
};
export const useGlobalProvider = () => useContext(ThemeContext);
