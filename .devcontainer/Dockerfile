FROM ubuntu:latest

# Actualiza los repositorios e instala las dependencias necesarias
RUN apt-get update \
    && apt-get install -y \
        nodejs \
        npm \
        zsh \
        git \
        sudo \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*


# RUN apt install git -y
# RUN apt install zsh -y
# RUN apt install sudo -y




# RUN useradd --create-home --password vscode --shell /bin/zsh vscode

RUN useradd -m -p "$(openssl passwd -1 vscode)" vscode --create-home --shell /bin/zsh

RUN sudo usermod -aG sudo vscode

COPY ./.zshrc /home/vscode

