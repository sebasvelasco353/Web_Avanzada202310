import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        contrastThreshold: 4.5,
        primary: {
            main: orange[500],
        },
    },
});

export default theme;