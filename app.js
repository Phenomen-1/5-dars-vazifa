// 1-masala =============================

// let score = prompt("Balingizni kiriting: ");
// if (score < 0 || score > 100) {
// }
// else if (score >= 90){
//     console.log("A`lo");
// }else if (score >= 70){
//     console.log("Yaxshi");
// }else if(score >= 60){
//     console.log("Qoniqarli");
// }else{
//     console.log("Yiqildingiz");
// }

// 2-masala=================================

// let login = prompt("Loginni kiriting: ");
// let password = prompt ("Parolni kiriting: ");
// let isBlocked = false;

// if (isBlocked) {
//   console.log("Hisobingiz bloklangan");
// } else if (login === "admin" && password === "12345" && !isBlocked) {
//   console.log("Xush kelibsiz!");
// } else if (login !== "admin") {
//   console.log("Login noto‘g‘ri");
// } else if (login === "admin" && password !== "12345") {
//   console.log("Parol noto‘g‘ri");
// }

// 3-masala=========================================

// let total = 650000;
// let isMember = true;
// let discount = 0;

// if (total >= 1000000) discount = 20;
// else if (total >= 500000 && isMember) discount = 15;
// else if (total >= 500000) discount = 10;
// else if (total >= 200000) discount = 5;

// let tolov = total - (total * discount / 100);

// console.log(`Chegirma: ${discount}%`);
// console.log(`To'lov: ${tolov} so'm`);

// 4-masalaUchta tomon berilgan:


// let a = prompt ("1-tomonni kiriting: ");
// let b = prompt ("2-tomonni kiriting: ");
// let c = prompt ("3-tomonni kiriting: ");

// if ( a<=0 || b <=0 || c <= 0 ){
//     console.log("Tomonlar noto‘g‘ri");
// }else if( a + b > c || a + c > b || c + b > a){
// console.log("Uchburchak mavjud"); 
// }else{
//     console.log("Uchburchak mavjud emas.")
// }

// 5-masala=============================

// let orderPrice = 180000;
// let region = "tashkent";
// let isExpress = true;

// let delivery = 25000;

// if (region === "tashkent") {
//   delivery = orderPrice >= 200000 ? 0 : 15000;
// }

// if (isExpress) delivery += 20000;

// let total = orderPrice + delivery;

// console.log(`Yetkazib berish: ${delivery} so'm`);
// console.log(`Jami to'lov: ${total} so'm`);

// 6-masala===================================

// let age = prompt ("Yoshingizni kiriting: ");
// let experience = prompt("Tajribangiz: ");
// let englishLevel = prompt("Til bilish darajangiz: ");
// let hasCertificate = true;

// if (age < 18) {
//   console.log("Yosh talabiga mos emas");
// } else if (experience >= 2 && (englishLevel === "B2" || englishLevel === "C1")) {
//   console.log("Suhbatga taklif qilindi");
// } else if (experience >= 1 && hasCertificate) {
//   console.log("Qo‘shimcha ko‘rib chiqiladi");
// } else {
//   console.log("Talablarga mos emas");
// }

// 7-masala ==================================

// let balance = prompt ("Hisobingizni kiriting: ");
// let amount = prompt ("Yechmoqchi bo`lgan mablag`ingiz: ");
// let cardBlocked= false;

// if (cardBlocked){
//     console.log("Kartanigz bloklangan");
// }else if (amount <=0 ){
//     console.log("Summa noto`g`ri");
// }else if(amount > 1000000){
//     console.log("Kunlik limitdan oshdi");
// }else if(amount > balance){
//     console.log("Mablag` yetarli emas");
// }else {
//   balance -= amount;
//   console.log("Pul muvaffaqiyatli yechildi.");
//   console.log("Qolgan balans: " + balance + " so‘m");
// }

// 8-masala=================================

// let a = 12;
// let b = 12;
// let c = 5;

// if (a < 0 || b < 0 || c < 0) {
//   console.log("Manfiy son mavjud");
// } else if (a === b && b === c) {
//   console.log("Barcha sonlar teng");
// } else if (a === b || a === c || b === c) {
//   console.log("Ikkita son teng");
// } else {
//   console.log("Barcha sonlar har xil");
// }

// 9-masala ==============================

// let averageScore = 88;
// let attendance = 92;
// let hasWarning = false;

// // 1. Ustuvor cheklov: intizomiy ogohlantirish yoki juda past davomat bo'lsa darhol stipendiyadan mahrum qilinadi
// if (attendance < 60 || hasWarning) {
//   console.log("Stipendiya berilmaydi");
// } else if (averageScore >= 90 && attendance >= 90) {
//   console.log("Yuqori stipendiya");
// } else if (averageScore >= 75 && attendance >= 80) {
//   console.log("Oddiy stipendiya");
// } else {
//   console.log("Talablar bajarilmadi");
// }

// 10- masala ============================

// let isRegistered = true;
// let hasPaid = true;
// let isBanned = false;
// let examScore = 0;

// if (!isRegistered) {
//   console.log("Avval ro‘yxatdan o‘ting");
// } else if (!hasPaid) {
//   console.log("To‘lovni amalga oshiring");
// } else if (isBanned) {
//   console.log("Imtihonga kirish taqiqlangan");
// } else if (examScore < 0 || examScore > 100) {
//   console.log("Noto‘g‘ri natija");
// } else if (examScore === 0) {
//   console.log("Imtihonni boshlashingiz mumkin");
// } else if (examScore < 60) {
//   console.log("Imtihondan o‘tmadingiz");
// } else {
//   console.log("Imtihondan muvaffaqiyatli o‘tdingiz");
// }