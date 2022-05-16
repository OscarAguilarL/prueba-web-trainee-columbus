export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__first">
        <div className="footer__left">
          <a className="footer__left--item" href="">
            55 12345678
          </a>
          <a className="footer__left--item" href="">
            contacto@mail.com
          </a>
        </div>
        <div className="footer__right">
          <a className="footer__left--item" href="">
            Reclamaciones
          </a>
          <a className="footer__left--item" href="">
            Aviso Legal
          </a>
          <a className="footer__left--item" href="">
            Aviso de privacidad
          </a>
        </div>
      </section>

      <section className="footer__second">
        <div className="footer__left">
          <p className="footer__left--item">Todos los derechos reservados</p>
        </div>
      </section>
    </footer>
  )
}
