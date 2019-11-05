const getView = (properties) => `
  <h2>Propiedades en venta</h2>
  <div class="propiedades">
    ${
      properties.map((property) => (`
        <div>
          <h1>${property.description} [${property.type}]</h1>
          <img src=${property.photo}>
          <p>${property.price}</p>
          <p><p><em>Moneda:</em>${property.currency}</p>
          <p><em>Sector:</em> ${property.sector ? property.sector : '-'}</p>
        </div>
      `)).join('')
    }
  </div>
`;

module.exports = { getView };