

Obrigado por fornecer as informações detalhadas sobre o projeto\! Com base na sua descrição, compilei um arquivo README completo para o frontend do **Car Rental**, incluindo todos os pontos que você mencionou.

-----

# Car Rental - Frontend

Este é o frontend do projeto **Car Rental**, uma aplicação para aluguel de carros de luxo. A aplicação foi desenvolvida usando **React**, **Vite** e **TailwindCSS**, e se integra com o backend através do **Axios**.

## Sumário

  - [Descrição](https://www.google.com/search?q=%23descri%C3%A7%C3%A3o)
  - [Requisitos](https://www.google.com/search?q=%23requisitos)
  - [Instalação](https://www.google.com/search?q=%23instala%C3%A7%C3%A3o)
  - [Scripts Disponíveis](https://www.google.com/search?q=%23scripts-dispon%C3%ADveis)
  - [Estrutura do Projeto](https://www.google.com/search?q=%23estrutura-do-projeto)
  - [Principais Funcionalidades](https://www.google.com/search?q=%23principais-funcionalidades)
  - [Tecnologias Utilizadas](https://www.google.com/search?q=%23tecnologias-utilizadas)
  - [Contribuição](https://www.google.com/search?q=%23contribui%C3%A7%C3%A3o)

## Descrição

O frontend do Car Rental oferece uma interface moderna e responsiva para que os usuários possam navegar, alugar e gerenciar reservas de carros de luxo. Ele se conecta a uma API para obter dados de carros, processar reservas e autenticar usuários.

## Requisitos

Para rodar este projeto, você precisará ter o seguinte instalado:

  - **Node.js** (versão 16 ou superior)
  - **NPM** ou **Yarn**

## Instalação

Siga os passos abaixo para configurar e rodar o projeto localmente:

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd client
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do diretório `client` com o seguinte conteúdo:

    ```env
    VITE_CURRENCY=$
    VITE_BASE_URL=http://localhost:3000
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

5.  **Acesse a aplicação:**
    Abra seu navegador e acesse: `http://localhost:5173`

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

  - `npm run dev`: Inicia o servidor de desenvolvimento.
  - `npm run build`: Gera uma build de produção pronta para deploy.
  - `npm run preview`: Visualiza a build de produção localmente.
  - `npm run lint`: Executa o linter para verificar e reportar erros no código.

## Estrutura do Projeto

A estrutura de diretórios do projeto foi organizada para facilitar a escalabilidade e manutenção:

```
client/
├── public/                # Arquivos públicos (favicon, etc.)
├── src/
│   ├── assets/            # Imagens e ícones
│   ├── components/        # Componentes reutilizáveis
│   ├── context/           # Context API para gerenciamento de estado
│   ├── pages/             # Páginas principais da aplicação
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Ponto de entrada do React
│   └── index.css          # Estilos globais
├── .env                   # Variáveis de ambiente
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
└── README.md              # Documentação do projeto
```

## Principais Funcionalidades

### Páginas

  - **Home**: Página inicial com destaque para os carros de luxo em promoção.
  - **Cars**: Lista completa dos carros disponíveis para aluguel.
  - **Car Details**: Exibe informações detalhadas sobre um carro específico.
  - **My Bookings**: Permite ao usuário visualizar e gerenciar suas reservas.
  - **Owner Dashboard**: Painel administrativo para proprietários de carros gerenciarem seus veículos.

### Componentes

  - **Navbar**: Barra de navegação com menu responsivo.
  - **Footer**: Rodapé com links úteis e informações de contato.
  - **CarCard**: Componente reutilizável para exibir informações resumidas de um carro.
  - **Login**: Modal para login e registro de usuários.

## Tecnologias Utilizadas

  - **React**: Biblioteca JavaScript para a construção da interface de usuário.
  - **Vite**: Ferramenta de build rápida que melhora a experiência de desenvolvimento.
  - **TailwindCSS**: Framework CSS que agiliza a estilização com classes utilitárias.
  - **Axios**: Cliente HTTP baseado em Promises para fazer requisições à API.
  - **React Router**: Gerenciamento de rotas para navegação entre as páginas.
  - **React Hot Toast**: Biblioteca para exibir notificações de feedback para o usuário.

## Contribuição

Contribuições são sempre bem-vindas\! Se você deseja contribuir, siga os passos abaixo:

1.  Faça um fork deste repositório.
2.  Crie uma nova branch para sua feature: `git checkout -b minha-feature`.
3.  Commit suas alterações: `git commit -m "Adiciona minha feature"`.
4.  Envie para o repositório remoto: `git push origin minha-feature`.
5.  Abra um **Pull Request**.