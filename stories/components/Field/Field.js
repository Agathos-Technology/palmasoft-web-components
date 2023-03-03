import './field.css';

export const createField = ({
  type = 'text',
  name = 'field',
  label = 'Field',
  required = false,
  icon = null,
}) => {
  const wrapper = document.createElement('div');
  wrapper.className = ['form-group', icon ? 'has-icon' : ''].join(' ');
  const input = document.createElement('input');
  input.name = name;
  input.type = type;
  input.classList.add('form-input');
  input.required = true;

  const section = `
    ${input.outerHTML}
    <label for="${name}" class="animated-label">${label}</label>
    <div></div>
    <span class="form-error"></span>
    ${icon ? icon : ''}
  `;

  wrapper.insertAdjacentHTML('beforeend', section);
  wrapper.querySelectorAll('.form-group input').forEach((formGroup) => {
    formGroup.addEventListener('blur', (event) => {
      const value = event.target.value;
      const error = formGroup.parentElement.querySelector('.form-error');

      if (required && !value.length) {
        formGroup.classList.add('has-error');
        error.innerHTML = 'Campo requerido';
        return;
      } else {
        formGroup.classList.remove('has-error');
        error.innerHTML = '';
      }

      const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      if (type === 'email' && !isValidEmail) {
        formGroup.classList.add('has-error');
        error.innerHTML = 'Email no válido';
      } else {
        formGroup.classList.remove('has-error');
        error.innerHTML = '';
      }
    });

    formGroup.addEventListener('change', (event) => {
      const value = event.target.value;
      if (!!value.length) {
        formGroup.classList.add('has-value');
      } else {
        formGroup.classList.remove('has-value');
      }
    });
  })

  return wrapper;
};
