# Panduan Deployment GitHub & Netlify

## 📋 Persiapan Sebelum Deployment

### 1. Pastikan Akun Tersedia
- ✅ Akun GitHub (gratis): [github.com](https://github.com)
- ✅ Akun Netlify (gratis): [netlify.com](https://netlify.com)

### 2. Install Git (jika belum ada)
- Windows: Download dari [git-scm.com](https://git-scm.com)
- macOS: `brew install git` atau download dari website
- Linux: `sudo apt install git` (Ubuntu/Debian)

## 🚀 Langkah 1: Setup GitHub Repository

### A. Buat Repository Baru
1. Login ke GitHub
2. Klik tombol **"New"** atau **"+"** di kanan atas
3. Isi detail repository:
   - **Repository name**: `portfolio-website` (atau nama lain)
   - **Description**: `Website portofolio profesional Muhammad Anugrah Perdana`
   - **Visibility**: Public (agar bisa di-deploy gratis di Netlify)
   - **Initialize**: Jangan centang README, .gitignore, atau license (karena sudah ada)
4. Klik **"Create repository"**

### B. Upload Files ke GitHub

#### Opsi 1: Via GitHub Web Interface (Mudah)
1. Di halaman repository baru, klik **"uploading an existing file"**
2. Drag & drop semua file dari folder `portfolio-website`
3. Atau klik **"choose your files"** dan pilih semua file
4. Isi commit message: `Initial commit - Portfolio website`
5. Klik **"Commit changes"**

#### Opsi 2: Via Git Command Line (Advanced)
```bash
# Navigate ke folder website
cd /path/to/portfolio-website

# Initialize git repository
git init

# Add remote repository (ganti dengan URL repository Anda)
git remote add origin https://github.com/username/portfolio-website.git

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Portfolio website"

# Push to GitHub
git push -u origin main
```

## 🌐 Langkah 2: Setup Netlify Deployment

### A. Connect GitHub ke Netlify
1. Login ke Netlify
2. Klik **"New site from Git"**
3. Pilih **"GitHub"**
4. Authorize Netlify untuk mengakses GitHub
5. Pilih repository `portfolio-website` yang baru dibuat

### B. Configure Build Settings
1. **Branch to deploy**: `main`
2. **Build command**: (kosongkan - tidak diperlukan untuk static site)
3. **Publish directory**: `/` (root directory)
4. Klik **"Deploy site"**

### C. Custom Domain (Opsional)
1. Setelah deployment berhasil, klik **"Domain settings"**
2. Klik **"Add custom domain"** jika punya domain sendiri
3. Atau gunakan subdomain gratis: klik **"Change site name"**
4. Masukkan nama yang diinginkan: `muhammad-anugrah-portfolio`

## ⚡ Langkah 3: Setup Auto-Deployment

### Konfigurasi Otomatis (Sudah Aktif)
Setelah setup di atas, auto-deployment sudah aktif secara otomatis:
- ✅ Setiap push ke branch `main` akan otomatis deploy
- ✅ Build time: ~1-2 menit
- ✅ Notifikasi email saat deployment selesai

### Environment Variables (Jika Diperlukan)
1. Di Netlify dashboard, masuk ke **Site settings**
2. Klik **"Environment variables"**
3. Tambah variable jika diperlukan (untuk fitur advanced)

## 📝 Langkah 4: Update Konten Website

### A. Update via GitHub Web Interface (Mudah)
1. Buka repository di GitHub
2. Navigate ke file yang ingin diedit (misal: `index.html`)
3. Klik icon pensil **"Edit this file"**
4. Lakukan perubahan
5. Scroll ke bawah, isi commit message
6. Klik **"Commit changes"**
7. Website akan otomatis update dalam 1-2 menit

### B. Update via Git Command Line
```bash
# Pull latest changes
git pull origin main

# Edit files (gunakan text editor favorit)
# Misal: edit index.html, tambah proyek baru, dll

# Add changes
git add .

# Commit changes
git commit -m "Update: Tambah proyek baru"

# Push to GitHub
git push origin main
```

### C. Tambah Proyek Baru
1. **Upload gambar proyek** ke folder `assets/images/projects/`
2. **Edit `index.html`** pada section `#projects`
3. **Copy struktur card proyek** yang sudah ada
4. **Ubah detail**: gambar, judul, deskripsi, teknologi, links
5. **Commit dan push** perubahan

### D. Tambah Sertifikat Baru
1. **Upload gambar sertifikat** ke folder `assets/images/certificates/`
2. **Edit `assets/js/main.js`** pada function `loadCertificates()`
3. **Tambah item baru** ke array `certificates`
4. **Format**:
   ```javascript
   { 
     src: './assets/images/certificates/cert-new.jpg', 
     title: 'Nama Sertifikat', 
     issuer: 'Nama Penerbit' 
   }
   ```
5. **Commit dan push** perubahan

### E. Update Informasi Personal
Edit file `index.html` pada bagian:
- **Hero section**: Nama, deskripsi, tombol
- **About section**: Bio, statistik, informasi kontak
- **Skills section**: Tambah/update skill dan persentase
- **Contact section**: Email, telepon, alamat

## 🔧 Troubleshooting

### Deploy Gagal
1. **Check build log** di Netlify dashboard
2. **Pastikan semua file** ter-upload dengan benar
3. **Check file paths** - pastikan relative path benar
4. **Validate HTML/CSS** - gunakan validator online

### Website Tidak Update
1. **Clear browser cache**: Ctrl+F5 (Windows) atau Cmd+Shift+R (Mac)
2. **Check commit history** di GitHub - pastikan perubahan ter-commit
3. **Check deploy log** di Netlify - pastikan deployment berhasil
4. **Wait 2-3 menit** - deployment butuh waktu

### Gambar Tidak Muncul
1. **Check file path** - pastikan path relatif benar
2. **Check file extension** - pastikan .jpg, .png, .webp
3. **Check file size** - maksimal 10MB per file
4. **Check file name** - hindari spasi dan karakter khusus

## 📊 Monitoring & Analytics

### Netlify Analytics (Paid)
- Traffic statistics
- Performance metrics
- Form submissions

### Google Analytics (Free)
1. Buat akun Google Analytics
2. Tambah tracking code ke `index.html`
3. Monitor traffic dan user behavior

### Performance Monitoring
- **PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
- **GTmetrix**: [gtmetrix.com](https://gtmetrix.com)
- **Lighthouse**: Built-in di Chrome DevTools

## 🔒 Security & Best Practices

### Security Headers
- ✅ Sudah dikonfigurasi di `netlify.toml`
- ✅ HTTPS otomatis aktif
- ✅ Security headers untuk XSS protection

### Performance Optimization
- ✅ Image optimization
- ✅ CSS/JS minification
- ✅ Browser caching
- ✅ Lazy loading

### SEO Optimization
- ✅ Meta tags lengkap
- ✅ Structured data
- ✅ Sitemap.xml
- ✅ Robots.txt

## 📞 Support

### Dokumentasi Resmi
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Docs**: [docs.github.com](https://docs.github.com)

### Community Support
- **Netlify Community**: [community.netlify.com](https://community.netlify.com)
- **GitHub Community**: [github.community](https://github.community)

### Video Tutorials
- **YouTube**: Search "Netlify GitHub deployment tutorial"
- **Netlify YouTube**: Official channel dengan tutorial lengkap

---

## ✅ Checklist Deployment

- [ ] Akun GitHub dan Netlify sudah dibuat
- [ ] Repository GitHub sudah dibuat
- [ ] Files sudah di-upload ke GitHub
- [ ] Netlify sudah connected ke GitHub
- [ ] Website berhasil di-deploy
- [ ] Custom domain sudah dikonfigurasi (opsional)
- [ ] Auto-deployment sudah ditest
- [ ] Website bisa diakses dan berfungsi normal

**Selamat! Website portofolio Anda sudah live dan siap digunakan! 🎉**

