export default function InfoLogo() {
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
            Info Help
            </title>
            <desc>
            A line styled icon from Orion Icon Library.
            </desc>
            <circle
            cx="32"
            cy="32"
            data-name="layer2"
            fill="none"
            r="30"

            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth={4}
            />
            <path
            d="M28 26h4v22m-4 .008h8"
            data-name="layer1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth={4}
            />
            <circle
            cx="31"
            cy="19"
            data-name="layer1"
            fill="none"
            r="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth={4}
            />
        </svg>
    )
  }