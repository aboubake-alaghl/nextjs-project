import { PaletteMode, PaletteOptions } from '@mui/material';
import { alpha } from '@mui/material/styles';

function createGradient(color1: string, color2: string) {
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const PRIMARY = {
    // lighter: '#C8FACD',
    // light: '#5BE584',
    main: '#4CC8A6',
    // dark: '#007B55',
    // darker: '#005249',
};
const SECONDARY = {
    // lighter: '#D6E4FF',
    // light: '#84A9FF',
    main: '#3799F3',
    // dark: '#1939B7',
    // darker: '#091A7A',
};
// const INFO = {
//     lighter: '#D0F2FF',
//     light: '#74CAFF',
//     main: '#1890FF',
//     dark: '#0C53B7',
//     darker: '#04297A',
// };
// const SUCCESS = {
//     lighter: '#E9FCD4',
//     light: '#AAF27F',
//     main: '#54D62C',
//     dark: '#229A16',
//     darker: '#08660D',
// };
// const WARNING = {
//     lighter: '#FFF7CD',
//     light: '#FFE16A',
//     main: '#FFC107',
//     dark: '#B78103',
//     darker: '#7A4F01',
// };
// const ERROR = {
//     lighter: '#FFE7D9',
//     light: '#FFA48D',
//     main: '#FF4842',
//     dark: '#B72136',
//     darker: '#7A0C2E',
// };

// const GREY = {
//     0: '#FFFFFF',
//     100: '#F9FAFB',
//     200: '#F4F6F8',
//     300: '#DFE3E8',
//     400: '#C4CDD5',
//     500: '#919EAB',
//     600: '#637381',
//     700: '#454F5B',
//     800: '#212B36',
//     900: '#161C24',
//     500_8: alpha('#919EAB', 0.08),
//     500_12: alpha('#919EAB', 0.12),
//     500_16: alpha('#919EAB', 0.16),
//     500_24: alpha('#919EAB', 0.24),
//     500_32: alpha('#919EAB', 0.32),
//     500_48: alpha('#919EAB', 0.48),
//     500_56: alpha('#919EAB', 0.56),
//     500_80: alpha('#919EAB', 0.8),
// };


const COMMON = {
    // common: { black: '#000', white: '#fff' },
    primary: { ...PRIMARY, contrastText: '#fff' },
    secondary: { ...SECONDARY, contrastText: '#fff' },
    // info: { ...INFO, contrastText: '#fff' },
    // success: { ...SUCCESS, contrastText: GREY[800] },
    // warning: { ...WARNING, contrastText: GREY[800] },
    // error: { ...ERROR, contrastText: '#fff' },
    // grey: GREY,
    // gradients: GRADIENTS,
    // chart: CHART_COLORS,
    // divider: GREY[500_24],
    // action: {
    //     hover: GREY[500_8],
    //     selected: GREY[500_16],
    //     disabled: GREY[500_80],
    //     disabledBackground: GREY[500_24],
    //     focus: GREY[500_24],
    //     hoverOpacity: 0.08,
    //     disabledOpacity: 0.48,
    // },
};

const palette: {
    light: PaletteOptions;
    dark: PaletteOptions;
} = {
    light: {
        ...COMMON,
        mode: 'light' as PaletteMode,
        // text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
        background: { paper: '#fff', default: '#fff' },
        // background: { paper: '#fff', default: '#fff' },
        // action: { active: GREY[600], ...COMMON.action },
    },
    dark: {
        ...COMMON,
        mode: 'dark' as PaletteMode,
        // text: { primary: '#E0E1E2', secondary: GREY[500], disabled: GREY[600] },
        background: { default: "#101111" },
        // background: { paper: GREY[800], default: GREY[900] },
        // action: { active: GREY[500], ...COMMON.action },
    },
};

export default palette;
