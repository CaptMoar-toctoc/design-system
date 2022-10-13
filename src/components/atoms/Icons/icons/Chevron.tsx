import iProps from '../iProps'

const Chevron = ({ color, size, strokeWith }: iProps) => {

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
           	<path d="M13 6L8 11L3 6"  />
        </svg>
    )
}

export default Chevron;