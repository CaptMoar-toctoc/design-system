import iProps from '../iProps'

const Bathroom = ({ color, size , strokeWith}: iProps) => {

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
            <path d="M12.718 8.973V3.472a1.472 1.472 0 1 0-2.943 0v.537M9.775 5.594v.34M9.775 7.406v.34" />
			<path d="M5.35 12.605c-2.336-.39-3.044-2.496-3.096-3.602h11.492c-.052 1.106-.76 3.211-3.096 3.602m-5.3 0a4.8 4.8 0 0 0 .792.064h3.716a4.8 4.8 0 0 0 .792-.064m-5.3 0c-.368.059-1.102.408-1.102 1.34m6.402-1.34c.368.063 1.102.418 1.102 1.34" />
		</svg>
    )
}

export default Bathroom;