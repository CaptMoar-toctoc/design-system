import iProps from '../iProps'

const Room = ({ color, size, strokeWith }: iProps) => {

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
            <path d="M2.167 7.23V4.122C2.167 3.503 2.669 3 3.29 3h9.348c.62 0 1.123.503 1.123 1.123v3.106M1 12.698V8.425c0-.62.503-1.123 1.123-1.123h11.754c.62 0 1.123.503 1.123 1.123v4.273M1 9.745h14M1 11.531h14" />
            <path d="M3.906 5.284a.561.561 0 0 1 .552-.461h2.106c.31 0 .561.251.561.561v1.284c0 .31-.251.561-.561.561h-2.34a.561.561 0 0 1-.551-.662l.233-1.283ZM12.094 5.284a.561.561 0 0 0-.552-.461H9.436a.561.561 0 0 0-.56.561v1.284c0 .31.25.561.56.561h2.34c.35 0 .614-.317.552-.662l-.234-1.283Z" />
        </svg>
    )
}

export default Room;