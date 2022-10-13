//import Icons from './icons.svg';
import iProps from './iProps'
import Meters from './icons/Meters'
import Bathrooms from './icons/Bathrooms'
import Trash from './icons/Trash'

import Room from './icons/Room'
import Mappin from './icons/Mappin'
import VirtualTour from './icons/VirtualTour'
import Instagram from './icons/Instagram'
import Linkedin from './icons/Linkedin'
import Twitter from './icons/Twitter'
import Whatsapp from './icons/Whatsapp'
import Youtube from './icons/Youtube'
import Facebook from './icons/Facebook'
import CheckCircle from './icons/CheckCircle'
import Warning from './icons/Warning'
import Help from './icons/Help'
import Chevron from './icons/Chevron'
import XBurger from './icons/XBurger'
import Burger from './icons/Burger'
import UserCircle from './icons/UserCircle';


const Icon = ({ name, color, size, className }: iProps) => {
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

	console.log(color, size)

	switch (name) {
		case "meters":
			return <Meters color={color} size={_size} strokeWith={_strokeWidth} />;
		case "bathrooms":
			return <Bathrooms color={color} size={_size} strokeWith={_strokeWidth}/>
		case "room":
			return <Room color={color} size={_size} strokeWith={_strokeWidth}/>
		case "mappin":
			return <Mappin color={color} size={_size} strokeWith={_strokeWidth}/>
		case "virtual-tour":
			return <VirtualTour color={color} size={_size} strokeWith={_strokeWidth}/>
		case "instagram":
			return <Instagram color={color} size={_size} strokeWith={_strokeWidth}/>
		case "linkedin":
			return <Linkedin color={color} size={_size} strokeWith={_strokeWidth}/>
		case "twitter":
			return <Twitter color={color} size={_size} strokeWith={_strokeWidth}/>
		case "whatsapp":
			return <Whatsapp color={color} size={_size} strokeWith={_strokeWidth}/>
		case "youtube":
			return <Youtube color={color} size={_size} strokeWith={_strokeWidth}/>
		case "facebook":
			return <Facebook color={color} size={_size} strokeWith={_strokeWidth}/>
		case "check-circle":
			return <CheckCircle color={color} size={_size} strokeWith={_strokeWidth}/>
		case "warning":
			return <Warning color={color} size={_size} strokeWith={_strokeWidth}/>
		case "help":
			return <Help color={color} size={_size} strokeWith={_strokeWidth}/>
		case "chevron":
			return <Chevron color={color} size={_size} strokeWith={_strokeWidth}/>
		case "x-burger":
			return <XBurger color={color} size={_size} strokeWith={_strokeWidth}/>
		case "burger":
			return <Burger color={color} size={_size} strokeWith={_strokeWidth}/>
		case "trash":
			return <Trash color={color} size={_size} strokeWith={_strokeWidth}/>
		case "user-circle":
			return <UserCircle color={color} size={_size} strokeWith={_strokeWidth}/>
		default:
			return null;
	}
}

export default Icon;