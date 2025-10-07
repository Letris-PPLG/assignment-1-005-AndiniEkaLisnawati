[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/cVk4BoX1)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20933244&assignment_repo_type=AssignmentRepo)
# 📘 Todo List API dengan Express.js

Mini project untuk belajar membuat **REST API** sederhana menggunakan **Node.js + Express.js**.  
API ini berfungsi untuk mengelola daftar todo (CRUD: Create, Read, Update, Delete).  

---

## 🚀 Fitur
- **GET /todos** → mengambil semua todo  
- **POST /todos** → menambahkan todo baru  
- **PUT /todos/:id** → update todo berdasarkan `id`  
- **DELETE /todos/:id** → menghapus todo berdasarkan `id`  
- **GET /** → cek status server  

---

## 📂 Struktur Proyek
```
todo-api/
│── index.js        # Main server
│── package.json    # Konfigurasi Node.js
```

---

## ⚙️ Instalasi & Menjalankan
1. Clone atau download project ini.  
2. Masuk ke folder project:  
   ```bash
   cd todo-api
   ```
3. Inisialisasi project Node.js:  
   ```bash
   npm init -y
   ```
4. Install Express.js:  
   ```bash
   npm install express
   ```
5. Jalankan server:  
   ```bash
   node index.js
   ```
6. Server berjalan di:  
   ```
   http://localhost:5001
   ```

---

## 📌 Endpoint API

### 1. Cek server
**GET /**  
Response:
```json
{
  "msg": "API berjalan normal",
  "code": 200
}
```

---

### 2. Ambil semua todo
**GET /todos**  
Response contoh:
```json
[
  { "id": 1, "title": "Belajar Node.js", "done": false },
  { "id": 2, "title": "Belajar Express.js", "done": true }
]
```

---

### 3. Tambah todo baru
**POST /todos**  
Body (JSON):
```json
{
  "title": "Belajar REST API",
  "done": false
}
```
Response:
```json
{
  "id": 3,
  "title": "Belajar REST API",
  "done": false
}
```

---

### 4. Update todo
**PUT /todos/:id**  
Contoh: `/todos/1`  
Body (JSON):
```json
{
  "title": "Belajar Express.js Lanjutan",
  "done": true
}
```
Response:
```json
{
  "id": 1,
  "title": "Belajar Express.js Lanjutan",
  "done": true
}
```

---

### 5. Hapus todo
**DELETE /todos/:id**  
Contoh: `/todos/2`  
Response:
```json
{
  "msg": "Todo berhasil dihapus"
}
```

---

## 🎓 Challenge untuk Student
1. Tambahkan validasi: pastikan `title` tidak kosong saat menambah todo.  
2. Tambahkan fitur pencarian dengan query param, contoh:  
   ```
   GET /todos?search=Express
   ```  
3. Simpan data ke file JSON agar data tidak hilang setelah server restart.  
4. (Opsional) Integrasikan dengan database seperti **SQLite** atau **MongoDB**.  
