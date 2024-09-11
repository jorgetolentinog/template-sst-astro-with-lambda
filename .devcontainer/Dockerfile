FROM mcr.microsoft.com/devcontainers/javascript-node:20

ENV DEBIAN_FRONTEND=noninteractive
ENV TERM xterm
ENV SHELL /bin/zsh

RUN apt-get update -y && apt install -y vim

RUN git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
RUN git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting
RUN cp /root/.zshrc //root/.zshrc.backup
COPY zshrc /root/.zshrc

RUN npm install -g pnpm@8.6
RUN pnpm config set store-dir /root/.local/share/pnpm/store
