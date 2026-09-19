# Rangkuman Fitur Aplikasi Ans Dompet

Snapshot codebase: 12 April 2026

Dokumen ini dirangkum dari implementasi yang ada di codebase Flutter aplikasi, terutama area transaksi, akun, kategori, laporan, budget, tabungan, utang-piutang, pengaturan, premium, iklan, dan data lokal.

## Gambaran umum

Ans Dompet adalah aplikasi pencatatan keuangan pribadi berbasis penyimpanan lokal SQLite dengan fokus pada pencatatan pemasukan, pengeluaran, transfer antar akun, pengelolaan budget, target tabungan, utang-piutang, serta laporan keuangan yang bisa diekspor.

## 1. Dashboard dan navigasi utama

- Navigasi utama memakai 4 tab: Home, Reports, Budget, dan Settings.
- Tersedia floating action button cepat untuk menambah pengeluaran, pemasukan, dan transfer.
- Aplikasi mendukung tampilan terang dan gelap.
- Aplikasi mendukung bahasa Indonesia dan English.
- Ada splash screen dan state loading/skeleton untuk pengalaman buka aplikasi yang lebih halus.
- Untuk pengguna non-premium, aplikasi dapat terkunci saat offline melalui mekanisme offline lock.

## 2. Beranda dan ringkasan keuangan

- Menampilkan saldo saat ini berdasarkan periode dan akun yang dipilih.
- Menampilkan ringkasan arus kas periode berjalan: pemasukan dan pengeluaran.
- Mendukung filter periode harian, mingguan, bulanan, 3 bulan, 6 bulan, dan custom range.
- Mendukung filter semua akun atau akun tertentu.
- Menampilkan histori transaksi yang dikelompokkan per tanggal.
- Mendukung refresh data dan infinite scroll/pagination histori transaksi.
- Menampilkan kutipan motivasional yang dipilih secara acak.
- Menyediakan pintasan ke pencarian transaksi.

## 3. Transaksi pemasukan dan pengeluaran

- Tambah transaksi pemasukan.
- Tambah transaksi pengeluaran.
- Edit transaksi yang sudah ada.
- Hapus transaksi.
- Lihat detail transaksi.
- Input nominal dengan formatter mata uang dan kalkulator custom.
- Pilih tanggal transaksi.
- Pilih akun sumber transaksi.
- Pilih kategori melalui picker dengan fitur pencarian.
- Simpan judul atau deskripsi transaksi.
- Opsi untuk mengecualikan transaksi dari laporan.
- Lampirkan foto bukti/struk dari kamera atau galeri.
- Kompresi dan penyimpanan file foto transaksi ke storage aplikasi.
- Menampilkan foto bukti di halaman detail transaksi.
- Proteksi transaksi sistem yang terhubung dengan modul tabungan atau utang agar kategori/jenis tertentu tidak diedit sembarangan.

## 4. Transfer antar akun

- Membuat transfer antar akun internal.
- Validasi minimal harus punya 2 akun.
- Validasi akun asal dan tujuan tidak boleh sama.
- Validasi saldo akun sumber sebelum transfer disimpan.
- Transfer disimpan sebagai pasangan transaksi terhubung dalam satu group id.
- Tersedia halaman detail transfer.
- Tersedia edit transfer.
- Tersedia hapus transfer.
- Transfer dapat digabung dan ditampilkan rapi di histori serta hasil pencarian.
- Laporan bisa memilih apakah transfer ikut dihitung atau tidak.

## 5. Pencarian

- Pencarian transaksi secara realtime dari halaman khusus.
- Hasil pencarian mendukung transaksi biasa dan transfer.
- Ketika data transaksi berubah, hasil pencarian dapat di-refresh otomatis.
- Pencarian menampilkan nama kategori terlokalisasi dan nilai transaksi dengan format mata uang.

## 6. Akun/dompet

- Kelola daftar akun/dompet.
- Tambah akun baru.
- Edit akun.
- Hapus akun dengan proteksi untuk akun default dan akun yang masih dipakai.
- Set saldo awal akun melalui transaksi khusus.
- Opsi saldo awal bisa dikecualikan dari laporan.
- Hitung saldo tiap akun secara dinamis dari histori transaksi.
- Penyesuaian saldo akun jika saldo nyata berbeda dengan saldo tercatat.
- Dukungan ikon akun berbasis asset.
- Dukungan ikon akun kustom berbasis gambar.
- Gambar ikon akun kustom bisa diambil dari kamera atau galeri, di-crop 1:1, dikompresi, divalidasi ukuran file, lalu disimpan lokal.
- Fitur ikon akun kustom dibatasi untuk premium.

## 7. Kategori

- Kelola kategori transaksi.
- Tambah kategori.
- Edit kategori.
- Hapus kategori.
- Pencarian kategori di halaman manajemen kategori.
- Kategori mendukung tipe expense, income, dan all.
- Aplikasi menjaga kategori sistem penting seperti transfer, penyesuaian saldo, tabungan, dan utang agar tidak terhapus.
- Dukungan ikon kategori bawaan dan ikon kategori kustom.
- Ikon kategori kustom mendukung pick image, crop, kompresi, validasi ukuran file, dan penyimpanan lokal.
- Fitur ikon kategori kustom dibatasi untuk premium.

## 8. Budget bulanan

- Membuat budget bulanan per kategori.
- Edit budget.
- Hapus budget.
- Melihat progress pemakaian budget versus realisasi pengeluaran.
- Menampilkan total budget, total terpakai, dan sisa budget bulan aktif.
- Navigasi antar bulan untuk melihat budget periode lain.
- Import budget bulan sebelumnya ke bulan berjalan.
- Budget ikut refresh otomatis saat transaksi berubah.

## 9. Laporan dan analitik

- Laporan pemasukan dan pengeluaran berdasarkan periode.
- Filter periode: harian, mingguan, bulanan, 3 bulan, 6 bulan, dan custom range.
- Filter akun.
- Opsi include/exclude transfer di laporan.
- Breakdown kategori pemasukan dan pengeluaran.
- Grafik tren dan visualisasi chart.
- Insight cards dan summary stats cards.
- Statistik tambahan: net income, savings rate, rata-rata harian pemasukan, rata-rata harian pengeluaran, kategori terbesar, dan jumlah transaksi.
- Perbandingan dengan periode sebelumnya termasuk persentase perubahan income dan expense.
- Detail kategori bisa dibuka ke halaman kategori khusus untuk melihat transaksi terkait.
- Ekspor laporan ke PDF.
- Ekspor data mentah laporan ke CSV.
- Untuk non-premium, beberapa akses laporan lanjutan dan ekspor PDF bisa dibuka lewat rewarded ads.

## 10. Target tabungan

- Membuat target tabungan.
- Edit target tabungan.
- Hapus target tabungan.
- Menampilkan progress target, sisa nominal, target date, dan status selesai/belum selesai.
- Menampilkan perhitungan kebutuhan tabungan harian, mingguan, dan bulanan menuju target date.
- Menambah kontribusi tabungan.
- Menarik dana dari tabungan.
- Edit kontribusi tabungan.
- Hapus kontribusi tabungan.
- Kontribusi tabungan bisa dihubungkan ke akun dompet sehingga otomatis membuat transaksi pengeluaran terkait.
- Riwayat kontribusi tersimpan dan terhubung dengan transaksi sistem.
- Target tabungan aktif bisa di-reorder.
- Target tabungan selesai dipisahkan dari target aktif.
- Ekspor ringkasan tabungan ke PDF.
- Untuk non-premium, ekspor PDF tabungan dapat dibuka lewat rewarded ads.

## 11. Utang-piutang

- Mencatat utang yang dipinjam dan piutang yang dipinjamkan.
- Menyimpan nama orang, nominal, deskripsi, tanggal jatuh tempo, akun terkait, dan tanggal dibuat.
- Menghitung sisa tagihan, progress pelunasan, status lunas, dan status lewat jatuh tempo.
- Menambah pembayaran/cicilan.
- Edit pembayaran/cicilan.
- Hapus pembayaran/cicilan.
- Edit data utang/piutang.
- Hapus data utang/piutang.
- Pembayaran bisa dihubungkan ke akun dompet sehingga otomatis membentuk transaksi income atau expense yang sesuai.
- Saat pembuatan utang/piutang awal, data juga bisa langsung dihubungkan ke dompet.
- Daftar utang memiliki tab filter all, borrow, dan lend.
- Ada pencarian utang/piutang.
- Data utang aktif bisa di-reorder.
- Data lunas dipisahkan dari data aktif.
- Ekspor ringkasan utang-piutang ke PDF.
- Untuk non-premium, ekspor PDF utang-piutang dapat dibuka lewat rewarded ads.

## 12. Tutup buku

- Tersedia wizard tutup buku bulanan.
- Sistem menghitung saldo tercatat per akun sampai akhir bulan sebelumnya.
- Pengguna bisa memasukkan saldo nyata per akun.
- Sistem menghitung selisih saldo dan membuat transaksi penyesuaian otomatis bila diperlukan.
- Akun bisa dilewati saat proses verifikasi.

## 13. Pengaturan dan preferensi

- Ubah bahasa aplikasi.
- Ubah mata uang utama aplikasi.
- Mendukung multi-currency untuk format tampilan nominal.
- Aktif/nonaktifkan reminder harian.
- Ganti mode dark/light.
- Lihat versi aplikasi.
- Kelola kategori dari halaman settings.
- Kelola akun dari halaman settings.
- Reset semua data.
- Reset transaksi saja.

## 14. Backup, restore, dan keamanan data

- Backup database aplikasi ke file terenkripsi.
- Restore database dari file backup.
- Backup memakai enkripsi AES dengan password.
- Backup memakai format file khusus `.nectarbackup`.
- Validasi password dan header file saat restore.
- Pilih folder tujuan backup dan file sumber restore melalui file picker.
- Fitur backup dan restore dibatasi untuk premium.

## 15. Premium, iklan, dan akses fitur

- Integrasi pembelian premium memakai RevenueCat.
- Mendukung paket langganan bulanan dan tahunan.
- Status premium disimpan ke cache untuk startup cepat dan masa grace saat offline.
- Ada halaman upgrade premium.
- Aplikasi menampilkan banner ads, native ads, interstitial ads, dan rewarded ads untuk pengguna non-premium.
- Rewarded ads dipakai untuk membuka fitur tertentu tanpa harus langsung upgrade, misalnya ekspor PDF atau periode laporan lebih panjang.
- Beberapa fitur premium yang terlihat di implementasi: backup/restore, ikon kustom, foto transaksi, ekspor PDF tertentu, dan akses laporan lanjutan.

## 16. Notifikasi dan utilitas sistem

- Reminder harian memakai local notifications.
- Inisialisasi timezone untuk notifikasi.
- Cleanup file foto yatim dilakukan berkala di background.
- Format tanggal dan mata uang mengikuti locale serta currency yang dipilih pengguna.

## 17. Arsitektur dan karakteristik teknis yang terlihat

- Aplikasi dibangun dengan Flutter dan GetX.
- Penyimpanan utama menggunakan SQLite (`sqflite`).
- State preferensi memakai `GetStorage` dan `SharedPreferences`.
- Data utama yang tersimpan mencakup transaksi, budget, kategori, akun, target tabungan, kontribusi tabungan, utang, dan pembayaran utang.
- Aplikasi memiliki migrasi database bertahap sehingga kompatibel dengan data lama.
- Ekspor PDF tersedia untuk laporan, tabungan, dan utang-piutang.
- Ekspor CSV tersedia untuk data mentah laporan.

## Kesimpulan singkat

Secara fungsional, Ans Dompet sudah berada di level aplikasi pencatatan keuangan personal yang cukup lengkap. Fitur dasarnya mencakup transaksi, akun, kategori, budget, laporan, transfer, tabungan, dan utang-piutang. Di atas itu, aplikasi juga sudah memiliki lapisan fitur lanjutan seperti ekspor PDF/CSV, backup terenkripsi, reminder harian, multi-currency, multi-language, premium subscription, integrasi iklan, offline lock, dan penyesuaian saldo melalui tutup buku.
