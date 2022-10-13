import iProps from '../iProps'

const CheckCircle = ({ color, size, strokeWith }: iProps) => {

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
            <path d="M14 7.9949C14 11.3086 11.3137 13.9949 8 13.9949C6.44881 13.9949 5.0351 13.4063 3.97007 12.4401C2.75996 11.3424 2 9.75742 2 7.9949C2 4.6812 4.68629 1.9949 8 1.9949C11.3137 1.9949 14 4.6812 14 7.9949Z" />
            <path d="M11.9292 12.5374C11.2206 11.0376 9.69425 10 7.92552 10C6.19664 10 4.69931 10.9914 3.97101 12.4367" />
            <circle cx="8" cy="7.5" r="2.5" />
        </svg>
    )
}

export default CheckCircle;