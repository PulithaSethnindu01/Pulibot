FROM fusuf/whatsasena:latest

RUN git clone https://github.com/PulithaSethnindu/Pulibot /root/Pulibot
WORKDIR /root/Pulibot/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn --install.no-lockfile true
CMD ["node", "bot.js"]
