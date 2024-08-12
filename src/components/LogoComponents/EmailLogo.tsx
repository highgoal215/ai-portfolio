export default function EmailLogo({color}: {color: string}) {
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
            Mail
            </title>
            <desc>
            A line styled icon from Orion Icon Library.
            </desc>
            <path
            d="M2 12l30 29 30-29M42 31.6L62 52M2 52l20-20.4"
            data-name="layer2"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth={6}
            />
            <path
            d="M2 12h60v40H2z"
            data-name="layer1"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth={6}
            />
        </svg>
    )
  }