# Imagem base com Java
FROM openjdk:11-jdk-slim

# Instalar Node.js, Gradle e dependências básicas
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    unzip \
    git \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs gradle \
    && apt-get clean

# Instalar o Ionic CLI e Cordova
RUN npm install -g @ionic/cli cordova

# Configurar o Android SDK
ENV ANDROID_SDK_ROOT=/sdk
ENV PATH=$PATH:/sdk/cmdline-tools/latest/bin:/sdk/platform-tools:/sdk/build-tools/30.0.3

# Baixar e configurar o Android SDK
RUN mkdir -p /sdk/cmdline-tools && \
    wget -q https://dl.google.com/android/repository/commandlinetools-linux-8512546_latest.zip -O /sdk/cmdline-tools/tools.zip && \
    unzip /sdk/cmdline-tools/tools.zip -d /sdk/cmdline-tools/ && \
    mv /sdk/cmdline-tools/cmdline-tools /sdk/cmdline-tools/latest && \
    yes | sdkmanager --licenses && \
    sdkmanager "platform-tools" "platforms;android-30" "build-tools;30.0.3"

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o código do projeto para o contêiner
COPY . /app

# Instalar dependências do projeto
RUN npm install

# Comando padrão para gerar o APK
CMD ["ionic", "cordova", "build", "android"]

# docker run --rm -v ${PWD}:/app -v ${PWD}/apk:/app/platforms/android/app/build/outputs/apk ionic-apk-builder
