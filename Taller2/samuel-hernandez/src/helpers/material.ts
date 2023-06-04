import {
    red, pink, purple, deepPurple,
    indigo, blue, lightBlue, cyan,
    green, lightGreen, lime, yellow,
    amber, orange, deepOrange, brown,
    grey, blueGrey, teal
} from '@mui/material/colors';
import {Color} from "@mui/material";

export default (base: string): Color => {
    switch (base) {
        case 'red':
            return red
        case 'pink':
            return pink
        case 'purple':
            return purple
        case 'deepPurple':
            return deepPurple
        case 'indigo':
            return indigo
        case 'blue':
            return blue
        case 'lightBlue':
            return lightBlue
        case 'cyan':
            return cyan
        case 'green':
            return green
        case 'lightGreen':
            return lightGreen
        case 'lime':
            return lime
        case 'yellow':
            return yellow
        case 'amber':
            return amber
        case 'orange':
            return orange
        case 'deepOrange':
            return deepOrange
        case 'brown':
            return brown
        case 'grey':
            return grey
        case 'blueGrey':
            return blueGrey
        case 'teal':
            return teal
        default:
            return red;
    }
}