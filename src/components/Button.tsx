import { FC, PropsWithChildren } from 'react'

interface ButtonProps extends PropsWithChildren<unknown> {
  className?: string
  isPrimary?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  isPrimary = false,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`app__button ${
        isPrimary ? 'is-primary' : 'is-secondary'
      } ${className}`}
    >
      {children}
    </button>
  )
}
