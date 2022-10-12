import Icon from './Icon';
import iProps from './iProps';

const listIcons = ['check-circle','warning','trash', 'meters', 'room', 'bathrooms', 'mappin', 'virtual-tour','facebook','instagram','linkedin','twitter','whatsapp','youtube','help','user-circle','chevron','x-burger','burger'];

export default {
	title: 'TocToc-DS/Atoms',
	component: Icon,
	argTypes: {
		size: {
			control: {
				type: 'inline-radio',
				options: [16, 24, 32, 40],
			},
		},
		name: {
			table: {
				disable: true,
			},
		},
		className: {
			table: {
				disable: true,
			},
		},

	},
}

export const IconTT = (args: iProps) => {
	return (
		listIcons.map((x) => {
			return <div className='c-icon'>
				<Icon
					key={`icon-${x}`}
					name={x}
					size={args.size}
					color={args.color}
					className={args.className}
				/>
				<div>{x}</div>
			</div>
		})
	)
};
IconTT.args = {
	size: 16,
	color: '#333',
	className: 'icono'
};
