import { FormEvent } from 'react'
import { useForm } from '../hooks'
import { Button } from './Button'

export const Beneficiary = () => {
  const {
    onInputChange,
    onResetForm,
    fullname,
    relationship,
    percentage,
    CURP,
    contactphone,
  } = useForm({
    fullname: '',
    relationship: '',
    percentage: '',
    CURP: '',
    contactphone: '',
  })

  const handleSubmitFn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(fullname, relationship, percentage, CURP, contactphone)
    onResetForm()
  }

  return (
    <div className="beneficiary">
      <h2 className="beneficiary__title">
        Añadir <br /> beneficiarios
      </h2>

      <form className="beneficiary__form" onSubmit={handleSubmitFn}>
        <p className="beneficiary__form--title">
          Recuerda que puedes añadir hasta cinco beneficiarios:
        </p>

        <div className="beneficiary__form-first">
          <div className="beneficiary__form--field">
            <label htmlFor="fullname">Beneficiario 1</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Nombre completo"
              value={fullname}
              onChange={onInputChange}
            />
          </div>
          <div className="beneficiary__form--field">
            <label htmlFor="relationship">Parentesco</label>
            <input
              type="text"
              name="relationship"
              id="relationship"
              placeholder="Conyugue"
              value={relationship}
              onChange={onInputChange}
            />
          </div>
          <div className="beneficiary__form--field">
            <label htmlFor="percentage">Porcentaje</label>
            <input
              type="text"
              name="percentage"
              id="percentage"
              placeholder="100%"
              value={percentage}
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="beneficiary__form-second">
          <div className="beneficiary__form--field">
            <label htmlFor="CURP">CURP</label>
            <input
              type="text"
              name="CURP"
              id="CURP"
              placeholder="ABCD 000000 ABCDEFG 00"
              value={CURP}
              onChange={onInputChange}
            />
          </div>
          <div className="beneficiary__form--field">
            <label htmlFor="contactphone">Teléfono de contacto</label>
            <input
              type="tel"
              name="contactphone"
              id="contactphone"
              placeholder="0000000000"
              value={contactphone}
              onChange={onInputChange}
            />
          </div>
          <div className="beneficiary__form--field">
            <Button className="beneficiary__form--button">Remover</Button>
          </div>
        </div>
        <div className="beneficiary__form-third">
          <Button type="submit" className="beneficiary__form--submit">
            Añadir beneficiario
          </Button>
        </div>
      </form>
    </div>
  )
}
