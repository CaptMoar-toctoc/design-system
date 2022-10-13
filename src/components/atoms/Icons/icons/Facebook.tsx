import iProps from '../iProps'

const Facebook = ({ color, size, strokeWith }: iProps) => {

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
            <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z" />
			<path d="M10.5 5.5h-1A1.494 1.494 0 0 0 8 7v7M6 9h4" />
        </svg>
    )
}

export default Facebook;