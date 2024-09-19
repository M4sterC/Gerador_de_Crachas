const form = document.getElementById('form')
const cabecalho = document.getElementById('cabecalho')
const usuario = document.getElementById('usuário')
const senha = document.getElementById('senha')
const rodape = document.getElementById('rodape')

form.addEventListener('submit', function(e){
    e.preventDefault()
    gerarComanda()
})

function gerarComanda() {

        let divCracha = document.getElementById('vizualizacao');

        let xCabec = document.getElementById('cabecalho').value;
        let xUsu = document.getElementById('usuário').value;
        let xSenha = document.getElementById('senha').value;
        let xComprimento = document.getElementById('comprimento').value;
        let xAltura = document.getElementById('altura').value;
        let xRodape = document.getElementById('rodape').value;
        let xHTML = ''
        
        xHTML += '<div class="cracha" style=\"width:'+ xComprimento + 'cm;height:' + xAltura + 'cm;\">';
        xHTML += '<div class="divCabecalho">' + xCabec + '</div>';
        xHTML += '<img src="http://webservices.saurus.net.br/retCodigo.aspx?tpCodigo=barras&vCodReal=/' + xUsu + '-' + xSenha + '" />';
        xHTML += '<div class="divUsuario">' + xUsu + '</div>';
        xHTML += '<div class="divRodape">' + xRodape + '</div>';
        xHTML += '</div>';

        divCracha.innerHTML = xHTML;

}