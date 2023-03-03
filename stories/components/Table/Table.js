import './table.css';

export const createTable = () => {
  const article = document.createElement('article');

  const section = `
    <div class="container table-wrapper">
      <table>
        <thead>
          <tr>
            <th><span>ID Malla</span></th>
            <th><span>Fecha</span></th>
            <th><span>Fecha de registro</span></th>
            <th><span>Bloque</span></th>
            <th><span>Lote</span></th>
            <th><span>Fichas</span></th>
            <th><span>Malla</span></th>
            <th><span>Estado</span></th>
            <th><span>Auxiliar</span></th>
            <th><span>Fisico</span></th>
            <th><span>Importado</span></th>
            <th><span>Importo</span></th>
            <th><span>Accion</span></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><span>467784</span></td>
            <td><span>08/10/2019</span></td>
            <td><span>08/10/2019 - 03:15</span></td>
            <td><span>005</span></td>
            <td><span>06</span></td>
            <td><span>400845</span></td>
            <td><span>340</span></td>
            <td><span>DG</span></td>
            <td><span>Soporteg</span></td>
            <td><span>F</span></td>
            <td><span>12/10/2019</span></td>
            <td><span>Soporteg</span></td>
            <td><span><i class="fa-solid fa-ellipsis-vertical"></i></span></td>
          </tr>

          <tr>
            <td><span>467784</span></td>
            <td><span>08/10/2019</span></td>
            <td><span>08/10/2019 - 03:15</span></td>
            <td><span>005</span></td>
            <td><span>06</span></td>
            <td><span>400845</span></td>
            <td><span>340</span></td>
            <td><span>DG</span></td>
            <td><span>Soporteg</span></td>
            <td><span>F</span></td>
            <td><span>12/10/2019</span></td>
            <td><span>Soporteg</span></td>
            <td><span><i class="fa-solid fa-ellipsis-vertical"></i></span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};
