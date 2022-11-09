db.produtos.updateMany({}, { $rename: { descricao: "descricaoSite" } });
db.produtos.find({}, { nome: 1, _id: 0, descricaoSite: 1 });