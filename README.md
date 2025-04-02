# Projeto Covil do Calango

Este é um projeto exemplo utilizando Ionic 6, construído para criar aplicativos móveis e web usando tecnologias como Angular, Capacitor e outras ferramentas do ecossistema Ionic.

## Descrição

Este é um aplicativo construído com Ionic 6, com as seguintes tecnologias e funcionalidades:

- **Ionic 6**: Framework para criar aplicativos móveis e web.
- **Angular**: Framework JavaScript para construção da interface de usuário.
- **Capacitor**: Ferramenta para criar aplicativos nativos para iOS e Android.
- **Cordova Plugins**: Plugins nativos para acessar funcionalidades específicas do dispositivo.

## Estrutura do Projeto

A estrutura do projeto segue o padrão típico do Ionic 6 com Angular:

- **app**: Contém os módulos e componentes principais da aplicação.
- **assets**: Contém arquivos estáticos como imagens, fontes, etc.
- **environments**: Arquivos de configuração para diferentes ambientes (desenvolvimento, produção).
- **index.html**: Ponto de entrada da aplicação web.

## Objetivo

Esse projeto é um Aplicativo Mobile para ser utilizado pelos clientes da Covil do Calango, uma loja Geek de board e card games, o principal foco da App é auxiliar no auto-gerenciamento de comandas e pedidos, tendo em vista que a loja também trabalha com alimentação, servindo lanches e produtos para seus clientes.
Esse aplicativo consome dados da [API da Covil](https://github.com/Liendson/covil-calango-api), feita em Java.

Para gerar o APK, basta rodar o comando do Docker:
- docker run --rm -v ${PWD}:/app -v ${PWD}/apk:/app/platforms/android/app/build/outputs/apk ionic-apk-builder