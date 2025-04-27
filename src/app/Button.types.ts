import { ButtonHTMLAttributes, CSSProperties, MouseEventHandler, ReactElement, ReactNode, SVGProps } from 'react'

export type ButtonVariant = 'black' | 'black-rounded' | 'gray' | 'gray-blue' | 'white' | 'white-outlined'

export type ButtonProps = {
  variant?: ButtonVariant
  fullWidth?: boolean
  disabled?: boolean
  loading?: boolean
  iconOnly?: boolean
  leftIcon?: ReactElement<SVGProps<SVGElement>>
  rightIcon?: ReactElement<SVGProps<SVGElement>>
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  style?: CSSProperties
  children?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>
