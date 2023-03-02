import './radio.css';

export const createRadio = () => {
  const article = document.createElement('article');

  const section = `
    <div>
      <h1>Radio</h1>
    </div>
  `;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};
