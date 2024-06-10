import * as React from "react"
import Svg, { Path, Mask, G } from "react-native-svg"
import { SvgIconProps } from "./svg-icon-props"

export const HomePassive = (props:SvgIconProps)=> {
  return (
    <Svg
      width={props.size || 30}
      height={props.size || 30}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.268 12.905h-.695a2.693 2.693 0 00-2.69 2.69v3.27a.144.144 0 01-.144.144l-3.72-.01v-6.64c0-1.09-.883-1.97-2.016-2.02l6.81-6.017c.483-.43 1.211-.43 1.741.038l7.602 5.985-.009.009c-1.129.035-2.012.916-2.012 2.006l-.01 6.649h-2.023a.143.143 0 01-.144-.143v-3.271a2.693 2.693 0 00-2.69-2.69zm2.834 8.104h2.023c1.108 0 2.01-.901 2.01-2.01l.075-6.646a1.998 1.998 0 001.823-1.324 2 2 0 00-.556-2.186l-7.64-6.016a3.277 3.277 0 00-4.35-.002l-6.81 6.018a1.999 1.999 0 00-.556 2.186c.282.778.998 1.298 1.898 1.33V19c0 1.109.902 2.01 2.01 2.01h3.71a2.146 2.146 0 002.144-2.143v-3.271c0-.38.31-.69.69-.69h.695c.38 0 .69.31.69.69v3.27c0 1.183.962 2.144 2.144 2.144zm-9.01-9.167a1.454 1.454 0 102.909 0 1.454 1.454 0 00-2.908 0z"
        fill="#FC1055"
      />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={21}
        height={20}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.268 12.905h-.695a2.693 2.693 0 00-2.69 2.69v3.27a.144.144 0 01-.144.144l-3.72-.01v-6.64c0-1.09-.883-1.97-2.016-2.02l6.81-6.017c.483-.43 1.211-.43 1.741.038l7.602 5.985-.009.009c-1.129.035-2.012.916-2.012 2.006l-.01 6.649h-2.023a.143.143 0 01-.144-.143v-3.271a2.693 2.693 0 00-2.69-2.69zm2.834 8.104h2.023c1.108 0 2.01-.901 2.01-2.01l.075-6.646a1.998 1.998 0 001.823-1.324 2 2 0 00-.556-2.186l-7.64-6.016a3.277 3.277 0 00-4.35-.002l-6.81 6.018a1.999 1.999 0 00-.556 2.186c.282.778.998 1.298 1.898 1.33V19c0 1.109.902 2.01 2.01 2.01h3.71a2.146 2.146 0 002.144-2.143v-3.271c0-.38.31-.69.69-.69h.695c.38 0 .69.31.69.69v3.27c0 1.183.962 2.144 2.144 2.144zm-9.01-9.167a1.454 1.454 0 102.909 0 1.454 1.454 0 00-2.908 0z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path fill="#373A42" d="M-39.8027 -37.7213H56.1973V58.2787H-39.8027z" />
      </G>
    </Svg>
  )
}

export default HomePassive;