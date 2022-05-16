export const Beneficiary = () => {
  return (
    <div className="beneficiary">
      <h2 className="beneficiary__title">
        Añadir <br /> beneficiarios
      </h2>

      <form className="beneficiary__form">
        <p className="beneficiary__form--title">
          Recuerda que puedes añadir hasta cinco beneficiarios:
        </p>

        <div className="beneficiary__form-first">
          <div className="beneficiary__form--field">
            <label htmlFor="fullname">Beneficiario 1</label>
            <input type="text" id="fullname" placeholder="Nombre completo" />
          </div>
          <div className="beneficiary__form--field">
            <label htmlFor="relationship">Parentesco</label>
            <input type="text" id="relationship" placeholder="Conyugue" />
          </div>
          <div className="beneficiary__form--field">
            <label htmlFor="percentage">Porcentaje</label>
            <input type="text" id="percentage" placeholder="100%" />
          </div>
        </div>

        <div className="beneficiary__form-second">
          <div className="beneficiary__form--field">
            <label htmlFor="CURP">CURP</label>
            <input type="text" id="CURP" placeholder="ABCD 000000 ABCDEFG 00" />
          </div>
          <div className="beneficiary__form--field">
            <label htmlFor="contactphone">Teléfono de contacto</label>
            <input type="tel" id="contactphone" placeholder="0000000000" />
          </div>
          <div className="beneficiary__form--field">
            <button className="beneficiary__form--button">Remover</button>
          </div>
        </div>
        <div className="beneficiary__form-third">
          <button className="beneficiary__form--submit">
            Añadir beneficiario
          </button>
        </div>
      </form>
    </div>
  )
}
