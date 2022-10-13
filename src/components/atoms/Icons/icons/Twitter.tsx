import iProps from '../iProps'

const Twitter = ({ color, size, strokeWith }: iProps) => {

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
            <path d="M8 5.5C8 4.125 9.156 2.981 10.531 3a2.5 2.5 0 0 1 2.263 1.5H15l-2.019 2.019A7.994 7.994 0 0 1 5 14c-2 0-2.5-.75-2.5-.75s2-.75 3-2.25c0 0-4-2-3-7.5 0 0 2.5 2.5 5.5 3v-1Z" />
		
        </svg>
    )
}

export default Twitter;