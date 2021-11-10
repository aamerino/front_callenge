FROM launcher.gcr.io/google/nodejs

# Copy application code.
COPY . /app/

RUN npm --unsafe-perm install

EXPOSE 3000

CMD ["npm", "start"]
