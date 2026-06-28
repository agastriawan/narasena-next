# 🚀 Panduan SEO Lengkap - Nara Sena Advertising

## ✅ Optimasi yang Telah Dilakukan

### 1. **Sitemap & Robots.txt**
- ✅ `app/sitemap.ts` - Sitemap dinamis untuk Google indexing
- ✅ `app/robots.ts` - File robots.txt untuk crawler optimization

### 2. **SEO Configuration**
- ✅ `lib/seo.ts` - Konfigurasi SEO lengkap dengan:
  - Primary keywords (jasa pembuatan signage bogor, dll)
  - Secondary keywords
  - Local business schema
  - Organization schema
  - Service schema
  - Breadcrumb schema

### 3. **Metadata Optimization**
Setiap halaman sudah dioptimasi dengan:
- ✅ **Homepage** (`app/page.tsx`)
  - Title: "Jasa Pembuatan Signage Bogor | Neon Box, Huruf Timbul, Billboard"
  - Keyword-rich H1 dan content
  
- ✅ **Layanan** (`app/layanan/page.tsx`)
  - Title: "Layanan Signage Lengkap Bogor | Neon Box, Huruf Timbul, Billboard"
  
- ✅ **Portofolio** (`app/portofolio/`)
  - Title: "Portofolio Signage Bogor | Hasil Karya Neon Box, Huruf Timbul"
  
- ✅ **Tentang Kami** (`app/tentang-kami/page.tsx`)
  - Title: "Tentang Kami - Nara Sena Advertising | Jasa Signage Bogor Terpercaya"
  
- ✅ **Kontak** (`app/kontak/page.tsx`)
  - Title: "Kontak Kami - Jasa Signage Bogor | Konsultasi Gratis"

### 4. **JSON-LD Schema Markup**
- ✅ Local Business Schema (di layout.tsx)
- ✅ Organization Schema (di layout.tsx)
- Membantu Google memahami bisnis Anda lebih baik

### 5. **Keyword Optimization**
**Primary Keywords:**
- jasa pembuatan signage bogor
- jasa signage bogor
- pembuatan neon box bogor
- jasa huruf timbul bogor
- jasa billboard bogor
- jasa reklame bogor
- advertising bogor
- jasa pylon sign bogor

**Secondary Keywords:**
- signage murah bogor
- neon box cibinong
- huruf timbul stainless bogor
- billboard outdoor bogor
- dan 50+ keyword lainnya

---

## 📋 Langkah Selanjutnya yang Harus Anda Lakukan

### 1. **Google Search Console** (PENTING!)
```
1. Buka https://search.google.com/search-console
2. Klik "Add Property"
3. Masukkan URL: https://narasena.com
4. Verifikasi kepemilikan website:
   - Download file HTML verification
   - Upload ke folder public/
   ATAU
   - Tambahkan meta tag di app/layout.tsx (sudah disiapkan)
5. Setelah terverifikasi, submit sitemap:
   https://narasena.com/sitemap.xml
```

**Update verification code:**
- Buka `app/layout.tsx`
- Cari: `google: 'your-google-verification-code'`
- Ganti dengan code dari Google Search Console

### 2. **Google Business Profile** (WAJIB untuk Local SEO!)
```
1. Buka https://business.google.com
2. Klik "Manage now"
3. Isi data bisnis:
   - Nama: Nara Sena Advertising
   - Kategori: Sign Shop / Advertising Agency
   - Alamat: Jl. Sirojul Munir No. 215 C, Nanggewer, Cibinong, Bogor 16912
   - No. Telepon: 0812-8600-3110
   - Website: https://narasena.com
   - Jam operasional: Senin-Sabtu 07:00-21:00
4. Verifikasi bisnis (via pos atau telepon)
5. Upload foto-foto:
   - Logo
   - Foto depan kantor
   - Hasil karya signage
   - Foto tim kerja
6. Minta review dari klien!
```

### 3. **Backlink Building**
**Gratis:**
- Daftar di direktori bisnis lokal:
  - Google Business Profile ⭐⭐⭐
  - Bing Places
  - Yellow Pages Indonesia
  - Qraved.com
  - Urbanindo
  - OLX (listing gratis)
  - Tokopedia / Bukalapak (buat toko online)
  
- Sosial Media (pastikan link ke website):
  - Facebook Business Page
  - Instagram Business
  - LinkedIn Company Page
  - YouTube Channel
  
- Artikel & Press Release:
  - Kompasiana
  - Medium
  - Blogger
  - WordPress.com

**Berbayar (Lebih Cepat):**
- Paid listing di portal bisnis
- Sponsored post di blog lokal Bogor
- Iklan di media online lokal

### 4. **Content Marketing**
Tambahkan blog di website untuk artikel SEO:
```
/blog/jasa-neon-box-bogor-murah-berkualitas
/blog/tips-memilih-huruf-timbul-yang-bagus
/blog/harga-billboard-di-bogor-2026
/blog/perbedaan-neon-box-dan-neon-sign
/blog/cara-merawat-signage-agar-awet
```

### 5. **Technical SEO**
✅ Sudah dilakukan:
- Sitemap
- Robots.txt
- Meta tags
- Schema markup
- Mobile responsive
- Fast loading (Next.js)

🔄 Perlu dilakukan:
```bash
# 1. Install dan jalankan Lighthouse audit
npm install -g lighthouse

# 2. Test performa website
lighthouse https://narasena.com --view

# 3. Perbaiki issues yang muncul
```

### 6. **Image SEO**
Pastikan semua gambar punya:
- Alt text dengan keyword (sudah diupdate di homepage)
- Ukuran file optimal (compress dengan TinyPNG)
- Format WebP untuk performa lebih baik

### 7. **Local Citations**
Pastikan NAP (Name, Address, Phone) konsisten di semua platform:
```
Nama: Nara Sena Advertising
Alamat: Jl. Sirojul Munir No. 215 C, Nanggewer, Cibinong, Bogor 16912
Phone: 0812-8600-3110
Website: https://narasena.com
```

### 8. **Review & Rating**
- Minta review dari klien puas di Google Business Profile
- Tampilkan review di website
- Balas semua review (positif & negatif)

---

## 🎯 Target Keyword Rankings

### Fase 1 (1-3 bulan)
- jasa signage bogor
- neon box bogor
- huruf timbul bogor
- signage bogor

### Fase 2 (3-6 bulan)
- jasa pembuatan signage bogor
- jasa neon box bogor
- jasa huruf timbul bogor
- jasa billboard bogor

### Fase 3 (6-12 bulan)
- jasa signage
- pembuatan neon box
- advertising agency bogor

---

## 📊 Monitoring & Analytics

### 1. Google Analytics 4
```javascript
// Tambahkan di app/layout.tsx
// Google Analytics tracking code
```

### 2. Tools Monitoring Gratis
- Google Search Console (wajib!)
- Google Analytics
- Bing Webmaster Tools
- Ubersuggest (keyword tracking)
- SEMrush (free trial)

### 3. Metrics yang Perlu Dimonitor
- Organic traffic
- Keyword rankings
- Bounce rate
- Page load speed
- Mobile usability
- Backlinks
- Local pack visibility

---

## 🚨 IMPORTANT REMINDERS

1. **SEO butuh waktu 3-6 bulan** untuk hasil optimal
2. **Konten berkualitas** lebih penting dari keyword stuffing
3. **Google Business Profile** adalah kunci untuk local SEO
4. **Backlinks berkualitas** > banyak backlinks spam
5. **Mobile-first** - pastikan website perfect di mobile
6. **Update konten** secara rutin (minimal 1x sebulan)
7. **Jangan gunakan** black hat SEO (keyword stuffing, hidden text, dll)

---

## 📞 Next Action Items

### Minggu Ini:
- [ ] Verifikasi Google Search Console
- [ ] Submit sitemap ke Google
- [ ] Daftar Google Business Profile
- [ ] Update social media dengan link website

### Bulan Ini:
- [ ] Kumpulkan 5 review dari klien
- [ ] Daftar di 10 direktori bisnis
- [ ] Buat 3 artikel blog
- [ ] Upload 20+ foto portfolio

### 3 Bulan Kedepan:
- [ ] Monitor ranking keyword
- [ ] Build 20+ backlinks berkualitas
- [ ] Update portfolio rutin
- [ ] Optimasi conversion rate

---

## 🔗 Resources & Tools

**Free SEO Tools:**
- Google Search Console: https://search.google.com/search-console
- Google Business Profile: https://business.google.com
- Google Analytics: https://analytics.google.com
- Ubersuggest: https://neilpatel.com/ubersuggest/
- Answer The Public: https://answerthepublic.com/
- GTmetrix: https://gtmetrix.com/
- PageSpeed Insights: https://pagespeed.web.dev/

**Keyword Research:**
- Google Keyword Planner (free)
- Ubersuggest (limited free)
- Answer The Public
- Google Trends

**Backlink Checker:**
- Ahrefs (paid)
- SEMrush (paid)
- Moz (limited free)

---

## ✨ Summary

Website Anda sudah dioptimasi dengan:
✅ SEO-friendly URLs
✅ Keyword-rich content
✅ Schema markup
✅ Sitemap & robots.txt
✅ Meta tags optimal
✅ Mobile responsive
✅ Fast loading

**Yang perlu Anda lakukan:**
1. Verifikasi Google Search Console (PENTING!)
2. Daftar Google Business Profile (WAJIB!)
3. Build backlinks
4. Minta review klien
5. Monitor & update rutin

**Pertanyaan?**
Kontak developer atau konsultan SEO untuk bantuan lebih lanjut.

---

**Last Updated:** 2026-06-27
**Version:** 1.0
