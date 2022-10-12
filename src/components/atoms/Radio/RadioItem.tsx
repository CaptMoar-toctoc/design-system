import React, { FC } from 'react';
import { FormControlLabel as FormControlLabelTT, Radio } from '@mui/material';

import theme from '../../theme/theme';

interface iProps {
	label: string,
    checked?: boolean,
	disabled?: boolean,
	id: string,
	name: string,
	onChange?: any,
	required?: boolean,
	size?: any,
	value: any
}

const RadioItem: FC<iProps> = ({
	label,
	checked,
	disabled,
	id,
	name,
	onChange,
	required,
	size,
	value
}) => {
	return (
	
		<FormControlLabelTT 
			value={value} 
			control={
				<Radio id={id} name={name} size={size} required={required} />
			} 
			label={label} 
			onChange={onChange}
			checked={checked}
			disabled={disabled}
		/>
	
	);
}

export default RadioItem;