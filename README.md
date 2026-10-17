# Isso é bom ou ruim?

Versão web do baralho "Isso é bom ou ruim?". A pessoa escolhe (ou sorteia) uma
carta, lê a proposta, vota se acha boa ou ruim e só depois descobre quem defende
aquilo, com o vídeo de origem.

A ordem das cartas é embaralhada a cada partida. O número que aparece na tela
não é o número do baralho impresso, senão dava pra adivinhar a resposta
(no PDF, 1 a 16 são de um candidato e 17 a 32 do outro).

## Arquivos

- `index.html`: a página inteira (HTML, CSS e JS, sem dependências).
- `cartas.js`: as 32 cartas. Cada uma tem a frase, o tema, quem defende,
  o `link` lido do QR Code do verso e um campo `video`.

## Fontes

Os QR Codes apontam pra links encurtados do Linktree (`tr.ee/...`), que estão
no campo `link`. O campo `fonte` guarda pra onde cada um leva. Só 5 das 32
cartas levam a vídeo (cartas 1, 20 e 23 no Facebook, 19 e 32 no Instagram).
Essas aparecem com o player embutido. As outras levam a notícias ou páginas
de governo e aparecem com um botão "Ver a fonte".

A carta 2 leva a um link `share.google` que ainda não foi resolvido.

A página também embute YouTube e TikTok, caso alguma fonte seja trocada.

## Publicar no GitHub Pages

Settings → Pages → Source: "Deploy from a branch", escolha a branch e a pasta
`/ (root)`. Não precisa de build.
