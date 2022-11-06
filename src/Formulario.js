import React from "react";
const Formulario = () => {
  return (
    <form>
      <div>
        <div>
          <div>
            <input
              type="text"
              className="f-input-text"
              name="username"
              id="username"
              placeholder="Nombre"
            />
            <label for="" className="f-label">
              NOMBRE
            </label>
            <span id="error-username">*ERROR Nombre</span>
          </div>
          <div>
            <input
              type="text"
              className="f-input-text"
              name="lastname"
              id="lastname"
              placeholder="Apellidos"
            />
            <label className="f-label">APELLIDOS</label>
            <span id="error-lastname">*ERROR Apellidos</span>
          </div>
        </div>
        <div>
          <input
            type="email"
            className="f-input-text"
            name="email"
            id="email"
            placeholder="E-mail"
          />
          <label className="f-label">E-MAIL</label>
          <span id="error-email">*ERROR email</span>
        </div>
        <div>
          <select
            name=""
            id="departamento"
            className="f-select"
            onchange="actLocalidad()"
          >
            <option value="" disabled selected hidden>
              Departamento...
            </option>
          </select>
          <span id="error-departamento">*ERROR</span>
          <select name="" id="localidad" className="f-select">
            <option value="" disabled selected hidden>
              Localidad...
            </option>
          </select>
          <span id="error-localidad">*ERROR</span>
        </div>
        <div>
          <input
            type="text"
            className="f-input-text"
            name="ci"
            id="ci"
            placeholder="C.I."
          />
          <label className="f-label">C.I.</label>
          <span id="error-ci">*ERROR C.I.</span>
          <input
            type="checkbox"
            className="f-check"
            name="terminos"
            id="check"
          />
          <label for="terminos" className="l-check">
            Acepto las bases y condiciones
          </label>
          <span id="error-terminos">*ERROR</span>
        </div>
        <div>
          <button className="f-button" type="submit">
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};
export default Formulario;
