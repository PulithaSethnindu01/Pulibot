FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Pulithasethnindu/Pulibot /root/Pulibot
WORKDIR /root/Pulibot/
ENV TZ=Europe/Istanbul
RUN npm install --global yarn
RUN yarn install --no-audit

CMD ["node", "bot.js"]
