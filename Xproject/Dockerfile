FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Pulithasethnindu/Pulibot /root/xtroid
WORKDIR /root/xtroid/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
