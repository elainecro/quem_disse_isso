// Cartas do baralho "Isso é bom ou ruim?".
// numero: número original da carta no PDF (não aparece no jogo, porque entrega a resposta).
// link: endereço lido do QR Code do verso.
// video: endereço direto do vídeo (YouTube, Instagram ou TikTok). Quando preenchido,
//        o vídeo aparece embutido na página. Enquanto estiver null, a página mostra
//        um botão que abre o link do QR Code.
const QUEM = {
  lula: "Lula",
  flavio: "Flávio Bolsonaro",
};

const CARTAS = [
  { numero: 1,  quem: "lula",   tema: "economia",            frase: "O Brasil tem um único dono: o povo brasileiro.", link: "https://tr.ee/P3CnvVp1fQ0i", video: null },
  { numero: 2,  quem: "lula",   tema: "economia",            frase: "Defender nossas riquezas é defender nossa soberania.", link: "https://tr.ee/Uii3CdShBwxl", video: null },
  { numero: 3,  quem: "lula",   tema: "direitostrabalhistas", frase: "Adotar jornada de trabalho com duas folgas por semana, sem redução de salário.", link: "https://tr.ee/RuBjxDsa20u6", video: null },
  { numero: 4,  quem: "lula",   tema: "seguranca",           frase: "Fortalecer a autonomia da Polícia Federal.", link: "https://tr.ee/dHGAbK07EeNi", video: null },
  { numero: 5,  quem: "lula",   tema: "seguranca",           frase: "Combater o crime organizado, atacando as suas fontes financeiras.", link: "https://tr.ee/lmLDolxxmbe8", video: null },
  { numero: 6,  quem: "lula",   tema: "educacao",            frase: "Aumentar vagas nas universidades.", link: "https://tr.ee/6Y0k0NSEqYAf", video: null },
  { numero: 7,  quem: "lula",   tema: "educacao",            frase: "Manter cotas para Indígenas, Quilombolas e Negros nas universidades e concursos públicos.", link: "https://tr.ee/Cp5ld7d74eJz", video: null },
  { numero: 8,  quem: "lula",   tema: "reformatributaria",   frase: "Cobrar impostos dos super-ricos para melhorar saúde, educação e segurança.", link: "https://tr.ee/QHoDIaW0s76S", video: null },
  { numero: 9,  quem: "lula",   tema: "soberania",           frase: "Regular as redes sociais para preservar a Democracia e combater as fake news e os crimes digitais.", link: "https://tr.ee/uAb6X5qlvgko", video: null },
  { numero: 10, quem: "lula",   tema: "programassociais",    frase: "Reforçar programas sociais para reduzir a pobreza.", link: "https://tr.ee/10EPtzvJ411n", video: null },
  { numero: 11, quem: "lula",   tema: "direitostrabalhistas", frase: "Garantir o aumento anual do salário mínimo acima da inflação.", link: "https://tr.ee/JmgHvVIK4FBU", video: null },
  { numero: 12, quem: "lula",   tema: "programassociais",    frase: "Aumentar o número de creches.", link: "https://tr.ee/2Sc5Lu0f8PPN", video: null },
  { numero: 13, quem: "lula",   tema: "saude",               frase: "Fortalecer o SUS para garantir saúde para todos.", link: "https://tr.ee/SQUb1SmH42wq", video: null },
  { numero: 14, quem: "lula",   tema: "defesadamulher",      frase: "Fortalecer a Casa da Mulher Brasileira para acolher vítimas de violência doméstica.", link: "https://tr.ee/DMZ1zvaCDaw3", video: null },
  { numero: 15, quem: "lula",   tema: "seguranca",           frase: "Criação do Sistema Único de Segurança semelhante ao SUS.", link: "https://tr.ee/YyTiU7HM7WL7", video: null },
  { numero: 16, quem: "lula",   tema: "saude",               frase: "Ampliar o Programa das Carretas de Saúde com Especialistas.", link: "https://tr.ee/S0B0B1E97d8N", video: null },
  { numero: 17, quem: "flavio", tema: "economia",            frase: "Apoiar o tarifaço imposto por Trump.", link: "https://tr.ee/UoEx65lF6nZF", video: null },
  { numero: 18, quem: "flavio", tema: "economia",            frase: "Oferecer o Brasil para exploração dos Estados Unidos.", link: "https://tr.ee/IRpAL11u7tZb", video: null },
  { numero: 19, quem: "flavio", tema: "meioambiente",        frase: "Não reconhecer as mudanças climáticas e apostar que saneamento básico é suficiente para enfrentar os desafios que estão surgindo.", link: "https://tr.ee/FXJPpBwpARsu", video: null },
  { numero: 20, quem: "flavio", tema: "saude",               frase: "Fazer parte de grupos antivacinas.", link: "https://tr.ee/r3qicEHilUxB", video: null },
  { numero: 21, quem: "flavio", tema: "seguranca",           frase: "Defender o armamento da população.", link: "https://tr.ee/G865aP0aFgA0", video: null },
  { numero: 22, quem: "flavio", tema: "democracia",          frase: "Defender anistia para os golpistas.", link: "https://tr.ee/aWboVks4X5lT", video: null },
  { numero: 23, quem: "flavio", tema: "privatizacao",        frase: "Parcerias público-privadas na educação e universidades públicas fora do MEC.", link: "https://tr.ee/q80ubrYZId3Z", video: null },
  { numero: 24, quem: "flavio", tema: "estadominimo",        frase: "Adotar o \"tesouraço\" (cortes extremos) nos gastos públicos.", link: "https://tr.ee/uu6vzXHD7U5j", video: null },
  { numero: 25, quem: "flavio", tema: "diversidade",         frase: "Mudar a Lei do Racismo retirando a punição do agressor.", link: "https://tr.ee/h17vk7S01piQ", video: null },
  { numero: 26, quem: "flavio", tema: "democracia",          frase: "Afirmar que mulheres solteiras votam mal.", link: "https://tr.ee/m0iExcVCaq4R", video: null },
  { numero: 27, quem: "flavio", tema: "direitostrabalhistas", frase: "Afirmar que contratar mulheres dá prejuízo para o patrão.", link: "https://tr.ee/P4cnvYcH4gdq", video: null },
  { numero: 28, quem: "flavio", tema: "estadominimo",        frase: "Cortar programas sociais.", link: "https://tr.ee/zOoIqlwZDYK2", video: null },
  { numero: 29, quem: "flavio", tema: "direitostrabalhistas", frase: "Congelar o salário-mínimo e aposentadorias.", link: "https://tr.ee/m4nC9mwZT0Xh", video: null },
  { numero: 30, quem: "flavio", tema: "estadominimo",        frase: "Acabar com o SUS e adotar saúde somente para quem puder pagar.", link: "https://tr.ee/ySUaZPPBLM49", video: null },
  { numero: 31, quem: "flavio", tema: "direitostrabalhistas", frase: "Acabar com as leis trabalhistas deixando cada empregado negociar direto com o patrão.", link: "https://tr.ee/aW1h8Pyq2v1n", video: null },
  { numero: 32, quem: "flavio", tema: "corrupcao",           frase: "Manter inexplicada a relação próxima com Vorcaro, do Banco Master, e os pedidos e recebimentos de dinheiro que realizou.", link: "https://tr.ee/jeBg9jv4F1r6", video: null },
];
