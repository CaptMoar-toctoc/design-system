import iProps from '../iProps'

const Burger = ({ color, size, strokeWith }: iProps) => {

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
            <path d="M2.73682 2.60526H13.421" />
            <path d="M2.73682 7.94739H13.421" />
            <path d="M2.73682 13.2895H13.421" />
        </svg>
    )
}

export default Burger;