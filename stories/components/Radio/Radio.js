import './radio.css';

export const createRadio = () => {
  const article = document.createElement('article');

  const section = `
    <div>
      <input id="radio-1" class="radio-custom" name="radio-group" type="radio" checked>
      <label for="radio-1" class="radio-custom-label">First Choice</label>
    </div>
    <div>
      <input id="radio-2" class="radio-custom"name="radio-group" type="radio">
      <label for="radio-2" class="radio-custom-label">Second Choice</label>
    </div>
    <div>
      <input id="radio-3" class="radio-custom" name="radio-group" type="radio">
      <label for="radio-3" class="radio-custom-label">Third Choice</label>
    </div>
  `;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};
