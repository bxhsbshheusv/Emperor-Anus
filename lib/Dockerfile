FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/Raizel-2023/Secktor-Md /root/SamPandey001
WORKDIR /root/SamPandey001/
RUN yarn install --network-concurrency 1
CMD ["node", "lib/client.js"]

