FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/bxhsbshheusv/Secktor-Md
WORKDIR /root/SamPandey001/
RUN yarn install --network-concurrency 1
CMD ["node", "lib/client.js"]

