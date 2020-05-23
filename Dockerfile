FROM node:12
ENV INSTALL_PATH /view-form
RUN npm install -g @angular/cli
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY . .
RUN npm install
CMD ["npm", "start"]
