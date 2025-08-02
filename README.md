# Portfolio Website - Muhammad Anugrah Perdana

Website portofolio profesional dengan desain modern, responsif, dan fitur mode gelap/terang.

## 🚀 Fitur Utama

- **Desain Modern**: Interface yang bersih dan profesional dengan skema warna biru
- **Mode Gelap/Terang**: Toggle antara tema terang dan gelap
- **Responsif**: Optimal di semua perangkat (desktop, tablet, mobile)
- **Animasi Smooth**: Animasi yang halus dan menarik
- **SEO Optimized**: Meta tags dan struktur yang SEO-friendly
- **Fast Loading**: Optimasi performa untuk loading yang cepat
- **Easy to Update**: Struktur yang mudah untuk update konten

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur semantik modern
- **CSS3**: Styling dengan CSS Variables dan Flexbox/Grid
- **JavaScript (ES6+)**: Interaktivitas dan animasi
- **AOS Library**: Animate On Scroll effects
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Inter & Poppins)

## 📁 Struktur Proyek

```
portfolio-website/
├── index.html              # Halaman utama
├── assets/
│   ├── css/
│   │   ├── style.css       # CSS utama
│   │   └── responsive.css  # CSS responsif
│   ├── js/
│   │   └── main.js         # JavaScript utama
│   ├── images/
│   │   ├── profile.jpg     # Foto profil
│   │   ├── projects/       # Gambar proyek
│   │   ├── certificates/   # Gambar sertifikat
│   │   └── gallery/        # Gambar galeri
│   └── documents/
│       └── CV-Muhammad-Anugrah-Perdana.pdf
├── netlify.toml            # Konfigurasi Netlify
├── _redirects              # Redirect rules
├── .gitignore              # Git ignore file
└── README.md               # Dokumentasi
```

## 🎨 Skema Warna

### Light Theme
- **Primary**: #2563eb (Blue)
- **Secondary**: #1e40af (Dark Blue)
- **Accent**: #06b6d4 (Cyan)
- **Background**: #ffffff (White)
- **Text**: #1e293b (Dark Gray)

### Dark Theme
- **Background**: #0f172a (Dark Blue)
- **Card Background**: #1e293b (Slate)
- **Text**: #f8fafc (Light Gray)

## 🚀 Deployment

### Netlify (Otomatis)

1. **Fork/Clone Repository**
   ```bash
   git clone https://github.com/username/portfolio-website.git
   cd portfolio-website
   ```

2. **Connect ke Netlify**
   - Login ke [Netlify](https://netlify.com)
   - Klik "New site from Git"
   - Pilih repository GitHub
   - Deploy settings akan otomatis terdeteksi

3. **Auto Deploy**
   - Setiap push ke branch `main` akan otomatis deploy
   - Build command: (tidak diperlukan untuk static site)
   - Publish directory: `/` (root)

### Manual Deploy

1. **Upload Files**
   - Zip semua file
   - Drag & drop ke Netlify dashboard

## 📝 Cara Update Konten

### 1. Update Informasi Personal
Edit file `index.html` pada bagian:
- Hero section (nama, deskripsi)
- About section (detail personal)
- Contact section (email, telepon, lokasi)

### 2. Tambah Proyek Baru
1. Upload gambar proyek ke `assets/images/projects/`
2. Edit file `index.html` pada section `#projects`
3. Tambah card proyek baru dengan struktur yang sama

### 3. Tambah Sertifikat
1. Upload gambar sertifikat ke `assets/images/certificates/`
2. Sertifikat akan otomatis dimuat oleh JavaScript
3. Atau edit `assets/js/main.js` pada `loadCertificates()` function

### 4. Update Galeri
1. Upload gambar ke `assets/images/gallery/`
2. Edit `assets/js/main.js` pada `loadGalleryImages()` function
3. Tambah item baru ke array `galleryItems`

### 5. Update Skills
Edit file `index.html` pada section `#skills`:
- Tambah/edit skill categories
- Update persentase kemampuan
- Tambah skill baru

## 🎯 SEO & Performance

- **Meta Tags**: Lengkap dengan Open Graph
- **Structured Data**: Schema markup untuk SEO
- **Image Optimization**: Lazy loading dan format optimal
- **Minification**: CSS dan JS yang optimal
- **Caching**: Browser caching headers
- **Mobile-First**: Responsive design approach

## 🔧 Customization

### Mengubah Warna Theme
Edit CSS variables di `assets/css/style.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* ... */
}
```

### Menambah Animasi
Gunakan AOS attributes:
```html
<div data-aos="fade-up" data-aos-delay="200">
  <!-- content -->
</div>
```

### Custom JavaScript
Tambah fungsi baru di `assets/js/main.js` atau buat file terpisah.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Muhammad Anugrah Perdana
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- [AOS Library](https://michalsnik.github.io/aos/) - Animate On Scroll
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography
- [Netlify](https://netlify.com/) - Hosting & Deployment

---

⭐ Jika project ini membantu, jangan lupa berikan star di GitHub!

