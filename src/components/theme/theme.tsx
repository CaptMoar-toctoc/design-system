import { createTheme } from '@mui/material/styles';
import { default as tokens } from './tokens.json';

const theme = createTheme({

	palette: {
		type: 'light',
		white: tokens.global.White.value,
		primary: {
			main: tokens.global.Primary.Main.value,
			light: tokens.global.Primary.Light.value,
			dark: tokens.global.Primary.Dark.value,
		},
		secondary: {
			main: tokens.global.Secondary.Main.value,
			contrastText: tokens.global.Primary.Main.value,
		}
	},
	typography: {
		allVariants: {
			fontFamily: tokens.global.fontFamilies.nunito.value,
			textTransform: 'inherit'
		},
		htmlFontSize: 16,
		fontWeightLight: 300,
		button: {
			fontSize: 16,
			fontWeight: 400,
		}
	},
	spacing: 8,
	shape: {
		borderRadius: 4,
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				fontFamily: tokens.global.fontFamilies.nunito.value
			}
		},
		MuiButton: {
			defaultProps: {
				disableRipple: false,
			},
			// styleOverrides: {
			// 	root: {
			// 		textTransform: 'inherit',
			// 	}
			// },
		},
		MuiPaginationItem: {
			styleOverrides: {
				root: {
					backgroundColor: '#E9F0FB',
					
				},
				ellipsis:{
					backgroundColor: 'transparent'
				}
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow:'none'
				},
			},
		},
		// MuiFormControlLabel:{
		// 	styleOverrides: {
		// 		label: {
		// 			fontSize:16 //usar size="small" es = 16
		// 		}
		// 	},
		// }
	},
});

export default theme;