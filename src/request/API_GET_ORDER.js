//ORDER
fetch('../../../conf.js')
.then(response => response.json())
.then(config => {
  fetch(`${config.url_order}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${config.token}`,
    }
  })
  .then(response => response.json())
  .then(data => {
    const orderList = document.getElementById('order-list');
    data.forEach((order) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
      <td>${order.id_order}</td>
      <td>${order.id_client}</td>
      <td>${order.id_picker}</td>
      <td>${order.order_state}</td>
      <td>${order.date}</td>
      `;
      orderList.appendChild(tr);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
})
.catch((error) => {
  console.error('Error:', error);
});
//FIN ORDER