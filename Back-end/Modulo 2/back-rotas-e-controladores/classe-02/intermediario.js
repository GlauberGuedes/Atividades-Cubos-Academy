function travaDeSenha (req, res, next) {
    if(req.query.senha === "cubos123") {
        next();
    } else {
        res.status(401).json({erro: "senha incorreta."})
    }
}



module.exports = {travaDeSenha};