import iProps from '../iProps'

const XBurger = ({ color, size, strokeWith }: iProps) => {

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
            <path d="M2.62805 2.62802L13.2947 13.2947M2.62805 13.2947L13.2947 2.62802" />
        </svg>
    )
}

export default XBurger;