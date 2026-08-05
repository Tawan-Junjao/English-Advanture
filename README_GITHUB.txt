English Adventure V3 — วิธีอัปโหลด GitHub Pages

1. ลบไฟล์เวอร์ชันเก่าใน Repository ก่อน
2. แตก ZIP นี้ แล้วอัปโหลดไฟล์ทั้งหมดที่อยู่ด้านในไปไว้ที่หน้าแรกของ Repository
3. ต้องเห็น index.html, app.js, style.css, sw.js อยู่ที่ระดับเดียวกัน
4. เข้า Settings > Pages
5. Source: Deploy from a branch
6. Branch: main และ Folder: /(root) แล้วกด Save
7. เข้า Actions รอให้ pages build and deployment เป็นสีเขียว
8. เปิดเว็บไซต์ แล้วกด Ctrl+Shift+R หรือเปิดหน้าต่างไม่ระบุตัวตนครั้งแรก

ตรวจสอบว่าอัปเดตสำเร็จ: หน้าเกมต้องแสดงคำว่า V3 และเวอร์ชัน 3.0

ไฟล์นี้ใช้ชื่อแคชใหม่และยกเลิก Service Worker เก่าก่อนติดตั้งใหม่ เพื่อแก้ปัญหาเกมค้างอยู่ที่ V2
