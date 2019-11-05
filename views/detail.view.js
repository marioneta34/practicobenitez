const getView = (property) => `
  <h2>Detalle de la propiedad</h2>
  <div>
          <h1>${property.description} [${property.type}]</h1>
          <img src=${property.photo}>
          <p>${property.price}</p>
          <p><p><em>Moneda:</em>${property.currency}</p>
          <p><em>Sector:</em> ${property.sector ? property.sector : '-'}</p>
        </div>
`;

module.exports = { getView };