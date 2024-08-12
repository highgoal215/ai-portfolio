export default function ArrowDownLogo({direction, color} : {direction: number, color: string}) {
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
      Angle Down
    </title>
    <desc>
      A line styled icon from Orion Icon Library.
    </desc>
    <path
      d="M20 26l11.994 14L44 26"
      data-name="layer1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={6}
      transform-origin="center"
      transform={`rotate(${direction})`}
    />
  </svg>
    )
  }