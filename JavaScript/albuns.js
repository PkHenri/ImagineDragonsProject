document.addEventListener('DOMContentLoaded', function (){
    //referenciar elemento
        const btnSpotify = document.getElementById('btnSpotify');
        const btnDeezer = document.getElementById('btnDeezer');
        const btnYTM = document.getElementById('btnYTM');

        const btnVoltar = document.getElementById('btnVoltar');
        const btnAnterior = document.getElementById('btnAnterior');
        const btnProximo = document.getElementById('btnProximo');
    //listener para navegação
        btnVoltar.addEventListener('click', voltarMenu);
        btnAnterior.addEventListener('click', anterior);
        btnProximo.addEventListener('click', proximo)

        console.log(btnAnterior, btnProximo,btnSpotify, btnDeezer, btnYTM);

    //Arrey com as páginas dos albuns
        const paginasAlbuns = [
            '/ImagineDragonsProject/reflections.html',
            '/ImagineDragonsProject/loom.html',
            '/ImagineDragonsProject/mercury.html',
            '/ImagineDragonsProject/origins.html',
            '/ImagineDragonsProject/evolve.html',
            '/ImagineDragonsProject/nightvisions.html',
            '/ImagineDragonsProject/smokemirrors.html',
            '/ImagineDragonsProject/itstime.html',
            '/ImagineDragonsProject/hellandsilence.html',
            '/ImagineDragonsProject/imaginedragons.html'
        ];
    //Objeto contendo os links de cada album
        const linksAlbuns = {
            '/ImagineDragonsProject/reflections.html': {
                spotify: 'https://open.spotify.com/intl-pt/album/5IBigZKJt8uffeMjKw5uEl',
                deezer: 'https://www.deezer.com/en/album/712820501',
                ytm: 'https://music.youtube.com/playlist?list=OLAK5uy_lfYWpSWk2YbKYQNQEliW8tfYv4wU7IfMI'
            },
            '/ImagineDragonsProject/loom.html': {
                spotify: 'https://open.spotify.com/intl-pt/album/7EPrkhjTBrwAV8yAKCmY0Y',
                deezer: 'https://www.deezer.com/br/album/604614962',
                ytm: 'https://music.youtube.com/playlist?list=OLAK5uy_mAWpL2_R3tGLfDvxDyydWDnpdyANSoJJU'
            },
            '/ImagineDragonsProject/mercury.html': {
                spotify: 'https://open.spotify.com/intl-pt/album/6yiXkzHvC0OTmhfDQOEWtS',
                deezer: 'https://www.deezer.com/br/album/331818647',
                ytm: 'https://music.youtube.com/playlist?list=OLAK5uy_l6SZmomvvIoIRJ-czJvIEpegfU44ETC0U '
            },
            '/ImagineDragonsProject/origins.html': {
                spotify: 'https://open.spotify.com/intl-pt/album/3JfSxDfmwS5OeHPwLSkrfr',
                deezer: 'https://www.deezer.com/br/album/77648602',
                ytm: 'https://music.youtube.com/playlist?list=OLAK5uy_l1Nlu9ig4gBGrSxy3Q0_H6OHScYozR6D0'
            },
            '/ImagineDragonsProject/evolve.html': {
                spotify: 'https://open.spotify.com/intl-pt/album/33pt9HBdGlAbRGBHQgsZsU',
                deezer: 'https://www.deezer.com/br/album/68346981',
                ytm: 'https://music.youtube.com/playlist?list=OLAK5uy_n7O88V1oc-6l7MW_F53flLA9v2W0yHx1Y'
            },
            '/ImagineDragonsProject/nightvisions.html': {
                spotify: 'https://open.spotify.com/intl-pt/album/0LLA5YL3g2UReWlP7nWqGh',
                deezer: 'https://www.deezer.com/br/album/352677107',
                ytm: 'https://music.youtube.com/playlist?list=OLAK5uy_k9PV-um_nEVOhSlzu0Zs4k5BsJn40wLGE'
            },
            '/ImagineDragonsProject/smokemirrors.html': {
                spotify: 'https://open.spotify.com/intl-pt/album/0Ikw6ho559687KCPbSjr0K',
                deezer: 'https://www.deezer.com/br/album/9659730',
                ytm: 'https://music.youtube.com/playlist?list=OLAK5uy_kD_TFi2ox9HgJPyaK4rw9cqCLE2loq-8E'
            },
            '/ImagineDragonsProject/itstime.html': {
                spotify: 'https://open.spotify.com/intl-pt/album/2Y83alrj4BCOIjSWBrv1WZ',
                deezer: 'https://www.deezer.com/br/album/264279712',
                ytm: 'https://music.youtube.com/playlist?list=OLAK5uy_nnIFdddNqN3yCl0Ok2_2OU37SujlnpeNg'
            },
            '/ImagineDragonsProject/hellandsilence.html': {
                spotify: 'https://open.spotify.com/intl-pt/album/0q0BORsAWpbFNf7UqWwDbd',
                deezer: 'https://www.deezer.com/br/album/264271982',
                ytm: 'https://music.youtube.com/playlist?list=OLAK5uy_lH3UBrpuckY3tJ9b_jyAnWM4qulAUydkc'
            },
            '/ImagineDragonsProject/imaginedragons.html': {
                spotify: 'https://open.spotify.com/intl-pt/album/0cmKGBTMZndKAu5DW9mPUJ',
                deezer: 'https://www.deezer.com/br/album/264279402',
                ytm: 'https://music.youtube.com/playlist?list=OLAK5uy_mKqk-GSSFqHEzQ7D0YIKA7fmMnxG6upZA'
            },
        };
    //função para mudar os links
        function mudarLinks() {
            const paginaAtual = window.location.pathname;
            console.log('página atual:', paginaAtual);

            if (linksAlbuns[paginaAtual]) {
                btnSpotify.addEventListener('click', () => window.open(linksAlbuns[paginaAtual].spotify, '_blank'));
                btnDeezer.addEventListener('click', () => window.open(linksAlbuns[paginaAtual].deezer, '_blank'));
                btnYTM.addEventListener('click', () => window.open(linksAlbuns[paginaAtual].ytm, '_blank'));
            } else {
                console.warn('Nenhum link definido para esta página');
            }
        }   
    //funções de navegação
    
    function proximo (){
        console.log('botão proximo clicado');

        const paginaAtual = window.location.pathname;
        const indexAtual = paginasAlbuns.indexOf(paginaAtual);

        if (indexAtual !== -1 && indexAtual < paginasAlbuns.length -1) {
            window.location.href = paginasAlbuns[indexAtual + 1];
        } else if (indexAtual === paginasAlbuns.length -1) {
            window.location = paginasAlbuns[0];
        }
    }
    
    function anterior (){
        console.log('botão anterior clicado');

        const paginaAtual = window.location.pathname;
        const indexAtual = paginasAlbuns.indexOf(paginaAtual);

        if (indexAtual > 0) {
            window.location.href = paginasAlbuns[indexAtual -1];
        } else if (indexAtual === 0) {
            window.location.href = paginasAlbuns[paginasAlbuns.length -1];
        }
    }
    
    function voltarMenu (){
        window.location.href = 'index.html';
    }

    //Chama a função para definir os links certos
        mudarLinks();
    });