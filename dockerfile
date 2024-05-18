# Temel imaj olarak resmi Node.js imajını kullan
FROM node:14

# Uygulama dosyalarını konteyner içindeki çalışma dizinine kopyala
WORKDIR /usr/src/app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Uygulamanın hangi portta çalışacağını belirle
EXPOSE 3000

# Uygulamayı başlat
CMD ["node", "server.js"]
