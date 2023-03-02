import './select.css';

export const createSelect = () => {
  const article = document.createElement('article');

  const section = `
    <div>
      <h1>Select</h1>
    </div>
  `;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};
