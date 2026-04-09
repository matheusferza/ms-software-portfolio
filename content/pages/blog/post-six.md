---
type: PostLayout
title: Aplicativo de Gestão Church App (Flutter)
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg1.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
date: '2025-10-27'
author: content/data/team/matheus-ferreira.json
excerpt: >-
  Desenvolvimento de um aplicativo administrativo em Flutter para a Terceira Igreja Batista do Xaxim, centralizando visitantes, eventos, finanças e ministérios em uma interface moderna e intuitiva.
featuredImage:
  type: ImageBlock
  url: /images/blog-thumb-six.png
  altText: Tela inicial do aplicativo da Terceira Igreja com ícones de Visitantes, Membros, Eventos, Finanças e Células.
media:
  url: /images/church_thumb.png
  altText: Menu lateral do aplicativo da Terceira Igreja mostrando opções administrativas e o logotipo institucional.
  caption: Interface do aplicativo Church App desenvolvido em Flutter.
  elementId: ''
  type: ImageBlock
tags:
  - Flutter
  - App Development
  - Gestão
  - UI/UX Design
  - SQLite
bottomSections:
  - elementId: ''
    type: RecentPostsSection
    colors: colors-f
    variant: variant-d
    subtitle: Recent posts
    showDate: true
    showAuthor: false
    showExcerpt: true
    recentCount: 2
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-12
          - pb-56
          - pr-4
          - pl-4
        textAlign: left
    showFeaturedImage: true
    showReadMoreLink: true
  - type: ContactSection
    backgroundSize: full
    title: 'Gostou deste projeto? Receba novidades e bastidores dos meus próximos apps ✍️'
    colors: colors-f
    form:
      type: FormBlock
      elementId: sign-up-form
      fields:
        - name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: updatesConsent
          label: Sign me up to receive updates
          isRequired: false
          width: full
          type: CheckboxFormControl
      submitLabel: 'Enviar 🚀'
      styles:
        self:
          textAlign: center
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        flexDirection: row
        textAlign: left
---

### Desafio e Estratégia do Projeto

O desafio inicial foi desenvolver uma ferramenta que integrasse **todas as áreas administrativas da igreja** — desde o controle de visitantes até o acompanhamento financeiro — mantendo a **simplicidade** e **clareza visual** necessárias para o uso diário por líderes e voluntários.

A estratégia foi criar uma interface que refletisse a identidade visual da instituição, utilizando tons de **azul escuro e branco**, transmitindo **seriedade e confiança**, mas com um design acessível e responsivo.

---

### Estrutura do Aplicativo

O aplicativo foi desenvolvido em **Flutter**, com navegação fluida e menus intuitivos. A interface foi dividida em módulos principais:

- **Visitantes:** Registro e acompanhamento de novos visitantes.
- **Membros:** Gestão de membros da igreja, incluindo informações básicas e participação em atividades.
- **Eventos:** Agenda e controle de eventos da igreja.
- **Finanças:** Registro de entradas, saídas e relatórios financeiros.
- **Células:** Organização das células e acompanhamento de líderes e encontros.

Na base da tela inicial, foram incluídos dados de contato da igreja, reforçando a identidade institucional e o vínculo com a comunidade.

---

### Menu Lateral Personalizado

O **menu lateral** do aplicativo permite acesso rápido às principais funcionalidades e configurações:

- **Edição de dados pessoais**,
- **Sair da conta**,
- e o **logotipo da igreja** em destaque no topo.

O design segue a linha visual da tela principal, garantindo **consistência estética** e **navegação coerente**.

---

### Implementação Técnica e Resultados

- **Framework:** Flutter
- **Banco de Dados:** SQLite local (com possibilidade de integração futura via API)
- **Plataforma:** Android e Web
- **Arquitetura:** Modular e escalável

Os testes mostraram **excelente desempenho** e **usabilidade intuitiva**, com feedback positivo da equipe administrativa e dos líderes de ministério.

> “Um aplicativo que traduz a organização da igreja em uma experiência digital acessível, moderna e eficiente.”

---

### Conclusão

O **Church App** representa um passo importante rumo à digitalização das atividades administrativas e pastorais da **Terceira Igreja Batista do Xaxim**.  
Ele centraliza informações, simplifica rotinas e fortalece o vínculo entre líderes, membros e visitantes — tudo isso com foco em **usabilidade, desempenho e identidade visual institucional**.
