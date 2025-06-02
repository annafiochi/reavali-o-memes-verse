# MemeVerse 🎭

Uma plataforma web para compartilhar, descobrir e interagir com memes, desenvolvida como parte de uma atividade avaliativa do SENAI, utilizando **Next.js 15**, **React** e **CSS Modules**. O foco do projeto foi a componentização, reutilização de código e boas práticas de desenvolvimento front-end.

---

## 📋 Sobre o Projeto

O **MemeVerse** é uma aplicação voltada para adolescentes e jovens adultos que desejam compartilhar e consumir memes de forma organizada, divertida e responsiva. O projeto foi desenvolvido com o objetivo de praticar a criação de componentes reutilizáveis, uso de props e organização de código em React/Next.js.

---

## 🚀 Tecnologias Utilizadas

- **Next.js 15** – Framework React para desenvolvimento web moderno
- **React** – Biblioteca para construção de interfaces de usuário
- **CSS Modules** – Estilização modular e isolada por componente
- **JavaScript ES6+** – Sintaxe moderna e recursos avançados

---

## 🏗️ Estrutura de Componentes

- **Header** – Cabeçalho com logo, navegação e busca
- **HeroSection** – Seção principal com o meme do dia
- **Categories** – Navegação por categorias de memes
- **SideBar** – Barra lateral com eventos e informações extras
- **Feed** – Listagem dos memes populares
- **MemeCard** – Card individual de meme (reutilizável)
- **InteractionBar** – Barra de interação (curtir, comentar, compartilhar)
- **FeaturedMemesSection** – Memes em destaque
- **CreatorSection** – Destaque para criadores de memes
- **NewsLetterSection** – Cadastro para receber novidades
- **Footer** – Rodapé com links e informações da empresa

---

## 📁 Estrutura de Pastas
```
memeverse/
├── components/
│   ├── Header/
│   │   ├── index.js
│   │   └── Header.module.css
│   ├── HeroSection/
│   │   ├── index.js
│   │   └── HeroSection.module.css
│   ├── MemeCard/
│   │   ├── index.js
│   │   └── MemeCard.module.css
│   ├── InteractionBar/
│   │   ├── index.js
│   │   └── InteractionBar.module.css
│   ├── CategoriesSection/
│   │   ├── index.js
│   │   └── CategoriesSection.module.css
│   ├── Footer/
│   │   ├── index.js
│   │   └── Footer.module.css
│   └── Sidebar/
│       ├── index.js
│       └── Sidebar.module.css
├── pages/
│   ├── _app.js
│   └── index.js
├── styles/
│   └── globals.css
├── public/
├── package.json
└── README.md
```

---

## 🎯 Funcionalidades

- ✅ Visualização de memes em cards responsivos
- ✅ Sistema de categorias para navegação
- ✅ Barra de interação (curtir, comentar, compartilhar)
- ✅ Seção destacada para o meme do dia
- ✅ Interface responsiva para diferentes dispositivos
- ✅ Navegação intuitiva e busca de conteúdo

---

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos para executar

1. Clone o repositório

   ```bash
   git clone https://github.com/seu-usuario/memeverse.git
   cd memeverse
   ```

2. Instale as dependências

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Execute o projeto em modo de desenvolvimento

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse a aplicação
   Abra `http://localhost:3000` no seu navegador.

---

## 📦 Scripts Disponíveis

```bash
npm run dev        # Executa em modo de desenvolvimento
npm run build      # Gera build de produção
npm run start      # Executa build de produção
npm run lint       # Executa verificação de código
```

---

## 🎨 Padrões de Desenvolvimento

### Componentização

- Cada componente possui sua própria pasta
- Separação clara de responsabilidades
- Reutilização máxima de código
- Props tipadas e bem documentadas

### Estilização

- CSS Modules para isolamento de estilos
- Nomenclatura consistente de classes
- Design responsivo mobile-first
- Variáveis CSS para cores e espaçamentos

---

## Estrutura de Props

```javascript
// Exemplo: MemeCard
const MemeCard = ({
  id,
  title,
  imageUrl,
  author,
  likes,
  comments,
  category,
  onLike,
  onComment,
  onShare
}) => {
  // Implementação do componente
}
```

---

## 🎭 Exemplo de Uso dos Componentes

```javascript
// pages/index.js
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import MemeCard from '../components/MemeCard'
import CategoriesSection from '../components/CategoriesSection'

export default function Home() {
  const featuredMeme = {
    title: "Meme do Dia",
    imageUrl: "/memes/featured.jpg",
    author: "MemeCreator123"
  }

  const memes = [
    {
      id: 1,
      title: "Quando é sexta-feira",
      imageUrl: "/memes/friday.jpg",
      author: "FunnyGuy",
      likes: 245,
      comments: 18,
      category: "Trabalho"
    }
    // ... mais memes
  ]

  return (
    <>
      <Header />
      <HeroSection meme={featuredMeme} />
      <CategoriesSection />
      
      <main>
        {memes.map(meme => (
          <MemeCard
            key={meme.id}
            {...meme}
            onLike={() => handleLike(meme.id)}
            onComment={() => handleComment(meme.id)}
            onShare={() => handleShare(meme.id)}
          />
        ))}
      </main>
    </>
  )
}
```

---

## 📱 Responsividade

A aplicação foi é totalmente responsiva:

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

---

## 🔧 Personalização

### Adicionando Novos Componentes

1. Crie uma pasta em `components/`
2. Adicione o arquivo `index.js` com o componente
3. Crie o arquivo `ComponentName.module.css` para estilos
4. Importe e utilize em suas páginas

### Modificando Estilos
Edite os arquivos `.module.css` correspondentes a cada componente. Utilize as variáveis CSS definidas em `globals.css` para manter consistência.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte de uma atividade avaliativa.

---

## 👥 Contribuição

Este é um projeto acadêmico, mas sugestões e melhorias são sempre bem-vindas!

Desenvolvido com ❤️ para a comunidade de memes 🎭