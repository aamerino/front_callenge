FROM launcher.gcr.io/google/nodejs

COPY . ./

RUN npm --unsafe-perm install

EXPOSE 3000

CMD ["npm", "start"]
