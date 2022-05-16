import { FC, PropsWithChildren } from 'react'

interface ButtonProps extends PropsWithChildren<unknown> {
  className?: string
  isPrimary?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: (...params: any) => void
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  isPrimary = false,
  type = 'button',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`app__button ${
        isPrimary ? 'is-primary' : 'is-secondary'
      } ${className}`}
    >
      {children}
    </button>
  )
}
