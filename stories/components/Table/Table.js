import './table.css';

export const createTable = () => {
  const article = document.createElement('article');

  const section = `
    <div>
      <h1>Table</h1>
    </div>
  `;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};
