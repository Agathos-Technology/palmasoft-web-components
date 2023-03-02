import './box.css';

export const createBox = () => {
  const article = document.createElement('article');

  const section = `
    <div>
      <h1>Box</h1>
    </div>
  `;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};
