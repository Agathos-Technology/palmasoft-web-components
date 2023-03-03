import { createDialog } from './Dialog';
import { createField } from '../Field/Field';
import { createButton } from '../Button/Button';

export default {
  title: 'Example/Modal/Dialog',
  argTypes: {},
};

const Template = (args) => createDialog(args);

export const Form = Template.bind({});
Form.args = {
  body: '<h1>Crear usuario</h1>',
  dismissible: false,
  fields: [
    createField({ type: 'text', label: 'Nombres' }),
    createField({ type: 'text', label: 'Apellidos' }),
    createField({ type: 'email', label: 'Correo electronico' }),
    createField({ type: 'number', label: 'Edad' })
  ],
  actions: [
    createButton({
      primary: true,
      label: 'Guardar',
      onClick: () => {
        document.body.removeChild(document.querySelector('.backdrop'));
        alert('Guardado correctamente');
      }
    }),
    createButton({
      secondary: true,
      label: 'Cancelar',
      onClick: () => {
        document.body.removeChild(document.querySelector('.backdrop'));
      }
    }),
  ],
};

export const Custom = Template.bind({});
Custom.args = {
  body: 'Este texto aparece dentro de la alerta modal',
};
