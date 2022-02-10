import * as React from 'react';
import cn from 'classnames';

export const IconAngular = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg className={cn('inline', className)} viewBox="0 0 256 270">
      <path
        d="M127.606.341L.849 44.95 20.88 211.022l106.86 58.732 107.412-59.528L255.175 44.16 127.606.341z"
        fill="#B3B3B3"
      />
      <path
        d="M242.532 53.758L127.31 14.466v241.256l96.561-53.441 18.66-148.523z"
        fill="#A6120D"
      />
      <path
        d="M15.073 54.466l17.165 148.525 95.07 52.731V14.462L15.074 54.465z"
        fill="#DD1B16"
      />
      <path
        d="M159.027 142.898L127.31 157.73H93.881l-15.714 39.305-29.228.54L127.31 23.227l31.717 119.672zm-3.066-7.467l-28.44-56.303-23.329 55.334h23.117l28.652.97z"
        fill="#F2F2F2"
      />
      <path
        d="M127.309 23.226l.21 55.902 26.47 55.377h-26.62l-.06 23.189 36.81.035 17.204 39.852 27.967.518-81.981-174.873z"
        fill="#B3B3B3"
      />
    </svg>
  )
);

IconAngular.displayName = 'IconAngular';
