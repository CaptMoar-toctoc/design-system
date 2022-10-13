import iProps from '../iProps'
 
const Whatsapp = ({ color, size, strokeWith}: iProps) => {

    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            stroke={color}
            strokeWidth={strokeWith}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2.838 11.063a5.994 5.994 0 1 1 2.1 2.1l-2.075.587a.493.493 0 0 1-.613-.613l.588-2.075Z" />
			<path d="M9.506 11.5A4.993 4.993 0 0 1 4.5 6.494 1.75 1.75 0 0 1 6.25 4.75v0a.425.425 0 0 1 .375.219l.731 1.275a.506.506 0 0 1-.006.506l-.587.981a3 3 0 0 0 1.506 1.507l.981-.588a.506.506 0 0 1 .506-.006l1.275.731a.425.425 0 0 1 .219.375 1.756 1.756 0 0 1-1.744 1.75v0Z" />
		
        </svg>
    )
}

export default Whatsapp;