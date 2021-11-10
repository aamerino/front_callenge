FROM launcher.gcr.io/google/nodejs

COPY . ./

RUN npm --unsafe-perm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
