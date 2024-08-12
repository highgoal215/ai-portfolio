export default function LinkedInLogo({color}: {color: string}) {
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
        Linkedin
        </title>
        <desc>
        A line styled icon from Orion Icon Library.
        </desc>
        <path
        d="M3.078 22.331h12.188v36.844H3.078z"
        data-name="layer1"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth={2}
        />
        <path
        d="M46.719 21.112c-5.344 0-8.531 1.969-11.906 6.281v-5.062H22.625v36.844h12.281V39.206c0-4.219 2.156-8.344 7.031-8.344s7.781 4.125 7.781 8.25v20.063H62V38.269c0-14.532-9.844-17.157-15.281-17.157z"
        data-name="layer2"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth={2}
        />
        <path
        d="M9.219 4.425C5.188 4.425 2 7.331 2 10.894s3.188 6.469 7.219 6.469 7.219-2.906 7.219-6.469-3.188-6.469-7.219-6.469z"
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