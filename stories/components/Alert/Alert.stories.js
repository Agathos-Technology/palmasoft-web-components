import { createAlert } from './Alert';

export default {
  title: 'Example/Modal/Alerts',
  argTypes: {},
};

const Template = (args) => createAlert(args);

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  title: 'Información',
  message: 'Este texto aparece dentro de la alerta modal',
  action: 'Cerrar'
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  title: 'Alerta',
  message: 'Este texto aparece dentro de la alerta modal',
  action: 'Cerrar'
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  title: 'Oh no Error!',
  message: 'Se ha cometido, y ha creado un informe de error',
  action: 'Ok'
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  title: 'Muy bien!',
  message: 'Se ha guardado correctamente',
  action: 'Hecho'
};
