---
type: ProjectLayout
title: Lista de Compras Inteligente (Flutter)
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg1.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
date: '2025-10-27'
client: Projeto Pessoal
description: >-
  Um aplicativo mobile cross-platform (Android e iOS) desenvolvido com Flutter para otimizar o processo de compras no supermercado. O projeto utiliza persistência de dados (SharedPreferences) e funcionalidades essenciais como rastreamento de quantidade e cálculo de valor total em tempo real.
featuredImage:
  type: ImageBlock
  # Sugestão: Crie uma imagem de thumbnail do app e salve em /images/shopping_list_thumb.png
  url: /images/Listy_thumb.png
  altText: Captura de tela do app Lista de Compras
media:
  type: ImageBlock
  # Sugestão: Crie uma imagem de destaque do app e salve em /images/shopping_list_feature.png
  url: /images/shopping_list_feature.png
  altText: Interface principal do aplicativo de lista de compras
---

## Visão Geral do Projeto

Este projeto foi desenvolvido integralmente em **Dart com o framework Flutter**, garantindo uma experiência de usuário consistente tanto em dispositivos Android quanto iOS. O objetivo principal foi criar uma ferramenta de organização de compras simples, mas poderosa, que se adapta às necessidades diárias.

**Funcionalidades Principais Implementadas:**

- **Persistência de Dados:** Uso do `shared_preferences` para salvar e carregar a lista automaticamente, mantendo os dados mesmo após fechar o aplicativo.
- **Cálculo Dinâmico de Total:** Acompanhamento em tempo real do valor total dos itens na lista, incluindo a lógica de multiplicação de `preço x quantidade`.
- **Gestão de Itens:** Adição, edição (nome, preço, quantidade) e remoção (usando o gesto de _swipe_) de itens.
- **Marcação de Compra:** Checkbox para marcar itens como comprados, aplicando um efeito de "riscar" (`lineThrough`) no texto.
- **Customização da Interface:** Definição de temas de cores (utilizando um tema verde para botões e cores neutras/vintage para o fundo da lista).
- **Configuração de Build:** Geração de ícone de launcher personalizado (`flutter_launcher_icons`) e configuração de nome de aplicativo para ambas as plataformas (Android/iOS).

## Desafios e Soluções Técnicas

O desenvolvimento do `ShoppingListApp` apresentou desafios específicos, especialmente relacionados à usabilidade e à persistência de dados:

1.  **Layout do Total e Botão Flutuante:** Inicialmente, o botão flutuante de adicionar sobrepunha o container do valor total. A solução foi incorporar um `Padding` extra no `Container` do total e estruturar o _body_ do `Scaffold` com um `Column` contendo `Expanded` para a lista e o `Container` para o total, garantindo a separação visual.

2.  **Inclusão da Quantidade:** A adição do campo de quantidade exigiu a refatoração da classe `ShoppingItem` para incluir a propriedade `quantity` e a atualização do _getter_ `total` para o cálculo `preço * quantidade`. A validação de _parsing_ (`int.tryParse`) foi implementada para garantir que apenas números inteiros fossem aceitos no campo de quantidade.

3.  **Cross-Platform (iOS Build):** Para gerar o build do iOS sem acesso a um Mac, foi configurado um fluxo de trabalho de **Cloud Build (CI/CD)**, utilizando serviços como o Codemagic, que automatiza a compilação e a assinatura do arquivo `.ipa`.

> “O Flutter se destacou como a escolha ideal, oferecendo um único código-base para um lançamento rápido e eficiente em ambas as plataformas.”

## Tecnologias Utilizadas

- **Framework:** Flutter
- **Linguagem:** Dart
- **Persistência:** `shared_preferences`
- **Versionamento:** Git & GitHub
- **Ferramentas de Build:** `flutter_launcher_icons`

## Conclusão

O projeto resultou em um aplicativo funcional e intuitivo, demonstrando a capacidade do Flutter em lidar com gerenciamento de estado simples (`StatefulWidget`), persistência de dados e interação dinâmica da UI (como os _Modal Bottom Sheets_ para adicionar/editar). A aplicação é um excelente ponto de partida para adicionar funcionalidades mais avançadas no futuro, como múltiplos listas ou sincronização em nuvem.
