import './alert.css';

export const createAlert = ({
  type = 'info',
  title = 'Información',
  message = 'Este texto aparece dentro de la alerta modal',
  action = 'Cerrar',
}) => {
  // Backdrop
  const backdrop = document.createElement('div');
  backdrop.className = 'backdrop';
  const content = document.createElement('div');
  content.className = ['alert', `alert--${type}`].join(' ');
  // Modal components
  const $action = document.createElement('button');
  $action.className = ['btn', `btn--${type}`].join(' ');
  $action.innerText = action.toUpperCase();
  $action.onclick = () => {
    document.body.removeChild(backdrop);
  };

  const icons = {
    warning: 'triangle-exclamation',
    error: 'xmark',
    success: 'check',
    info: 'info',
  };

  content.innerHTML = `
    <div class="alert--icon">
      <i class="fa-solid fa-${icons[type]}"></i>
    </div>
    <div class="alert--header">
      <h3>${title}</h3>
    </div>
    <div class="alert--body">
      <p>${message}</p>
    </div>
  `;

  content.insertAdjacentElement('beforeend', $action);
  backdrop.insertAdjacentElement('beforeend', content);

  // Trigger
  const launcher = document.createElement('button');
  launcher.className = 'btn btn--primary';
  launcher.innerText = 'Abrir alerta';
  launcher.onclick = () => {
    document.body.appendChild(backdrop);
  };

  return launcher;
};
