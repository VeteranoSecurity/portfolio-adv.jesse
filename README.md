# Jesse Marques | Advocacia Criminal & Psicologia Forense

Site institucional de alto impacto, ultra clean e responsivo para o **Dr. Jesse Marques** (Advogado Criminalista), com sede em Brasília/DF e atuação sem fronteiras em todo o território nacional.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?logo=framer)

---

## 🚀 Tecnologias Utilizadas

- **Frontend Framework**: React 19 (Vite + TypeScript)
- **Styling**: Tailwind CSS v4 + Fontes Google (`Fira Code`, `Antic`, `Inter`, `Cormorant Garamond`)
- **Animações**: `framer-motion` (`FloatingPathsBackground`, `BlurText`, micro-interações)
- **Ícones**: `lucide-react`
- **Arquitetura**: Estrutura modular inspirada em shadcn/ui

---

## ✨ Funcionalidades & Seções

1. **Hero Interativo (`portfolio-hero.tsx`)**:
   - Background animado em vetores fluídos sem oscilação (`FloatingPathsBackground`).
   - Nome estilizado "JESSE MARQUES" com efeito `BlurText` por letras em tom dourado (`#D4AF37`).
   - Foto de perfil centralizada com efeito hover.
   - Menu retrátil responsivo com scroll suave sem poluição de fragmentos na URL.
   - Logo oficial do cabeçalho (`Header-title.png`).

2. **Perfil Profissional & Competências (`profile-insight.tsx`)**:
   - Layout clean estilo Casper Lightman com cards escuros e iluminação ambiente sutil.
   - Detalhamento de atuação em Ações Penais, Tribunal do Júri, Execução Penal e Nulidades Processuais.
   - Abordagem interdisciplinar em **Psicologia Forense**.
   - Atendimento sem fronteiras (Brasília/DF + todo o Brasil).
   - Links diretos interativos:
     - 📱 **WhatsApp Urgente**: `+55 (61) 98420-3515`
     - 📸 **Instagram**: `@dr.jesse_marques_matos`
     - 🎵 **TikTok**: `@dr.jesse_marques_matos`
     - ✉️ **E-mail Direto**: `jesse.marques@advdf.com.br`

3. **Rodapé (`Footer.tsx`)**:
   - Informações institucionais, conformidade com o Código de Ética da OAB/DF e botão "Voltar ao Topo".

---

## 🛠️ Como Executar Localmente

### 1. Clonar o repositório
```bash
git clone https://github.com/SEU-USUARIO/AdvJesse.git
cd AdvJesse
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Executar o servidor de desenvolvimento
```bash
npm run dev
```

Abra no navegador em `http://localhost:5173`.

### 4. Gerar o build de produção
```bash
npm run build
```

Para visualizar o build gerado:
```bash
npm run preview
```

---

## 📂 Estrutura de Arquivos

```
AdvJesse/
├── public/
│   └── favicon.svg           # Ícone da balança da justiça em dourado
├── src/
│   ├── assets/
│   │   ├── Foto 1.png        # Imagem principal do Hero
│   │   ├── Foto 2.png        # Imagem do Card de Perfil
│   │   └── Header-title.png  # Logo oficial do cabeçalho
│   ├── components/
│   │   ├── Footer.tsx        # Rodapé institucional
│   │   └── ui/
│   │       ├── floating-paths.tsx    # Background vetorial animado
│   │       ├── portfolio-hero.tsx     # Seção Hero com BlurText e Menu
│   │       └── profile-insight.tsx    # Card de Perfil e Competências
│   ├── lib/
│   │   └── utils.ts          # Helper cn (clsx + tailwind-merge)
│   ├── App.tsx               # Componente raiz da aplicação
│   ├── main.tsx              # Ponto de entrada do React
│   └── index.css             # Estilos globais e tokens Tailwind
├── index.html                # Configuração de SEO, Meta Tags e Fontes
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## ⚖️ Licença e Direitos

© {new Date().getFullYear()} Jesse Marques Advocacia Criminal. Todos os direitos reservados.
