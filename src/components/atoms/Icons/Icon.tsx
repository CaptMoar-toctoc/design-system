//import Icons from './icons.svg';
import  ReactComponent  from './*.svg'
import iProps from './iProps'

const Icon = ({ name, color, size, className}:iProps) => {
	const _className = className || "";
	const _size = size || 16;
	let _strokeWidth = 1;

	switch (_size) {
		case 24:
			_strokeWidth = 1;
			break;
		case 32:
			_strokeWidth = 1;
			break;
		case 40:
			_strokeWidth = 1;
			break;
		default:
			_strokeWidth = 1;
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={_size}
			height={_size}
			className={`ico-${name} ${_className}`}
			fill="none"
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			viewBox={`0 0 ${_size} ${_size}`}
			// preserveAspectRatio="xMidYMin slice"
		>
			<ReactComponent 
				//xlinkHref={`${Icons}#${name}`} 
				//width={_size} 
				//height={_size} 
				//strokeWidth={_strokeWidth} 
				witdh='1rem'
			/>
		</svg>
	)
}

export default Icon;