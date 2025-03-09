document.addEventListener('DOMContentLoaded', function (){
//Objeto que mapeia cada botão para uma página
    const paginas = {
        btnReflections: 'reflections.html',
        btnLoom: 'loom.html',
        btnMercury: 'mercury.html',
        btnOrigins: 'origins.html',
        btnEvolve: 'evolve.html',
        btnNightVisions: 'nightvisions.html',
        btnSmokeMirrors: 'smokemirrors.html',
        btnItsTime: 'itstime.html',
        btnHellAndSilence: 'hellandsilence.html',
        btnImagineDragons: 'imaginedragons.html'
    };
//evento de clique para cada página
    Object.keys(paginas).forEach(id => {
        const botao = document.getElementById(id);
        if (botao) {
            botao.addEventListener('click', function () {
                mudarPagina(paginas[id]);
            });
        }
    });
//função para redirecionar para a página correta
    function mudarPagina (destino){
        window.location.href = destino;
    }
});