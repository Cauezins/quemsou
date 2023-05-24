
$(document).ready(function() {
    $.ajax({
        url: '/api/dados',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
          let users = data.users;
          users.forEach(i => {
              dados(i.nome, i.curso, i.interesse, i.soft, i.hard, i.linkedin, i.img);
          });
          console.log(data);
        },
        error: function(xhr, status, error) {
          console.log(error);
        }
      });
});

function dados(nome, curso, intere, soft, hard, linke, imge) {
    // Criação do elemento <div> principal com a classe "containerofPerfil"
    var containerDiv = document.createElement("div");
    containerDiv.classList.add("containerofPerfil");

    // Criação do elemento <div> com a classe "img"
    var imgDiv = document.createElement("div");
    imgDiv.classList.add("img");

    // Criação do elemento <img> e atribuição do atributo src
    var img = document.createElement("img");
    img.src = "src/img/"+imge;
    img.alt = "";

    // Adiciona a imagem à div "img"
    imgDiv.appendChild(img);

    // Criação do elemento <div> com a classe "main-aba-text"
    var mainDiv = document.createElement("div");
    mainDiv.classList.add("main-aba-text");

    // Criação do elemento <div> com a classe "nome" e texto
    var nomeDiv = document.createElement("div");
    nomeDiv.classList.add("nome");
    nomeDiv.textContent = nome;

    // Criação do elemento <div> com a classe "curso" e texto
    var cursoDiv = document.createElement("div");
    cursoDiv.classList.add("curso");
    cursoDiv.textContent = curso;

    // Criação do elemento <div> com a classe "intere" e texto
    var intereDiv = document.createElement("div");
    intereDiv.classList.add("intere");
    intereDiv.innerHTML = "<strong>Interesses:</strong> "+intere;

    // Criação do elemento <div> com a classe "soft" e texto
    var softDiv = document.createElement("div");
    softDiv.classList.add("soft");
    softDiv.innerHTML = "<strong>Soft skills:</strong> "+soft;

    // Criação do elemento <div> com a classe "hard" e texto
    var hardDiv = document.createElement("div");
    hardDiv.classList.add("hard");
    hardDiv.innerHTML = "<strong>Hard skills:</strong>"+hard;

    // Criação do elemento <div> com a classe "button"
    var buttonDiv = document.createElement("div");
    buttonDiv.classList.add("button");

    // Criação do elemento <a> com o atributo href e texto
    var link = document.createElement("a");
    link.href = linke;
    link.innerHTML = "<button>LinkedIn</button>";

    // Adiciona o botão ao elemento <a>
    buttonDiv.appendChild(link);

    // Adiciona todos os elementos criados ao elemento principal <div>
    mainDiv.appendChild(nomeDiv);
    mainDiv.appendChild(cursoDiv);
    mainDiv.appendChild(intereDiv);
    mainDiv.appendChild(softDiv);
    mainDiv.appendChild(hardDiv);
    mainDiv.appendChild(buttonDiv);
    containerDiv.appendChild(imgDiv);
    containerDiv.appendChild(mainDiv);
    document.getElementById('perfil').appendChild(containerDiv);

}

function search() {
    let search = document.getElementById('inputSearch').value;
    document.getElementById('perfil').innerHTML = '';
    if (search == '') {
        $.ajax({
            url: '/api/dados',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
              let users = data.users;
              users.forEach(i => {
                  dados(i.nome, i.curso, i.interesse, i.soft, i.hard, i.linkedin, i.img);
              });
              console.log(data);
            },
            error: function(xhr, status, error) {
              console.log(error);
            }
          });
    }else{
        $.ajax({
        url: '/api/dado?data='+search,
        type: 'POST',
        data: {data: search},
        dataType: 'json',
        success: function(data) {
            console.log(data);
            document.getElementById('perfil').innerHTML = '';
            let users = data;
            users.forEach(i => {
                dados(i.nome, i.curso, i.interesse, i.soft, i.hard, i.linkedin, i.img);
            });
            
        }
    });
    }
    
    
}