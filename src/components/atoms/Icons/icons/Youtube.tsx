import iProps from '../iProps'

const Youtube = ({ color, size, strokeWith }: iProps) => {

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
            <path d="M10 8 7 6v4l3-2Z" />
            <path d="M1.5 8c0 1.863.194 2.95.337 3.512a1.006 1.006 0 0 0 .6.682c2.094.8 5.563.781 5.563.781s3.469.019 5.563-.781a1.006 1.006 0 0 0 .6-.682c.143-.562.337-1.65.337-3.512s-.194-2.95-.338-3.513a1.006 1.006 0 0 0-.6-.68C11.47 3.006 8 3.024 8 3.024s-3.469-.019-5.563.781a1.006 1.006 0 0 0-.6.681C1.694 5.05 1.5 6.137 1.5 8Z" />
        </svg>
    )
}

export default Youtube;