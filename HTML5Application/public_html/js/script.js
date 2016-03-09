/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var igor = "Igor";

function opa(){
    var vetor = ["Laura1", "Laura2", "Jessica", "Jennifer (Lyssa)","Arthur"];
    for (var i = 0; i < vetor.length; i++){
        //vetor[i] = "teste";
        alert(vetor[i]);
    }
}

function trocaImagem(){
    // muda o atributo src da imagem que possui o id = imagem
    document.getElementById("imagem").src = "./images/deadpool2.jpg";
    // mudar o tamanho da largura da imagem
    document.getElementById("imagem").style = "width: 50px;";
}