//CONSTANTES PARA O PERSONAGEM ALEATÓRIO 1//
const sectionUm = document.getElementById('personagem-um');                        //constante com SESSÃO DE PERSONAGEM//
const nomePersonagemUm = document.getElementById('nome-personagem-um');  //constante com NOME DE PERSONAGEM//
const fotoPersonagemUm = document.getElementById('imagem-p-um');                //constante com IMAGEM DE PERSONAGEM//
const especieUM = document.getElementById ('especie-um');                       //constante com ESPECIE DE PERSONAGEM//
const statusUm = document.getElementById ('status-p-um');                      //constante com STATUS DE PERSONAGEM//
const generoUm = document.getElementById ('genero-um');                       //constante com GENERO DO PERSONAGEM//

//CONSTANTES PARA O PERSONAGEM ALEATÓRIO 2//
const sectionDois = document.getElementById('personagem-dois');
const nomePersonagemDois = document.getElementById ('nome-personagem-dois');
const fotoPersonagemDois = document.getElementById ('imagem-p-dois');
const especieDois = document.getElementById ('especie-dois');
const statusDois = document.getElementById ('status-p-dois');
const generoDois = document.getElementById ('genero-dois');

//CONSTANTES PARA O PERSONAGEM ALEATÓRIO 3//
const sectionTres = document.getElementById('personagem-tres');
const nomePersonagemTres = document.getElementById ('nome-personagem-tres');
const fotoPersonagemTres = document.getElementById ('imagem-p-tres');
const especieTres = document.getElementById ('especie-tres');
const statusTres = document.getElementById ('status-p-tres');
const generoTres = document.getElementById ('genero-tres');


//CONSTANTES PARA O PERSONAGEM ALEATÓRIO 4//
const sectionQuatro = document.getElementById('personagem-quatro');
const nomePersonagemQuatro = document.getElementById ('nome-personagem-quatro');
const fotoPersonagemQuatro = document.getElementById ('imagem-p-quatro');
const especieQuatro = document.getElementById ('especie-quatro');
const statusQuatro = document.getElementById ('status-p-quatro');
const generoQuatro = document.getElementById ('genero-quatro');

//CONSTANTES PARA OS QUATRO BOTÕES//
const dados = document.getElementById ('dados');
const botao = document.getElementById('seta');

const dadosDois = document.getElementById ('dados-dois');
const botaoDois = document.getElementById('seta-dois');

const dadosTres = document.getElementById ('dados-tres');
const botaoTres = document.getElementById('seta-tres');

const dadosQuatro = document.getElementById ('dados-quatro');
const botaoQuatro = document.getElementById('seta-quatro');


    //GERADORES DE NÚMEROS ALEATÓRIOS//

numAleatorioUm = () => {
    return Math.floor(Math.random() * 671);
}

numAleatorioDois = () => {
    return Math.floor(Math.random() * 671);
}

numAleatorioTres = () => {
    return Math.floor(Math.random() * 671);
}

numAleatorioQuatro = () => {
    return Math.floor(Math.random() * 671);
}


    //FUNÇÕES PARA PEGAR DADOS DA API//

pegarPersonagemUm = () => {
    let numeroAleatorioUm = numAleatorioUm(); 
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorioUm}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }    
    }).then((Response) => Response.json()).then((data) => {
        fotoPersonagemUm.src = data.image;
        nomePersonagemUm.innerHTML = data.name;
        especieUM.innerHTML = data.species;
        statusUm.innerHTML = data.status;
        generoUm.innerHTML = data.gender;
        
    });
}

pegarPersonagemDois = () => {
    let numeroAleatorioDois = numAleatorioDois(); 
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorioDois}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }    
    }).then((Response) => Response.json()).then((data) => {
        fotoPersonagemDois.src = data.image;
        nomePersonagemDois.innerHTML = data.name;
        especieDois.innerHTML = data.species;
        statusDois.innerHTML = data.status;
        generoDois.innerHTML = data.gender;
    });
}

pegarPersonagemTres = () => {
    let numeroAleatorioTres = numAleatorioTres(); 
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorioTres}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }    
    }).then((Response) => Response.json()).then((data) => {
        fotoPersonagemTres.src = data.image;
        nomePersonagemTres.innerHTML = data.name;
        especieTres.innerHTML = data.species;
        statusTres.innerHTML = data.status;
        generoTres.innerHTML = data.gender;
    });
}

pegarPersonagemQuatro = () => {
    let numeroAleatorioQuatro = numAleatorioQuatro(); 
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorioQuatro}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }    
    }).then((Response) => Response.json()).then((data) => {
        fotoPersonagemQuatro.src = data.image;
        nomePersonagemQuatro.innerHTML = data.name;
        especieQuatro.innerHTML = data.species;
        statusQuatro.innerHTML = data.status;
        generoQuatro.innerHTML = data.gender;
    });
}


    //FUNÇÃO GERAL PARA CHAMAR TODOS OS DADOS AO MESMO TEMPO QUANDO A TELA É ATUALIZADA//

carregar = () => {
    pegarPersonagemUm();
    pegarPersonagemDois();
    pegarPersonagemTres();
    pegarPersonagemQuatro();
}

   //COMANDO PARA CARREGAR FUNÇÃO GERAL AO ATUALIZAR A PÁGINA//
document.onload = carregar();

  
   //FUNÇÕES PARA COMANDOS AO APERTAR BOTÃO DE SETA//

aparecerDados = () => {
    dados.style.display = 'inline';
    dados.style.opacity = 1;
    botao.style.display = 'none';
    sectionUm.style.width = '450px'
    sectionUm.style.backgroundColor = 'rgba(144, 27, 160, 0.705)';
}

aparecerDadosDois = () => {
    dadosDois.style.display = 'inline';
    dadosDois.style.opacity = 1;
    botaoDois.style.display = 'none';
    sectionDois.style.width = '450px';
    sectionDois.style.backgroundColor = 'rgba(144, 27, 160, 0.705)';
}

aparecerDadosTres = () => {
    dadosTres.style.display = 'inline';
    dadosTres.style.opacity = 1;
    botaoTres.style.display = 'none';
    sectionTres.style.width = '450px';
    sectionTres.style.backgroundColor = 'rgba(144, 27, 160, 0.705)';
}

aparecerDadosQuatro = () => {
    dadosQuatro.style.display = 'inline';
    dadosQuatro.style.opacity = 1;
    botaoQuatro.style.display = 'none';
    sectionQuatro.style.width = '450px';
    sectionQuatro.style.backgroundColor = 'rgba(144, 27, 160, 0.760)';
}


    //COMANDO PARA CHAMAR FUNÇÕES AO APERTAR O BOTÃO//

botao.onclick = aparecerDados;

botaoDois.onclick = aparecerDadosDois;

botaoTres.onclick = aparecerDadosTres;

botaoQuatro.onclick = aparecerDadosQuatro;