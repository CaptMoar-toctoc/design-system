import iProps from '../iProps'

const VirtualTour = ({ color, size, strokeWith }: iProps) => {

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
            <path d="M7.875 5.652 3.88 3.826 7.875 2l3.995 1.826-3.995 1.826ZM3.88 3.826v4.696l3.995 2.087V5.652" />
            <path d="M11.87 3.826v4.696l-3.995 2.087" />
            <path d="M7.875 12.957c-3.383 0-6.125-1.519-6.125-3.392 0-1.028.826-1.949 2.13-2.57m6.292 5.715a8.131 8.131 0 0 0 1.617-.536c1.35-.622 2.211-1.56 2.211-2.609 0-1.028-.826-1.949-2.13-2.57" />
            <path d="m7.076 11.913 1.065 1.043L7.076 14" />
        </svg>
    )
}

export default VirtualTour;