import iProps from '../iProps'

const Instagram = ({ color, size, strokeWith }: iProps) => {
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
            <path d="M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            <path d="M10.75 2.25h-5.5a3 3 0 0 0-3 3v5.5a3 3 0 0 0 3 3h5.5a3 3 0 0 0 3-3v-5.5a3 3 0 0 0-3-3Z" />
            <path d="M11.25 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        </svg>
    )
}

export default Instagram;