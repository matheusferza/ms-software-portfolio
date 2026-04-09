---
type: PostLayout
title: 'O desafio de criar um app Flutter realmente útil 🛒'
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg1.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
date: '2025-08-20'
author: content/data/team/matheus-ferreira.json
excerpt: >-
  Um estudo sobre usabilidade, persistência de dados e design no desenvolvimento de um app de lista de compras cross-platform.
featuredImage:
  type: ImageBlock
  url: /images/blog-thumb-two.png
  altText: Interface principal do app Lista de Compras
media:
  url: /images/shopping_list_feature.png
  altText: Tela de adição de item
  caption: Protótipo funcional da lista de compras
  elementId: ''
  type: ImageBlock
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
    title: 'Stay up-to-date with my words ✍️'
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
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
          type: EmailFormControl
      submitLabel: 'Submit 🚀'
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

Criar um aplicativo simples **nem sempre é tão simples**.  
O **Shopping List App**, feito em **Flutter**, começou como um exercício de UI, mas evoluiu para um app completo com persistência de dados e cálculos dinâmicos.

## Principais Recursos

- Persistência com `shared_preferences`
- Cálculo em tempo real (`preço x quantidade`)
- Swipe para exclusão
- Checkbox para itens comprados
- Tema verde e design limpo

A curva de aprendizado do Flutter me mostrou a importância de **estruturação visual e controle de estado**. O projeto hoje é totalmente funcional e adaptável para novas features, como múltiplas listas ou sincronização na nuvem.
