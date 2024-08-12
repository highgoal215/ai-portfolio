export default function CloseIcon({color}: {color: string}) {
    return (
        <svg
            aria-describedby="desc"
            aria-labelledby="title"
            role="img"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>
            Close
            </title>
            <desc>
            A line styled icon from Orion Icon Library.
            </desc>
            <path
            d="M41.999 20.002l-22 22m22 0L20 20"
            data-name="layer1"
            fill={color}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth={2}
            />
        </svg>
    )
  }