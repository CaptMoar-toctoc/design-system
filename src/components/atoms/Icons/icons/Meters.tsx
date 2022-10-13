import iProps from '../iProps'

const Meters = ({ color, size, strokeWith }: iProps) => {
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
            <path d="M13.9337 1.53331H5.45692C5.20262 1.53331 5.03308 1.70285 5.03308 1.95715V10.4339C5.03308 10.6882 5.20262 10.8578 5.45692 10.8578H13.9337C14.188 10.8578 14.3575 10.6882 14.3575 10.4339V1.95715C14.3575 1.70285 14.188 1.53331 13.9337 1.53331Z" />
            <path d="M2.6004 1.53331V11.9809" />
            <path d="M1.64233 11.1672L2.60445 12.1293L3.56232 11.1714" />
            <path d="M1.64233 2.49543L2.60445 1.53332L3.56232 2.49119" />
            <path d="M14.3575 13.2906H3.90991" />
            <path d="M4.72371 12.3285L3.7616 13.2906L4.71947 14.2485" />
            <path d="M13.3955 12.3285L14.3576 13.2906L13.3997 14.2485" />
        </svg>
    )
}

export default Meters;