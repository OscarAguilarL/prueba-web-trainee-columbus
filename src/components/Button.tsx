import { FC, PropsWithChildren } from 'react'

interface ButtonProps extends PropsWithChildren<unknown> {
  className?: string
  isPrimary?: boolean
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  isPrimary = false,
}) => {
  return (
    <button
      className={`app__button ${
        isPrimary ? 'is-primary' : 'is-secondary'
      } ${className}`}
    >
      {children}
    </button>
  )
}
