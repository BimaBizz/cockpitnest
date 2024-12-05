
# CockpitNest

**CockpitNest** adalah template untuk membangun situs web menggunakan [Cockpit CMS](https://getcockpit.com/), [Next.js](https://nextjs.org/), dan [TailwindCSS](https://tailwindcss.com/). Proyek ini dirancang untuk membantu pengembang membuat aplikasi web yang cepat, responsif, dan mudah dikelola.

## Fitur

- **Integrasi Backend dan Frontend**: Backend menggunakan Cockpit CMS untuk pengelolaan konten.
- **Frontend Modern**: Dibangun dengan Next.js untuk kinerja tinggi dan fitur server-side rendering (SSR).
- **Desain Responsif**: Menggunakan TailwindCSS dan DaisyUI untuk gaya yang cepat dan fleksibel.
- **Hosting Aman**: Dapat diintegrasikan dengan Jagoan Hosting dan Cloudflare.

## Persyaratan Sistem

- Node.js 20.17 atau lebih baru
- NPM atau Yarn
- PHP 8.2
- Cockpit CMS yang dihosting atau lokal

## Instalasi

1. **Clone repository:**

   ```bash
   git clone https://github.com/username/cockpitnest.git
   cd cockpitnest
   npm i
   ```
2.   **Konfigurasi Cockpit CMS:**

-   Download **[cockpit cms](https://getcockpit.com/start-journey)**
- extract dan install cockpit cms di xampp
- copy database di ```cockpitnest/public/database```
- replace storage cockpit cms di ```C:xampp/htdocs/*nama-cockpit-folder-kamu*/storage```
- masuk ke cockpit dashboard ```http://your-xampp/auth/login?to=%2F```
- login

> user : admin
> password : admin

3. **Konfigurasi CockpitNest:**
- rename .env_sample ke .env
- konfigurasi env sesuai kebutuhan kamu
	```
	NEXT_HOST=http://localhost/cockpit-pro
	NEXT_ASSETS_URL=http://localhost/cockpit-pro/storage/uploads
	NEXT_MENU_NAME=bizzcode


	NEXT_PUBLIC_ASSETS_URL=http://localhost/cockpit-pro/storage/uploads
	NEXT_PUBLIC_HOST=http://localhost/cockpit-pro
	NEXT_PUBLIC_UR_DOMAIN=https://yourdomain.com
	NEXT_PUBLIC_COCKPIT_URL=localhost
	```
- Jalankan aplikasi:

```bash
npm run dev
```
- Akses aplikasi di `http://localhost:3000`.

## Customisasi

1.  **Menambahkan Komponen Baru**:
    
    -   Tambahkan komponen di folder `components/` dan impor ke halaman yang relevan.
2.  **Mengatur TailwindCSS**:
    
    -   Ubah file `tailwind.config.js` untuk menambahkan tema atau konfigurasi khusus.

## Deployment

1.  **Bangun aplikasi:**
    
    ```bash
    npm run build 
    ```
2.  **Jalankan di lingkungan produksi:**
    
    ```bash
	npm start 
    ```
3.  **Hosting**:
    
    -   Gunakan hosting seperti Vercel, Jagoan Hosting, atau server Nginx.
    -   Tambahkan konfigurasi Cloudflare untuk keamanan tambahan.

## Kontribusi

Kontribusi sangat diterima! Silakan buat issue atau kirim pull request untuk peningkatan.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](https://github.com/BimaBizz/cockpitnest?tab=License-1-ov-file).

----------

Dibuat dengan ❤️ oleh **Bima Mahendra**.
Jika ada bagian yang perlu disesuaikan lebih lanjut, beri tahu saya! 😊
