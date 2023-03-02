import './checkbox.css';

export const createCheckbox = () => {
  const article = document.createElement('article');

  const section = `
    <div>
      <h1>Checkbox</h1>
    </div>
  `;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};
