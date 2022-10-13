import iProps from '../iProps'

const Help = ({ color, size,strokeWith }: iProps) => {

    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            stroke={color}
            stroke-width={strokeWith}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="7.99487" cy="7.9949" r="6" />
			<path d="M7.99939 8.05978C8.96589 8.05978 9.74939 7.27628 9.74939 6.30978C9.74939 5.34329 8.96589 4.55978 7.99939 4.55978C7.03289 4.55978 6.24939 5.34329 6.24939 6.30978" />
			<path d="M8.00427 8.06976V8.23501V8.65096" />
			<path d="M8.00427 11.443C8.35672 11.443 8.64244 11.1623 8.64244 10.8162C8.64244 10.47 8.35672 10.1894 8.00427 10.1894C7.65181 10.1894 7.36609 10.47 7.36609 10.8162C7.36609 11.1623 7.65181 11.443 8.00427 11.443Z" />
		
        </svg>
    )
}

export default Help;