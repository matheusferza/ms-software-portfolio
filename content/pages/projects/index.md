---
type: ProjectFeedLayout
title: Projetos
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg1.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 42
projectFeed:
  type: ProjectFeedSection
  colors: colors-f
  showDate: false
  showDescription: true
  showReadMoreLink: true
  showFeaturedImage: true
  variant: variant-a
  styles:
    self:
      width: wide
      padding:
        - pt-0
        - pl-4
        - pr-4
        - pb-12
  projects:
    - type: ProjectLayout
      title: Aplicativo de gestão CHURCH APP (Flutter)
      date: '2025-10-27'
      client: Gestão institucional
      description: >-
        App administrativo para igreja com módulos de membros, eventos, finanças e organização interna em uma interface moderna e clara.
      featuredImage:
        type: ImageBlock
        url: /images/church_thumb.png
        altText: Tela inicial do aplicativo CHURCH APP.

    - type: ProjectLayout
      title: APP FRUTAS / KODA SYSTEM (Python/Tkinter)
      date: '2025-10-27'
      client: Frente de caixa e gestão comercial
      description: >-
        Sistema desktop para mercados, frutarias e hortifrutis, com caixa,
        catálogo, equipe, relatórios e apresentação atual mais premium sob a
        identidade KODA SYSTEM.
      featuredImage:
        type: ImageBlock
        url: /images/app-frutas-koda-dashboard.png
        altText: Painel de gestão atual do APP FRUTAS com identidade KODA SYSTEM.

    - type: ProjectLayout
      title: Lista de Compras Inteligente (Flutter)
      date: '2025-10-27'
      client: Produto mobile
      description: >-
        Aplicativo para Android e iOS com persistência local, cálculo automático de total, edição de itens e experiência simples para uso cotidiano.
      featuredImage:
        type: ImageBlock
        url: /images/Listy_thumb.png
        altText: Tela principal do app Lista de Compras Inteligente.

    - type: ProjectLayout
      title: E-commerce de Pós-Graduação
      date: '2025-10-27'
      client: Educação e conversão digital
      description: >-
        Plataforma em WordPress e WooCommerce com catálogo organizado por áreas, páginas de curso mais objetivas e navegação orientada à matrícula.
      featuredImage:
        type: ImageBlock
        url: /images/Uniensino_thumb.png
        altText: Tela inicial do e-commerce de cursos de pós-graduação.

topSections:
  - type: HeroSection
    title: Projetos
    subtitle: 'Soluções desenvolvidas com foco em usabilidade, clareza visual e estrutura técnica que funciona no mundo real.'
    text: >-
      Aqui estão alguns trabalhos que mostram meu jeito de construir interfaces, sistemas e produtos digitais.  
      A seleção combina **Flutter, Python e Web**, sempre com atenção a experiência, manutenção e contexto de uso.
    actions:
      - type: Button
        label: 'Falar sobre um projeto'
        url: 'https://wa.me/5541996370717'
        style: secondary
    colors: colors-f
    backgroundSize: full
    elementId: ''
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-16
          - pb-16
          - pl-4
          - pr-4
        flexDirection: row
        textAlign: left

bottomSections:
  - type: ContactSection
    backgroundSize: full
    title: 'Tem uma ideia ou necessidade parecida?'
    text: >-
      Posso te ajudar a transformar um processo solto em uma solução mais clara, moderna e utilizável.
    colors: colors-f
    form:
      type: FormBlock
      elementId: sign-up-form
      fields:
        - name: firstName
          label: Nome
          hideLabel: true
          placeholder: Nome
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Sobrenome
          hideLabel: true
          placeholder: Sobrenome
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: E-mail
          hideLabel: true
          placeholder: E-mail
          isRequired: true
          width: full
          type: EmailFormControl
        - name: message
          label: Mensagem
          hideLabel: true
          placeholder: Conte sobre o seu projeto
          isRequired: true
          width: full
          type: TextareaFormControl
      submitLabel: 'Enviar mensagem'
      styles:
        self:
          textAlign: left
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        flexDirection: row
        textAlign: left
---
