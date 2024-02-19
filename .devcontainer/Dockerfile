FROM ubuntu:latest

# Actualiza los repositorios e instala las dependencias necesarias
RUN apt-get update \
    && apt-get install -y  \
    && apt install zsh  git sudo man curl wget   -y

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs=20.11.*



RUN apt-get clean \
    && rm -rf /var/lib/apt/lists/*


RUN useradd --create-home --shell /bin/zsh vscode || true
RUN adduser vscode sudo 

RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >>/etc/sudoers
RUN echo "vscode:vscode" | chpasswd

COPY ./.zshrc /home/vscode

