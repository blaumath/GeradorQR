# Gerador de QR Code

Este é um projeto simples de um gerador de QR Code. Ele permite que os usuários insiram texto ou URLs e gera um QR Code correspondente.

## Como funciona

O gerador de QR Code é composto por três arquivos principais: index.html, script.js e public.css.

- **index.html**: Este arquivo contém a estrutura básica da página. Ele inclui um campo de entrada onde os usuários podem inserir o texto ou a URL que desejam converter em um QR Code. Há também um botão que, quando clicado, gera o QR Code correspondente ao texto ou URL inserido.

- **script.js**: Este arquivo contém a lógica principal do gerador de QR Code. Quando o botão “Gerar QR Code” é clicado, a função generateQRCode é chamada. Esta função verifica se o campo de entrada não está vazio. Se não estiver vazio, ela cria uma URL que aponta para a API do QR Code Server com o texto ou URL inserido como parâmetro. Esta URL é então definida como o atributo src da imagem do QR Code, fazendo com que a imagem do QR Code seja atualizada com o novo QR Code.

- **public.css**: Este arquivo contém os estilos CSS para a página. Ele define coisas como cores, fontes e layout da página.

## Melhorias Futuras

Embora este gerador de QR Code seja funcional e fácil de usar, há várias melhorias que pretendo fazer no futuro que sao:

- Personalização do QR Code: Permitir que os usuários personalizem a cor e o tamanho do QR Code.
- Suporte para outros tipos de dados: Além do texto e URLs, os QR Codes podem representar outros tipos de dados. Adicionar suporte para esses outros tipos de dados poderia tornar este gerador de QR Code mais versátil.
- Melhorias na interface do usuário: A interface do usuário poderia ser melhorada para torná-la mais intuitiva e fácil de usar.
- Compatibilidade com dispositivos móveis: Garantir que o site funcione bem em dispositivos móveis.
- Acessibilidade: Melhorar a acessibilidade seguindo as diretrizes WCAG (Web Content Accessibility Guidelines).

