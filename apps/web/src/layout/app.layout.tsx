'use client'
import { useSelector } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import ConfirmContextProvider from 'store/context/ConfirmContextProvider'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, StyledEngineProvider } from '@mui/material'

// routing

// defaultTheme
import themes from 'themes'

// project imports
import NavigationScroll from 'layout/NavigationScroll'

const AppLayout = ({ children }: any) => {
    const customization = useSelector((state: any) => state.customization)
    return (
        <SnackbarProvider>
            <ConfirmContextProvider>
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={themes(customization)}>
                        <CssBaseline />
                        <NavigationScroll>{children}</NavigationScroll>
                    </ThemeProvider>
                </StyledEngineProvider>
            </ConfirmContextProvider>
        </SnackbarProvider>
    )
}

export default AppLayout
