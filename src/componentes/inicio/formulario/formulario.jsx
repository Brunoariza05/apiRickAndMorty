import React from "react";
import './formulario.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from "react";
import * as Yup from "yup";

const Formulario = () => {

    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const validationSchema = Yup.object({
        name: Yup.string().matches(/^[a-zA-Z]+$/, 'El nombre no debe contener números').required('El nombre es obligatorio'),
        email: Yup.string().email('Invalid email').required('Required'),
      });

    const initialValues = {
        name: '',
        email: '',
        consulta: '',
      };
    
    const onSubmit = (values, { resetForm }) => {
        console.log(values)
        setFormularioEnviado(true);
        localStorage.setItem('formData', JSON.stringify(values));
        resetForm();
      };

    setTimeout(() => {
        setFormularioEnviado(false);
      }, 3000);

    return (
        <>
        <div id="formulario-contenedor">
        <h5 id="formulario-titulo">completa este formulario si queres tener data exclusiva de los personajes!</h5>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form>
          <p id="formulario-titulo2">FORMULARIO!</p>
          <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

            <div>
              <label htmlFor="email">email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="consulta">consulta:</label>
              <Field type="text" id="consulta" name="consulta" />
              <ErrorMessage name="consulta" component="div" />
            </div>

            <button type="submit" id="submit-form">Enviar</button>
          </Form>
        </Formik>
        </div>
        {formularioEnviado && <p id="personaje-favorito">El formulario fue enviado con exito!</p>}
        </>
    )
};

export default Formulario;