var imageWidth = 2048;  // largura em pixels
var imageHeight = 1536;  // altura em pixels

// Coordenadas das bordas da imagem
var imageBounds = [[0, 0], [imageHeight, imageWidth]];

// Inicializar o mapa
var map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -0.2,  // Ajuste o zoom mínimo conforme necessário
  maxZoom: 2,   // Ajuste o zoom máximo conforme necessário
  zoomControl: false,
  maxBounds: imageBounds,
  maxBoundsViscosity: 1.0
});

// Adicionar controle de zoom
L.control.zoom({
  position: 'topright'
}).addTo(map);

// Caminho para a imagem no mesmo diretório
var imageUrl = 'Úbria.jpg';  
// Adicionar a imagem como overlay
L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Ajustar a visão do mapa para os limites da imagem e definir o zoom para mostrar toda a imagem
var initialZoom = map.getBoundsZoom(imageBounds);
map.setView([imageHeight / 2, imageWidth / 2], initialZoom);

// Impedir que o usuário dê zoom out a ponto de deixar o mapa menor que o contêiner
map.on('zoomend', function() {
  if (map.getZoom() < -1) {
    map.setZoom(-1);
  }
});


var pontosDeInteresse = [
//Ferrox
    {
      nome: "Ferrox",
      latlng: [1082 , 1407],
      descricao: "O Bastião do Ferro, ergue-se nas ruínas de uma antiga metrópole élfica, rodeada por uma densa floresta de sequoias. As muralhas de rochas negras infundidas com Ferro são tão impenetráveis quanto o espírito de seu povo. Os moradores, conhecidos por sua determinação e tenacidade, avançam continuamente em tecnologias de guerra. As ruas de pedras escuras são iluminadas por tochas, enquanto a Arena do Sol, o coração da cidade, é onde os bravos se reúnem para competir e honrar seus deuses em combates espetaculares. Ferrox é uma cidade de força, resistência e engenhosidade, onde o passado e o presente se entrelaçam.",
      imagem: "imagens/Ferrox.jpg"
    },
    {
        nome: "Vento Sul",
        latlng: [1013, 1349.5],
        descricao: "Uma pequena vila rural, estrategicamente situada como um ponto de descanso entre Ferrox e Alveron. Rodeada por vastos campos verdejantes e colinas suaves, a cidade é habitada principalmente por fazendeiros dedicados e alguns comerciantes itinerantes. Sua atmosfera tranquila e acolhedora oferece refúgio aos viajantes que buscam repouso em suas jornadas pela região.",
        imagem: "imagens/VentoSul.jpg"
    },
    {
        nome: "Vento Norte",
        latlng: [1227, 1398], 
        descricao: "Cidade portuária que serve como centro logístico vital para Ferrox. Localizada estrategicamente às margens de um amplo porto, a cidade é um ponto de convergência para mercadores, marinheiros e viajantes que buscam comércio e conexões marítimas. A vida na cidade gira em torno das atividades portuárias, com armazéns movimentados, docas ocupadas e uma vibrante rede de comércio. Vento Norte desempenha um papel essencial na economia regional.",
        imagem: "imagens/VentoNorte.jpg"
    },

//Titanium
    {
      nome: "Titanium",
      latlng: [1162.25, 1010.5],
      descricao: "Onde o arcano e a tecnologia se encontram, Titanium preza pela liberdade de pensamento e inovação. A cidade é um centro vibrante onde magos e cientistas trabalham lado a lado, desenvolvendo novas formas de tecnologia mágica. Os habitantes de Titanium valorizam a criatividade e a expressão livre, fazendo da cidade um local de constantes descobertas e avanços. As ruas são iluminadas por luminárias alimentadas por energia mágica, e as praças estão repletas de inventores exibindo suas últimas criações. Titanium é um farol de progresso em um mundo onde o tradicional e o moderno coexistem harmoniosamente.",
      imagem: "imagens/Titanium.jpg"
    },
    {
        nome: "Costa Esmeralda",
        latlng: [1141, 1226],
        descricao: "Costa Esmeralda é uma animada cidade portuária que vive em função do mar. Expedições e barcos de comércio entram e saem continuamente, mantendo a cidade em constante movimento. Seus habitantes incluem pescadores habilidosos, marinheiros experientes e comerciantes astutos, todos dependentes das riquezas oceânicas. As ruas estão sempre cheias de mercadorias exóticas, e o aroma de peixe fresco se mistura com o sal do mar, criando uma atmosfera única. Costa Esmeralda é uma cidade dinâmica, onde o mar dita o ritmo da vida cotidiana.",
        imagem: "imagens/CostaEsmeralda.jpg"
    },
    {
        nome: "Molteran",
        latlng: [1049, 1080],
        descricao: "Molteran é uma cidade construída no ponto mais baixo entre duas montanhas, praticamente no subterrâneo. Vibrantes cristais nascem nessa fenda e pintam a cidade com diversas cores, criando um espetáculo visual único. No entanto, a vida em Molteran é perigosa. Os habitantes enfrentam constantes ameaças das instáveis formações rochosas e das criaturas que habitam as profundezas. Apesar dos desafios, os moradores são resilientes e habilidosos na mineração e na manipulação dos cristais, utilizando-os para iluminar a cidade e alimentar suas tecnologias. Molteran é um lugar de beleza e perigo, onde a sobrevivência depende da engenhosidade e coragem de seu povo.",
        imagem: "imagens/Molteran.jpg"
    },
//Alveron
    {
        nome: "Alveron",
        latlng: [928.25, 1278],
        descricao: "Alveron é uma imponente cidade construída com pedras brancas, a mais nova das cidades-estados. Conquistada com o suor e trabalho duro de seu povo, Alveron se ergue como um símbolo de perseverança e determinação. Suas ruas amplas e edifícios majestosos refletem a dedicação e o esforço coletivo dos habitantes. A cidade é conhecida por sua arquitetura grandiosa e pela atmosfera de progresso e esperança que permeia suas muralhas. Alveron é uma cidade que orgulhosamente exibe o poder do trabalho árduo e da união de seu povo.",
        imagem: "imagens/Alveron.jpg"
    },

//Riviere
{
    nome: "Riviere",
    latlng: [780, 1495],
    descricao: "Descrição do Local B",
    imagem: "imagens/Riviere.jpg"
},
{
    nome: "Baloren",
    latlng: [957, 1595],
    descricao: "Descrição do Local B",
    imagem: "imagens/Baloren.jpg" 
},
{
    nome: "Morun",
    latlng: [643, 1642],
    descricao: "Descrição do Local B",
    imagem: "imagens/Morun.jpg"
},
{
    nome: "Garibal",
    latlng: [696, 1399],
    descricao: "Descrição do Local B",
    imagem: "imagens/Garibal.jpg"
},

//Ishaval
{
    nome: "Ishaval",
    latlng: [363, 864],
    descricao: "Descrição do Local B",
    imagem: "imagens/Ishaval.jpg"
},
{
    nome: "La Verkin",
    latlng: [602, 648],
    descricao: "Descrição do Local B",
    imagem: "imagens/LaVerkin.jpg"
},
{
    nome: "Damascus",
    latlng: [556, 822],
    descricao: "Descrição do Local B",
    imagem: "imagens/Damascus.jpg"
},
{
    nome: "Muscat",
    latlng: [352, 1114],
    descricao: "Descrição do Local B",
    imagem: "imagens/Muscat.jpg"
},

//Aerugo
{
    nome: "Aerugo",
    latlng: [810, 1030],
    descricao: "Descrição do Local B",
    imagem: "imagens/Aerugo.jpg"
},
{
    nome: "Salem",
    latlng: [905, 944],
    descricao: "Descrição do Local B",
    imagem: "imagens/Salem.jpg"
},
{
    nome: "Basra",
    latlng: [712, 998],
    descricao: "Descrição do Local B",
    imagem: "imagens/Basra.jpg"
},

//Agudar
{
    nome: "Agudar",
    latlng: [958, 843],
    descricao: "Descrição do Local B",
    imagem: "imagens/Agudar.jpg"
},

//Dracma
{
    nome: "Dracma",
    latlng: [1180, 713],
    descricao: "Descrição do Local B",
    imagem: "imagens/Dracma.jpg"
},
{
    nome: "Dorun",
    latlng: [1088, 767],
    descricao: "Descrição do Local B",
    imagem: "imagens/Dorun.jpg"
},
{
    nome: "Nortun",
    latlng: [1390, 482],
    descricao: "Descrição do Local B",
    imagem: "imagens/Nortun.jpg"
},

//Reole
{
    nome: "Reole",
    latlng: [802, 740],
    descricao: "Descrição do Local B",
    imagem: "imagens/Reole.jpg"
},
{
    nome: "Porto Velho",
    latlng: [1044, 595],
    descricao: "Descrição do Local B",
    imagem: "imagens/PortoVelho.jpg"
},
{
    nome: "Arnedos",
    latlng: [866, 607],
    descricao: "Descrição do Local B",
    imagem: "imagens/Arnedos.jpg"
},

//Solan
{
    nome: "Solan",
    latlng: [712, 435],
    descricao: "Descrição do Local B",
    imagem: "imagens/Solan.jpg"
},
{
    nome: "Chelo",
    latlng: [848, 441],
    descricao: "Descrição do Local B",
    imagem: "imagens/Chelo.jpg"
},

//Kaelun
{
    nome: "Kaelun",
    latlng: [691, 1242],
    descricao: "Descrição do Local B",
    imagem: "imagens/Kaelun.jpg"
},
{
    nome: "Doha",
    latlng: [544, 1351],
    descricao: "Descrição do Local B",
    imagem: "imagens/Doha.jpg"
},
{
    nome: "Najera",
    latlng: [592, 1031],
    descricao: "Descrição do Local B",
    imagem: "imagens/Najera.jpg"
},

//Fushimo
{
    nome: "Fushimo",
    latlng: [316, 1457],
    descricao: "Descrição do Local B",
    imagem: "imagens/Fushimo.jpg"
},
{
    nome: "Konan",
    latlng: [261, 1264],
    descricao: "Descrição do Local B",
    imagem: "imagens/Konan.jpg"
},
{
    nome: "Kasugai",
    latlng: [489, 1609],
    descricao: "Descrição do Local B",
    imagem: "imagens/Kasugai.jpg"
},

//Tlacopan
{
    nome: "Tlacopan",
    latlng: [367, 582],
    descricao: "Descrição do Local B",
    imagem: "imagens/Tlacopan.jpg"
},
{
    nome: "Tulum",
    latlng: [279, 973],
    descricao: "Descrição do Local B",
    imagem: "imagens/Tulum.jpg"
},
{
    nome: "Uxmal",
    latlng: [205, 670],
    descricao: "Descrição do Local B",
    imagem: "imagens/Uxmal.jpg"
},

//Pontos de interesse no mapa
{
    nome: "Tumba de Nozeran",
    latlng: [1019, 1425],
    descricao: "Onde tudo começou...",
    imagem: "imagens/TumbadeNozeran.jpg"
},
{
    nome: "Caverna do Sapo",
    latlng: [1050, 1222],
    descricao: "Cuidado com o que espreita na floresta...",
    imagem: "imagens/CavernadoSlaad.jpg"
},

  ];
  
  var invisibleIcon = L.divIcon({
    className: 'invisible-icon'
});

// Adicione marcadores com o ícone invisível aos pontos de interesse
pontosDeInteresse.forEach(function(ponto) {
    var marker = L.marker(ponto.latlng, { icon: invisibleIcon })
        .addTo(map)
        .bindPopup('<div style="text-align: center;">' +
            '<img src="' + ponto.imagem + '" style="width: 300px; height: auto; max-width: none;">' +  // Ajuste a largura conforme necessário
            '<br><b>' + ponto.nome + '</b><br>' +
            ponto.descricao +
            '</div>', {
                maxWidth: 400,  // Ajuste a largura máxima do popup conforme necessário
                autoPan: true,  // Ativar ajuste automático do popup
                autoPanPadding: [50, 50],  // Ajustar o espaço adicional ao redor do popup
            });
});

// Add event listener for click on the map
map.on('click', function(e) {
    var latlng = e.latlng; // e.latlng contains the coordinates where the click event occurred
    console.log('Clicked at:', latlng.lat, latlng.lng);
  });