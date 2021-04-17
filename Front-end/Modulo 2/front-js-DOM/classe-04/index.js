const carouselImg = document.querySelector('.carousel__img');
    const reviewText = document.querySelector('.review-text');
    const autorNome = document.querySelector('.author__name');
    const autorTitulo = document.querySelector('.author__title');
    function pessoaAnterior() {
        for(let i = 0; i < pessoas.length; i++) {
        if (pessoas[0].nome === autorNome.innerText) {
            carouselImg.src = pessoas[pessoas.length - 1].foto;
            reviewText.innerText = pessoas[pessoas.length - 1].descricao;
            autorNome.innerText = pessoas[pessoas.length - 1].nome;
            autorTitulo.innerText = pessoas[pessoas.length - 1].profissao;
            break;
        } else if(autorNome.innerText === pessoas[i].nome) {
            carouselImg.src = pessoas[i - 1].foto;
            reviewText.innerText = pessoas[i - 1].descricao;
            autorNome.innerText = pessoas[i - 1].nome;
            autorTitulo.innerText = pessoas[i - 1].profissao;
            break;
        }
    } 
    }
    function proximaPessoa() {
        for(let i = 0; i < pessoas.length; i++) {
        if (pessoas[pessoas.length - 1].nome === autorNome.innerText) {
            carouselImg.src = pessoas[0].foto;
            reviewText.innerText = pessoas[0].descricao;
            autorNome.innerText = pessoas[0].nome;
            autorTitulo.innerText = pessoas[0].profissao;
            break;
        } else if(autorNome.innerText === pessoas[i].nome) {
            carouselImg.src = pessoas[i + 1].foto;
            reviewText.innerText = pessoas[i + 1].descricao;
            autorNome.innerText = pessoas[i + 1].nome;
            autorTitulo.innerText = pessoas[i + 1].profissao;
            break;
        }
    } 
    }