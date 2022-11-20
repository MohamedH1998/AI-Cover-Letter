import Link from 'next/link';
import React, { ReactElement } from 'react'

interface ButtonProps {
    content: string  | React.ReactNode;
    className?: string;
    route?: string;
}
const Button = ({content, className, route}: ButtonProps):ReactElement => {
  return (
    <Link href={route ? route : "/create"} className={className ? className : 'py-2 px-4  my-2 text-center bg-ice-cold-stare w-[180px] text-black border'}>{content}</Link>
  )
}

export default Button