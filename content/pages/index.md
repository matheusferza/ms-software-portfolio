---
type: PageLayout
title: 'Início'
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg1.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 24

sections:
  - elementId: hero
    type: HeroSection
    colors: colors-f
    backgroundSize: full
    title: 'Matheus Souza'
    subtitle: 'Desenvolvedor de software, automação e soluções web sob medida'
    text: >+
      Desenvolvo soluções digitais com foco em **clareza, performance e resultado real**.
      Trabalho com **sites profissionais, sistemas personalizados, automações e suporte técnico remoto** para transformar demandas operacionais em experiências mais simples e bem resolvidas.

      Do planejamento à entrega, procuro unir **design funcional, código limpo e visão de negócio** para criar produtos que passam confiança e fazem sentido no dia a dia de quem usa.
    actions:
      - type: Button
        label: 'Ver projetos'
        url: '/projects'
        style: primary
        showIcon: true
        icon: arrowRight
      - type: Button
        label: 'Falar no WhatsApp'
        url: 'https://wa.me/5541987940764'
        style: secondary
    media:
      type: ImageBlock
      url: /images/home-thumb4.jpg
      altText: Visual tecnológico representando infraestrutura digital em nuvem
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-12
          - pb-8
          - pl-4
          - pr-4
        titleAlign: left
        textAlign: left
        justifyContent: flex-start

  - elementId: about
    type: TextSection
    colors: colors-f
    title: 'Construindo presença digital com mais critério'
    subtitle: 'Tecnologia boa não é só a que funciona. É a que transmite confiança, economiza tempo e acompanha o crescimento do projeto.'
    text: >+
      Atuo de forma independente, em home office, entregando soluções de TI com atenção ao que realmente importa:
      **experiência do usuário, estrutura sólida e manutenção viável**.

      Já desenvolvi **aplicações administrativas, sistemas internos, sites institucionais, páginas de venda e fluxos automatizados**, sempre buscando equilíbrio entre estética, usabilidade e organização técnica.
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        titleAlign: left
        textAlign: left

  - elementId: services
    type: FeaturedItemsSection
    colors: colors-f
    title: 'Serviços para quem precisa de solução completa'
    subtitle: 'Do front-end à operação técnica, com entregas pensadas para sair do rascunho e virar produto utilizável.'
    items:
      - type: FeaturedItem
        title: 'Sites profissionais e landing pages'
        text: 'Criação e evolução de sites modernos, responsivos, rápidos e prontos para apresentar seu trabalho com mais autoridade.'
      - type: FeaturedItem
        title: 'Sistemas e ferramentas sob medida'
        text: 'Desenvolvimento de aplicações internas, painéis administrativos e fluxos personalizados para necessidades específicas do negócio.'
      - type: FeaturedItem
        title: 'Automações e integração de processos'
        text: 'Redução de tarefas repetitivas com scripts, integrações e rotinas que ajudam a ganhar agilidade e consistência.'
      - type: FeaturedItem
        title: 'Domínios, hospedagem e estrutura técnica'
        text: 'Configuração de domínio, DNS, e-mail profissional e organização do ambiente para publicação e manutenção contínua.'
      - type: FeaturedItem
        title: 'Suporte técnico remoto'
        text: 'Atendimento técnico com foco em manutenção, atualização, diagnóstico e estabilidade para sistemas e estações de trabalho.'
    columns: 2
    spacingX: 32
    spacingY: 28
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        titleAlign: left
        textAlign: left

  - elementId: portfolio
    type: FeaturedItemsSection
    colors: colors-f
    title: 'Projetos em destaque'
    subtitle: 'Aplicações reais que mostram meu jeito de pensar produto, interface e estrutura técnica.'
    items:
      - type: FeaturedItem
        subtitle: 'Flutter • Gestão institucional'
        title: 'CHURCH APP'
        text: 'Aplicativo administrativo para igreja, com módulos de membros, eventos, finanças e organização interna em uma interface acessível.'
        url: '/projects/project-for'
        featuredImage:
          type: ImageBlock
          url: /images/church_thumb.png
          altText: Tela inicial do aplicativo CHURCH APP
      - type: FeaturedItem
        subtitle: 'Python • Frente de caixa e gestão'
        title: 'APP FRUTAS'
        text: 'Sistema desktop para operação comercial com caixa, estoque, relatórios, importação em massa e suporte opcional a balança.'
        url: '/projects/project-one'
        featuredImage:
          type: ImageBlock
          url: /images/app-frutas-cf.png
          altText: Identidade visual do APP FRUTAS
      - type: FeaturedItem
        subtitle: 'Flutter • Produto mobile'
        title: 'Lista de compras inteligente'
        text: 'Aplicativo mobile para acompanhamento de compras com persistência local, cálculo em tempo real e uma experiência simples para o uso cotidiano.'
        url: '/projects/project-two'
        featuredImage:
          type: ImageBlock
          url: /images/Listy_thumb.png
          altText: Interface do aplicativo Lista de Compras
    actions:
      - type: Button
        label: 'Explorar portfólio completo'
        url: '/projects'
        style: secondary
    columns: 3
    spacingX: 28
    spacingY: 28
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        titleAlign: left
        textAlign: left

  - elementId: experience
    type: FeaturedItemsSection
    title: 'Base técnica e experiência prática'
    subtitle: 'Uma combinação de formação contínua, execução no mundo real e interesse constante por evolução.'
    colors: colors-f
    items:
      - type: FeaturedItem
        subtitle: 'Formação'
        title: 'Aprendizado estruturado'
        text: >-
          **Tecnologia da Informação - concluído**  
          Formação com base em manutenção, redes e desenvolvimento de sistemas.

          **Engenharia de Software - em andamento**  
          Expansão do repertório em arquitetura, qualidade e processos de desenvolvimento.

          **Cursos complementares**  
          Desenvolvimento web, Python para automação, redes locais, gestão de projetos e uso prático de IA.
      - type: FeaturedItem
        subtitle: 'Experiência'
        title: 'Atuação em TI e produtos digitais'
        text: >-
          Trabalho com **suporte, manutenção, sistemas acadêmicos, sites e aplicações sob medida**, sempre com foco em organização, desempenho e experiência de uso.

          Já participei de rotinas que envolvem **cadastros, manutenção de dados, automação de tarefas, estruturação de interfaces e apoio operacional remoto** para diferentes contextos.
    columns: 2
    spacingX: 28
    spacingY: 28
    styles:
      self:
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4

  - elementId: contact
    type: ContactSection
    colors: colors-f
    title: 'Vamos conversar sobre o seu projeto'
    text: >-
      Se você precisa de um site melhor resolvido, uma automação útil ou apoio técnico com mais clareza, eu posso ajudar.

      WhatsApp: [41 98794-0764](https://wa.me/5541987940764)  
      E-mail: [matheuzfsouza@gmail.com](mailto:matheuzfsouza@gmail.com)  
      LinkedIn: [matheus-souza-benini](https://www.linkedin.com/in/matheus-souza-benini-997326268)
    form:
      type: FormBlock
      elementId: contact-form
      fields:
        - name: name
          label: 'Nome'
          hideLabel: true
          placeholder: 'Seu nome'
          isRequired: true
          width: full
          type: TextFormControl
        - name: email
          label: 'Email'
          hideLabel: true
          placeholder: 'Seu e-mail'
          isRequired: true
          width: full
          type: EmailFormControl
        - name: message
          label: 'Mensagem'
          hideLabel: true
          placeholder: 'Conte um pouco sobre o que você precisa'
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
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        textAlign: left
---
