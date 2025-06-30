const prisma = require('../db');

function parseOrderFromMessage(body) {
  const lines = body.trim().split('\n').map(line => line.trim());

  const order = {
    companyName: lines[0] || '',
    customerName: lines[1]?.split(':')[1]?.trim() || '',
    code: lines[2]?.split(':')[1]?.trim() || '',
    meshSize: lines[3]?.split(':')[1]?.trim() || '',
    depth: lines[4]?.split(':')[1]?.trim() || '',
    selvage: lines[5]?.split(':')[1]?.trim() || '',
    color: lines[6]?.split(':')[1]?.trim() || '',
    pieceWeight: lines[7]?.split(':')[1]?.trim() || '',
    quantity: lines[8]?.split(':')[1]?.trim() || '',
    orderNo: lines[9]?.split(':')[1]?.trim() || '',
    rate: lines[10]?.split(':')[1]?.trim() || '',
    notes: '', // You can set this later if needed
  };

  return order;
}

async function saveOrderFromMessage(message) {
  const orderData = parseOrderFromMessage(message);
  const savedOrder = await prisma.order.create({ data: orderData });
  return savedOrder;
}

module.exports = {
  parseOrderFromMessage,
  saveOrderFromMessage,
};
