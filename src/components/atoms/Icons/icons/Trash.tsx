import iProps from '../iProps'

const Trash = ({ color, size, strokeWith }: iProps) => {

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
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 4h12M5.333 4V2.667a1.333 1.333 0 011.334-1.334h2.666a1.333 1.333 0 011.334 1.334V4m2 0v9.333a1.334 1.334 0 01-1.334 1.334H4.667a1.334 1.334 0 01-1.334-1.334V4h9.334zM6.667 7.333v4M9.333 7.333v4" />
        </svg>
    )
}

export default Trash;