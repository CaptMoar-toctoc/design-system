import iProps from '../iProps'

const Mapping = ({ color, size, strokeWith }: iProps) => {

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
            <path d="M8 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            <path d="M13 6.5c0 4.5-5 8-5 8s-5-3.5-5-8a5 5 0 1 1 10 0Z" />
        </svg>
    )
}

export default Mapping;