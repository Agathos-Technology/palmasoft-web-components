import './field.css';

export const createField = () => {
  const article = document.createElement('article');

  const section = `
    <div>
      <h1>Field</h1>
    </div>
  `;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};
