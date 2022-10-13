import iProps from '../iProps'

const Linkedin = ({ color, size, strokeWith }: iProps) => {

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
            <path d="M13.25 2.25H2.75a.5.5 0 0 0-.5.5v10.5a.5.5 0 0 0 .5.5h10.5a.5.5 0 0 0 .5-.5V2.75a.5.5 0 0 0-.5-.5ZM7.5 7v4M5.5 7v4" />
			<path d="M7.5 8.75a1.75 1.75 0 1 1 3.5 0V11" />
			<path d="M5.5 5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        </svg>
    )
}

export default Linkedin;