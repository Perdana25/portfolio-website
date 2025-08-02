# Panduan Update Konten Website

## 🎯 Cara Mudah Update Website

### 1. Tambah Proyek Baru

#### Langkah-langkah:
1. **Siapkan gambar proyek** (format JPG/PNG, ukuran 800x600px ideal)
2. **Login ke GitHub** dan buka repository website
3. **Upload gambar**:
   - Navigate ke folder `assets/images/projects/`
   - Klik "Add file" > "Upload files"
   - Upload gambar dengan nama: `project-nama-proyek.jpg`
4. **Edit file index.html**:
   - Buka file `index.html`
   - Klik icon pensil untuk edit
   - Cari section `<!-- Projects Grid -->`
   - Copy salah satu card proyek yang sudah ada
   - Paste di bawahnya dan ubah:
     - `src="./assets/images/projects/project-X.jpg"` (ganti dengan nama file gambar)
     - `data-category="web"` (pilih: web, mobile, atau design)
     - Judul proyek
     - Deskripsi proyek
     - Teknologi yang digunakan
     - Link demo dan source code
5. **Commit changes** dengan pesan: "Tambah proyek: [Nama Proyek]"
6. **Tunggu 2-3 menit** untuk auto-deployment

#### Template Card Proyek:
```html
<div class="project-card" data-category="web" data-aos="fade-up">
    <div class="project-image">
        <img src="./assets/images/projects/project-nama-baru.jpg" alt="Nama Proyek" loading="lazy">
        <div class="project-overlay">
            <div class="project-links">
                <a href="#" title="Live Demo" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="#" title="Source Code" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-info">
        <h3 class="project-title">Nama Proyek Baru</h3>
        <p class="project-description">Deskripsi singkat tentang proyek ini dan teknologi yang digunakan</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
        </div>
    </div>
</div>
```

### 2. Tambah Sertifikat Baru

#### Langkah-langkah:
1. **Siapkan gambar sertifikat** (format JPG/PNG)
2. **Upload ke folder** `assets/images/certificates/`
3. **Edit file main.js**:
   - Buka file `assets/js/main.js`
   - Cari function `loadCertificates()`
   - Tambah item baru ke array `certificates`:
   ```javascript
   { 
     src: './assets/images/certificates/cert-nama-baru.jpg', 
     title: 'Nama Sertifikat Baru', 
     issuer: 'Nama Penerbit' 
   }
   ```
4. **Commit changes**

### 3. Update Informasi Personal

#### Edit Nama dan Deskripsi:
- Buka `index.html`
- Cari section `<!-- Hero Section -->`
- Edit:
  - `<h1 class="hero-title">` untuk nama
  - `<p class="hero-subtitle">` untuk deskripsi

#### Edit Informasi About:
- Cari section `<!-- About Section -->`
- Edit bio dan informasi personal
- Update statistik (jumlah proyek, tahun pengalaman, dll)

#### Edit Kontak:
- Cari section `<!-- Contact Section -->`
- Update email, telepon, lokasi

### 4. Update Skills/Keahlian

#### Tambah Skill Baru:
1. **Cari section** `<!-- Skills Section -->`
2. **Pilih kategori** (Frontend, Backend, atau Tools)
3. **Tambah skill baru**:
```html
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">Nama Skill Baru</span>
        <span class="skill-percentage">85%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-width="85%"></div>
    </div>
</div>
```

#### Update Persentase Skill:
- Cari skill yang ingin diupdate
- Ubah angka di `skill-percentage` dan `data-width`

### 5. Tambah Gambar Galeri

#### Langkah-langkah:
1. **Upload gambar** ke folder `assets/images/gallery/`
2. **Edit file main.js**
3. **Cari function** `loadGalleryImages()`
4. **Tambah item baru**:
```javascript
{ 
  src: './assets/images/gallery/gallery-nama-baru.jpg', 
  title: 'Judul Kegiatan', 
  description: 'Deskripsi kegiatan' 
}
```

### 6. Update CV/Resume

#### Cara Ganti CV:
1. **Siapkan file PDF** dengan nama `CV-Muhammad-Anugrah-Perdana.pdf`
2. **Upload ke folder** `assets/documents/`
3. **Replace file lama** dengan yang baru
4. **Commit changes**

## 🎨 Customization Lanjutan

### Ganti Warna Theme

#### Edit CSS Variables:
1. **Buka file** `assets/css/style.css`
2. **Cari section** `:root {`
3. **Ubah warna**:
```css
:root {
  --primary-color: #2563eb;    /* Warna utama */
  --secondary-color: #1e40af;  /* Warna sekunder */
  --accent-color: #06b6d4;     /* Warna aksen */
}
```

### Ganti Font

#### Edit Google Fonts:
1. **Buka** `index.html`
2. **Cari link Google Fonts**
3. **Ganti dengan font pilihan**
4. **Update CSS** di `style.css`:
```css
body {
  font-family: 'Font-Baru', sans-serif;
}
```

## 📱 Tips & Best Practices

### Optimasi Gambar
- **Ukuran maksimal**: 2MB per gambar
- **Format terbaik**: JPG untuk foto, PNG untuk logo/icon
- **Dimensi ideal**:
  - Proyek: 800x600px
  - Sertifikat: 800x600px
  - Galeri: 600x400px
  - Profil: 400x400px

### Penamaan File
- **Gunakan huruf kecil**
- **Ganti spasi dengan dash**: `project-ecommerce.jpg`
- **Hindari karakter khusus**: &, %, #, dll

### SEO Tips
- **Update meta description** di `<head>` section
- **Gunakan alt text** yang deskriptif untuk gambar
- **Update sitemap.xml** jika menambah halaman baru

### Performance Tips
- **Compress gambar** sebelum upload
- **Gunakan format WebP** jika memungkinkan
- **Lazy loading** sudah aktif untuk semua gambar

## 🚨 Troubleshooting Umum

### Gambar Tidak Muncul
- ✅ Check path file (case-sensitive)
- ✅ Check ekstensi file (.jpg, .png)
- ✅ Clear browser cache (Ctrl+F5)

### Layout Rusak
- ✅ Check HTML syntax (tutup semua tag)
- ✅ Check CSS syntax (semicolon, bracket)
- ✅ Validate HTML online

### Website Tidak Update
- ✅ Check commit berhasil di GitHub
- ✅ Check deployment status di Netlify
- ✅ Tunggu 2-3 menit untuk propagasi

## 📞 Bantuan Cepat

### Format Commit Message yang Baik:
- `"Tambah proyek: E-commerce Website"`
- `"Update: Informasi kontak baru"`
- `"Fix: Perbaiki link social media"`
- `"Update CV: Versi terbaru Januari 2025"`

### Backup Penting:
- **Selalu backup** file penting sebelum edit besar
- **Test di local** jika memungkinkan
- **Commit sering** dengan pesan yang jelas

---

**💡 Pro Tip**: Bookmark halaman repository GitHub untuk akses cepat update konten!

