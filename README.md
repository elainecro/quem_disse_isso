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

## Vídeos

Os QR Codes apontam para links encurtados do Linktree (`tr.ee/...`). Enquanto
o campo `video` estiver `null`, a página mostra um botão "Ver o vídeo" que abre
esse link. Para o vídeo tocar dentro da página, troque `null` pelo endereço
final do vídeo. Funciona com YouTube (inclusive Shorts), Instagram (reel/post)
e TikTok.

## Publicar no GitHub Pages

Settings → Pages → Source: "Deploy from a branch", escolha a branch e a pasta
`/ (root)`. Não precisa de build.
