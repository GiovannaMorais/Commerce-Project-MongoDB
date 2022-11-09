db.produtos.find({ vendidos: { $gt: 50, $lt: 100 } }, { nome: 1, _id: 0, vendidos: 1 })
.sort({ vendidos: 1 });