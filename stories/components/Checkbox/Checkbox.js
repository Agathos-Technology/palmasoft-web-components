import './checkbox.css';

export const createCheckbox = ({
  name,
  label,
  defaultChecked = false,
}) => {
  const wrapper = document.createElement('div');

  const section = `
    <div class="checkbox">
      <input id="${name}" type="checkbox" />
      <label for="${name}">${label}</label>
    </div>
  `;
  wrapper.insertAdjacentHTML('beforeend', section);

  wrapper.querySelectorAll('.checkbox input').forEach((checkbox) => {
    console.warn('forEach');
    checkbox.addEventListener('change', (event) => {
      const value = event.target.checked;
      console.warn('event');
      if (value) {
        checkbox.classList.add('checked');
      } else {
        checkbox.classList.remove('checked');
      }
    });
  });

  return wrapper;
};
