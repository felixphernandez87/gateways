import { Gateway } from '../gateways/model.js';
import { Product } from '../products/model.js';

const showReport = async (req, res) => {
  try {
    const gateways = await Gateway.find();
    const products = await Product.find();

    const gatewayRows = gateways
      .map((g) => `<tr><td>${g.name}</td><td>${g.ip}</td><td>${g.devices.length}</td></tr>`) 
      .join('');

    const productRows = products
      .map((p) => `<tr><td>${p.name}</td><td>${p.price}</td></tr>`) 
      .join('');

    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Report</title>
  <style>
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ccc; padding: 4px; }
  </style>
</head>
<body>
  <h1>Gateways</h1>
  <table>
    <tr><th>Name</th><th>IP</th><th>Devices</th></tr>
    ${gatewayRows}
  </table>
  <h1>Products</h1>
  <table>
    <tr><th>Name</th><th>Price</th></tr>
    ${productRows}
  </table>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

export { showReport };
