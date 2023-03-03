import './dialog.css';

export const createDialog = ({
  fields = [],
  actions = [],
  body,
  dismissible = true,
}) => {
  const backdrop = document.createElement('div');
  backdrop.className = 'backdrop';
  backdrop.style.zIndex = 2;
  if (dismissible) {
    backdrop.onclick = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const box = document.querySelector('.alert-custom.box');
      const boxX = box.offsetLeft;
      const boxY = box.offsetTop;
      const boxWidth = box.offsetWidth;
      const boxHeight = box.offsetHeight;
      const isClickInside = mouseX > boxX && mouseX < boxX + boxWidth && mouseY > boxY && mouseY < boxY + boxHeight;
      if (!isClickInside) {
        document.body.removeChild(backdrop);
      }
    };
  }

  const box = document.createElement('div');
  box.className = 'alert-custom box';

  if (body) {
    box.innerHTML = body;
  }

  if (fields.length) {
    const $ = document.createElement('form');
    $.className = 'alert-custom__form';
    fields.forEach(field => {
      $.appendChild(field);
    });
    box.appendChild($);
  }

  if (actions.length) {
    const $ = document.createElement('div');
    $.className = 'alert-custom__footer';
    actions.forEach(action => {
      $.appendChild(action);
    });
    box.appendChild($);
  }

  backdrop.insertAdjacentElement('beforeend', box);

  const launcher = document.createElement('button');
  launcher.className = 'btn btn--primary';
  launcher.innerText = 'Abrir alerta';
  launcher.onclick = () => {
    document.body.appendChild(backdrop);
  };

  return launcher;
};
