import type {Preview} from "@storybook/react";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../src/config/mui";

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;

export const withMuiTheme = (Story) => (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Story/>
    </ThemeProvider>
);

export const decorators = [withMuiTheme];
