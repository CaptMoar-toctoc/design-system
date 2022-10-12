import * as React from 'react';
import { FC } from 'react';
import { Tabs, Tab, Box, ThemeProvider } from '@mui/material';
import { iProps } from './iProps';
import theme from '../../theme/theme';

const idProps = (index: number) => {
	return {
		id: `quotes-tab-${index}`,
		'aria-controls': `my-quotes-option-${index}`,
	};
}

const TabsTT: FC<iProps> = ({
	tabs,
	index = 0
}
) => {
	const [value, setValue] = React.useState(index);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ width: '100%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label="my-quotes-section">
						{tabs.map((tab, index) => <Tab label={tab.text} {...idProps(index)} onClick={tab.handlerFn()} />)}
					</Tabs>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default TabsTT;