FROM ubuntu:latest

# Actualiza los repositorios e instala las dependencias necesarias
RUN apt-get update \
    && apt-get install -y  \
    && apt install zsh  git sudo man curl wget   -y

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs=20.11.*



RUN apt-get clean \
    && rm -rf /var/lib/apt/lists/*


# RUN apt install git -y
# RUN apt install zsh -y
# # RUN apt install sudo -y
# RUN sudo apt-get update
# RUN sudo apt-get upgrade nodejs




# RUN useradd --create-home --password vscode --shell /bin/zsh vscode

RUN useradd -m -p "$(openssl passwd -1 vscode)" vscode --create-home --shell /bin/zsh

RUN usermod -aG sudo vscode

COPY ./.zshrc /home/vscode

