# **App Masters Games**
## Descrição
O App Masters Games é uma aplicação web interativa que oferece aos usuários a capacidade de explorar e descobrir uma ampla variedade de jogos. Com esta aplicação, os usuários podem listar, buscar por nome e filtrar por gênero os jogos disponíveis.

![App Masters Games](./src/assets/fullpage.png)

## Visualizar em produção
* __https://celadon-faloodeh-6a5611.netlify.app__

## Funcionalidades - PRIMEIRA ETAPA

1. Listar jogos: Os usuários podem visualizar uma lista de jogos disponíveis.
2. Buscar por nome: Os usuários podem pesquisar por jogos utilizando o nome do jogo.
3. Buscar por gênero: Os usuários podem filtrar os jogos por gênero, exibindo apenas os jogos relacionados a um determinado gênero.

## Funcionalidades - SEGUNDA ETAPA
4. Login e Cadastro de usuários.
5. Escolher jogos favoritos.
6. Filtrar jogos favoritos.
7. Adicionar uma nota/classificação para cada jogo.
8. Ordenar por classificação maior/menor.

## Evolução do projeto para segunda etapa
1. O fluxo de filtragem e exibição dos games estava com muita complexidade agregada. Para simplificar foi adicionado um custom hook de filtragem 🪝.
2. Na primeira versão não tinhamos nenhuma forma de compartilhar estados entre components além de props, foi adicionado Context API para autentificação, dados dos cards, dados do favoritos, input de busca 📨.
3. Aproveitei essa aplicação para estudar um pouco sobre testes e implementei testes unitários em alguns components e hooks 🤓.
4. Foi adicionado fluxo de páginação, pois ninguem merece rolar a página infinitamente 😅.

## Requisistos funcionais cumpridos 12/12 - PRIMEIRA ETAPA
 * O projeto deve ser feito usando React ou Next.JS ✅

 * Obter a lista de jogos em /data ✅
 * Apresentar um loader enquanto os dados são obtidos ✅
 * Apresentar os jogos em três colunas (no computador) ✅
 * Em cada card apresentar o título e imagem pelo ao menos
 Lidar com a responsividade, para que fique bem apresentado no computador, tablets ou celular ✅
 * Quando a API retornar o status code 500, 502, 503, 504, 507, 508 ou 509 apresentar ao usuário "O servidor fahou em responder, tente recarregar a página" ✅
 * Caso a API retorne outros erros, apresentar "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde" ✅
 * Ao realizar uma chamada, não esperar mais que 5 segundos pelo retorno. Se os dados demorarem mais de 5 segundos para retornar apresentar "O servidor demorou para responder, tente mais tarde" ✅
 * Sempre que apresentar uma mensagem para o usuário, ou tiver os dados em mãos para apresentar, ocultar o loader ✅
 * Incluir um campo de busca, que permite localizar jogos pelo título, com busca case insensitive ✅
 * Uma vez que tenha os dados em mãos, veja quais genre foram retornados e permita ao usuário selecionar um deles, e então filtre para exibir apenas jogos do gênero selecionado ✅

 ## Requisistos funcionais cumpridos 12/12 - SEGUNDA ETAPA
 * Utilizar Firebase para realizar autenticação usando email/senha ✅

 * Ter um ❤️ para o usuário favoritar o jogo diretamente na lista, ficando vermelho quando marcado ✅
 * Salvar no firebase os jogos favoritos do usuário, no realtime ou firestore ✅
 * Ter um botão “Favoritos” que apresenta apenas jogos favoritados, permitindo ainda buscar e filtrar estes jogos. Pode ser na própria lista já apresentada ou em uma separada se preferir. ✅
 * Ao lado do coração, ter ★★★★ para o usuário avaliar o jogo, podendo marcar de uma em uma. Ou seja, ele pode escolher 1, 2, 3 ou as 4. ✅
 * Ter uma forma de ordenar por avaliação, vendo os melhores (ou piores) primeiro, clicando novamente para inverter a ordem. ✅
 * Ao carregar a interface, deixar o ❤️ vermelho para os itens favoritos e as ⭐️ amarelas nos itens avaliados ✅
 * Ao acessar sem estar autenticado, os ícones ❤️ e ★ deverão estar visíveis, mas ao clicar irá solicitar a autenticação ✅
 * 👉 Ao obter os jogos da API e os dados do firebase, apresentar. Manter o loading para os jogos. Não precisa de loading enquanto espera o firebase, até porque o firebase devolverá os dados mais rapidamente e pode ser complicado “esperar o firebase” se estiver “escutando o firebase”. ✅
 * A autenticação deve acontecer na rota /auth/ usando o provedor “E-mail/senha” do firebase, onde o usuário poderá criar uma conta ou acessar a conta já existente (se mantendo apenas nesta rota) ✅
 * Escolher um item para aplicar uma animação com CSS, pode ser ao favoritar, ou avaliar, ou quando os itens surgirem (Animação aplicada no hover de favoritos e hover de cards de games) ✅
 * Publicar seu projeto online para testarmos (na mesma url de antes) ✅

## Tecnologias Utilizadas - PRIMEIRA ETAPA
* React
* TypeScript
* React Query
* Axios
* Sass
* React Hook Form

## Tecnologias Adicionadas - SEGUNDA ETAPA
* Styled-components
* Vitest
* Firebase (Auth e RealtimeDatabase)
* React-ratings
* React-paginate
* Context API

## Pré-requisitos
Antes de iniciar o projeto, é necessário ter instalado em sua máquina o Node.js e o Yarn.

* Node.js (versão 12 ou superior)
* Yarn (versão 1.22 ou superior)

## Instalação
1. Clone este repositório para o seu ambiente local.
2. Abra o terminal e navegue até o diretório raiz do projeto.
3. Execute o comando yarn para instalar todas as dependências.
4. Execute o comando yarn dev para iniciar a aplicação.
5. A aplicação estará disponível em `http://localhost:5173/`

## Contribuição
Se desejar contribuir para este projeto, fique à vontade para fazer um fork e enviar um pull request. Será um prazer revisar suas contribuições.
