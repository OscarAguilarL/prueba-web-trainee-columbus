import { ChangeEvent, useState } from 'react'

export const useForm = <T>(initialFormValues: T = {} as T) => {
  const [formState, setFormState] = useState(initialFormValues)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((oldFormData) => ({
      ...oldFormData,
      [e.target.name]: e.target.value,
    }))
  }

  const onResetForm = () => setFormState(initialFormValues)

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}
