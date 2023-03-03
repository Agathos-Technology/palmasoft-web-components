import './button.css';

export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  disabled,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerHTML = label;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'btn--primary' : 'btn--secondary';
  btn.className = ['btn', `btn--${size}`, mode].join(' ');

  btn.style.backgroundColor = backgroundColor;
  btn.disabled = disabled;

  return btn;
};
