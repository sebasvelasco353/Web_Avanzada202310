import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        contrastThreshold: 4.5,
        primary: {
            main: '#F7444E',
        },
        secondary: {
            main: grey[500]
        }
    },
});

export default theme;