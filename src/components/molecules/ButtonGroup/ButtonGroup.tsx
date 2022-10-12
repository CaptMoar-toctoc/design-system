import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography, styled, ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';

const StyledButtonGroup = styled(ToggleButtonGroup)(() => ({
	'& .Mui-selected': {
		color: '#3200C1',
		borderWidth: '4px',
		borderStyle: 'solid',
		borderColor: '#3200C1',
		borderRadius: '2px'
	},
	'& .MuiButtonBase-root': {
		borderRight: 'none',
		borderLeft: 'none',
		borderTop: 'none',
		fontWeight: 600,
		lineHeight: '132%',
		padding: '7px',
		backgroundColor: '#ffffff',
	}
}));

export default function ButtonGroup() {
	const [alignment, setAlignment] = React.useState<string | null>('left');

	const handleAlignment = (
		event: React.MouseEvent<HTMLElement>,
		newAlignment: string | null,
	) => {
		setAlignment(newAlignment);
	};
	return (
		<ThemeProvider theme={theme}>
			<StyledButtonGroup
				value={alignment}
				exclusive
				onChange={handleAlignment}
				aria-label="listing of quoted properties"
			>
				<ToggleButton value="left" aria-label="onsale new project">
					<Typography>Proyectos nuevos en venta</Typography>
				</ToggleButton>
				<ToggleButton value="center" aria-label="onsale pre-owned">
					<Typography>Propiedades usadas en venta</Typography>
				</ToggleButton>
				<ToggleButton value="right" aria-label="renting pre-owned">
					<Typography>Propiedades usadas en arriendo</Typography>
				</ToggleButton>
			</StyledButtonGroup>
		</ThemeProvider>

	);
}