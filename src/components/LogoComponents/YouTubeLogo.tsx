export default function YouTubeLogo({color}: {color: string}) {
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
        Youtube
        </title>
        <desc>
        A line styled icon from Orion Icon Library.
        </desc>
        <path
        d="M49.539 12H14.461A12.4 12.4 0 0 0 2 24.327v17.346A12.4 12.4 0 0 0 14.461 54h35.078A12.4 12.4 0 0 0 62 41.673V24.327A12.4 12.4 0 0 0 49.539 12z"
        data-name="layer1"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth={10}
        />
        <path
        d="M41.111 33.844L24.7 41.585a.658.658 0 0 1-.938-.585V25.031a.659.659 0 0 1 .956-.581l16.407 8.225a.649.649 0 0 1-.014 1.169z"
        data-name="layer2"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth={1}
        />
    </svg>
    )
  }