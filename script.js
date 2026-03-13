// 1. Елементи масиву > 3 та < 10
const customArr = [1, 5, 8, 12, 4, 9, 2, 15];
console.log("--- Таска 1: Стовпець чисел (3 < x < 10) ---");
for (let i = 0; i < customArr.length; i++) {
  if (customArr[i] > 3 && customArr[i] < 10) {
    console.log(customArr[i]);
  }
}

// 2. Пошук четвірки з перериванням (break)
const searchArr = [1, 2, 5, 9, 4, 13, 4, 10];
console.log("\n--- Таска 2: Пошук четвірки ---");
for (const item of searchArr) {
  if (item === 4) {
    console.log("Наявний!");
    break;
  }
}

// 3. Середнє арифметичне через reduce та length
const mass = [42, 2, 33, 11, 12, 10, 0];
const average = mass.reduce((acc, curr) => acc + curr, 0) / mass.length;
console.log("\n--- Таска 3: Середнє арифметичне ---");
console.log(average);

// 4. Сумарна кількість символів у масиві стрічок
const animals = ["parrot", "bull", "bear", "monkey"];
const totalChars = animals.reduce((acc, word) => acc + word.length, 0);
console.log("\n--- Таска 4: Кількість символів ---");
console.log(totalChars);

// 5. Фільтрація масиву (тільки стрічки)
const mixedArr = ["parrot", 140, "bull", true, 0, "bear", 47, "monkey"];
const stringsOnly = mixedArr.filter((item) => typeof item === "string");
console.log("\n--- Таска 5: Тільки стрічки ---");
console.log(stringsOnly);
