# Simple Item Manager

**Simple Item Manager**, HTML, CSS ve JavaScript ile hazırlanmış kullanıcı dostu bir arayüze sahip, Express.js ve MongoDB ile geliştirilen basit bir item yönetim uygulamasıdır. Uygulama Docker ile kolayca ayağa kaldırılabilir.

## ✨ Özellikler

- ✅ Item (öğe) ekleme
- 📋 Item listesini görüntüleme
- ❌ Item silme
- 🎨 HTML + CSS ile tasarlanmış arayüz
- 🐳 Docker ile kolay kurulum
- 🛢️ MongoDB ile veri saklama

## 🚀 Docker ile Kurulum

### 1. Reponun klonlanması

```bash
git clone https://github.com/sevginuroksuz/simple-item-manager.git
cd simple-item-manager
```

### 2. Docker Compose ile uygulamayı başlatma

```bash
docker-compose up --build
```

Bu komut iki konteyneri başlatır:

- **web**: Express.js sunucusu ve HTML/CSS/JS arayüzü
- **mongo**: MongoDB veritabanı (localhost erişimli)

### 3. Uygulamayı tarayıcıda görüntüleme

Sunucu başarıyla ayağa kalktığında tarayıcına şunu yaz:

```
http://localhost:3000
```

Artık item ekleyebilir, silebilir ve listeleyebilirsin.

## 📁 Docker Dosyaları

### Dockerfile

Uygulamanın bulunduğu klasörde yer alır ve Express sunucusunu çalıştırmak için yapılandırılmıştır.

### docker-compose.yml

Hem `web` hem de `mongo` konteynerini tek komutla çalıştırmak için kullanılır.

MongoDB bağlantısı genellikle şu şekildedir:

```js
mongoose.connect("mongodb://mongo:27017/itemsdb", { useNewUrlParser: true, useUnifiedTopology: true });
```

> `mongo` ismi, Docker Compose içindeki servis adıdır.

## 👤 Geliştirici

Sevgi Nur Öksüz  
GitHub: [@sevginuroksuz](https://github.com/sevginuroksuz)

## 📄 Lisans

Bu proje [MIT lisansı](https://opensource.org/licenses/MIT) ile lisanslanmıştır.
