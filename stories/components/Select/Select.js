import './select.css';

export const createSelect = () => {
  const article = document.createElement('article');

  const section = `
    <div class="select-wrapper">
      <select>
          <option selected> Select Box </option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Last long option</option>
      </select>
    </div>
  `;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};
