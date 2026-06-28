# 🚀 Quick Start - Deploy & Test SEO

## Langkah Deploy ke Production

### 1. Setup Environment Variables
```bash
# Copy file example
cp .env.example .env.local

# Edit .env.local dan isi:
# - NEXT_PUBLIC_GA_ID (dari Google Analytics)
# - NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION (dari Google Search Console)
```

### 2. Build & Test Locally
```bash
# Install dependencies
npm install

# Build production
npm run build

# Test production build
npm start

# Buka browser: http://localhost:3000
```

### 3. Deploy ke Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Vercel akan memberikan URL production
```

### 4. Deploy ke Hosting Lain (cPanel, VPS, dll)
```bash
# Build
npm run build

# Upload folder berikut ke server:
# - .next/
# - public/
# - node_modules/
# - package.json
# - next.config.js

# Jalankan di server:
npm start
# atau
pm2 start npm --name "signage-next" -- start
```

---

## ✅ Testing SEO - Checklist

### Test 1: Sitemap
1. Buka: https://narasena.com/sitemap.xml
2. ✅ Harus tampil XML dengan list semua halaman
3. ✅ Semua URL harus valid

### Test 2: Robots.txt
1. Buka: https://narasena.com/robots.txt
2. ✅ Harus ada aturan Allow/Disallow
3. ✅ Ada link ke sitemap

### Test 3: Meta Tags
1. Buka homepage
2. Klik kanan > View Page Source
3. Cek ada:
   ```html
   <title>Jasa Pembuatan Signage Bogor | Neon Box, Huruf Timbul, Billboard</title>
   <meta name="description" content="...">
   <meta property="og:title" content="...">
   ```

### Test 4: Schema Markup
1. Buka: https://search.google.com/test/rich-results
2. Masukkan URL: https://narasena.com
3. ✅ Harus detect "LocalBusiness" dan "Organization"

### Test 5: Mobile Friendly
1. Buka: https://search.google.com/test/mobile-friendly
2. Masukkan URL website
3. ✅ Harus "Mobile-friendly"

### Test 6: Page Speed
1. Buka: https://pagespeed.web.dev/
2. Test URL website
3. Target:
   - ✅ Performance: 90+
   - ✅ Accessibility: 90+
   - ✅ Best Practices: 90+
   - ✅ SEO: 90+

### Test 7: Structured Data
1. Buka: https://validator.schema.org/
2. Paste URL atau HTML source code
3. ✅ Tidak boleh ada error

---

## 🔍 Cara Cek Ranking di Google

### Manual Check
1. Buka Google.com (mode incognito)
2. Search: "jasa signage bogor"
3. Lihat di halaman berapa website Anda muncul
4. Ulangi untuk keyword lain

### Pakai Tools (Recommended)
1. **Google Search Console**
   - Lihat tab "Performance"
   - Lihat keyword apa yang membawa traffic
   
2. **Ubersuggest** (Free 3 searches/day)
   - https://neilpatel.com/ubersuggest/
   - Masukkan domain: narasena.com
   - Lihat ranking keywords

3. **SERPWatcher Chrome Extension**
   - Install extension
   - Track keyword secara otomatis

---

## 📊 Monitor Traffic

### Google Analytics Dashboard
1. Login: https://analytics.google.com
2. Lihat:
   - **Users**: Berapa pengunjung
   - **Acquisitions > Traffic acquisition**: Dari mana datangnya
   - **Engagement > Pages and screens**: Halaman mana yang paling populer
   - **Events**: Berapa yang klik WhatsApp, Phone, dll

### Google Search Console
1. Login: https://search.google.com/search-console
2. Lihat:
   - **Performance**: Impressions, Clicks, CTR
   - **Coverage**: Halaman yang terindex
   - **Enhancements**: Schema markup status

---

## 🎯 Target Metrics (Realistic)

### Bulan 1-3
- Impressions: 500-2,000/bulan
- Clicks: 10-50/bulan
- Ranking: Halaman 2-5 untuk keyword utama

### Bulan 3-6
- Impressions: 2,000-5,000/bulan
- Clicks: 50-200/bulan
- Ranking: Halaman 1-2 untuk 3-5 keyword

### Bulan 6-12
- Impressions: 5,000-10,000/bulan
- Clicks: 200-500/bulan
- Ranking: Top 5 untuk keyword utama

---

## 🐛 Troubleshooting

### Website tidak muncul di Google Search
**Solusi:**
1. Cek robots.txt tidak block semua
2. Submit sitemap di Google Search Console
3. Tunggu 1-2 minggu untuk indexing
4. Fetch as Google di Search Console

### Schema markup error
**Solusi:**
1. Cek https://validator.schema.org/
2. Pastikan semua field diisi dengan benar
3. Update data di `lib/seo.ts`

### Ranking tidak naik
**Solusi:**
1. Cek kompetitor (siapa yang ranking #1?)
2. Lihat backlinks kompetitor
3. Tingkatkan kualitas konten
4. Tambah backlinks berkualitas
5. Update GMB dengan foto & review

### Traffic turun tiba-tiba
**Solusi:**
1. Cek Google Search Console untuk error
2. Cek apakah ada penalty
3. Cek apakah website down
4. Lihat Google Algorithm updates

---

## 💡 Tips Pro

1. **Konsistensi adalah kunci**
   - Update konten rutin
   - Post di GMB 2x seminggu
   - Balas review dalam 24 jam

2. **Fokus pada GMB**
   - 70% traffic lokal dari GMB
   - Upload foto rutin
   - Kumpulkan review

3. **Content is King**
   - Tulis blog berkualitas
   - Jawab pertanyaan yang sering ditanya
   - Gunakan keyword natural, jangan dipaksa

4. **Build Backlinks**
   - Quality > Quantity
   - Fokus pada backlinks lokal
   - Direktori bisnis lebih baik dari spam links

5. **Track Everything**
   - Set up Google Analytics
   - Monitor Search Console weekly
   - Track conversion (berapa yang hubungi via WA/Phone)

---

## 📞 Emergency Contacts

**Jika butuh bantuan teknis:**
- Developer/Web Admin
- SEO Specialist (hire freelancer jika perlu)
- Vercel Support (untuk hosting issues)

**Tools Support:**
- Google Search Console Help
- Google Analytics Help Center
- Vercel Community Forum

---

## ✨ Final Checklist Sebelum Go-Live

- [ ] `.env.local` sudah diisi dengan benar
- [ ] Google Analytics sudah terpasang
- [ ] Google Search Console verification code sudah diupdate
- [ ] Test semua link (internal & external)
- [ ] Test form WhatsApp button
- [ ] Test di mobile (responsive)
- [ ] Speed test (PageSpeed Insights)
- [ ] Schema markup validation
- [ ] Sitemap submitted ke Google
- [ ] GMB sudah dibuat dan verified
- [ ] Semua social media link ke website

---

**Good Luck! 🚀**

Website sudah ready untuk SEO. Tinggal execute checklist di `SEO-CHECKLIST.md` dan monitor progressnya!
