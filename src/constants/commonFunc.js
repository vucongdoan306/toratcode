function getImgCard(imgName) {
  return new URL(`/src/assets/img/cards/${imgName}`, import.meta.url).href;
}

function getImgStone(imgName) {
  return new URL(`/src/assets/img/stones/${imgName}`, import.meta.url).href;
}

function magicShuffle(arr) {
  // Tạo một bản sao của mảng để tránh làm thay đổi trực tiếp trên mảng gốc
  const shuffledArr = arr.slice();

  // Lấy số lượng phần tử trong mảng
  let n = shuffledArr.length;

  // Chạy vòng lặp while để hoán đổi phần tử
  while (n > 1) {
    // Giảm n đi 1
    n--;

    // Lấy một số ngẫu nhiên từ 0 đến n
    const randomIndex = Math.floor(Math.random() * (n + 1));

    // Hoán đổi phần tử ở vị trí n với phần tử ở vị trí randomIndex
    const temp = shuffledArr[n];
    shuffledArr[n] = shuffledArr[randomIndex];
    shuffledArr[randomIndex] = temp;
  }

  return shuffledArr;
}

function stoneShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function flowerShuffle(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const j = Math.floor(Math.random() * n);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getRandomDeck() {
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
  const result = [];

  for (let i = 0; i < 3; i++) {
    // Nếu danh sách số còn ít hơn 3 phần tử, ta không thể lấy nữa để tránh lỗi.
    if (numbers.length < 3) {
      break;
    }
    // Lấy một số ngẫu nhiên từ danh sách
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNumber = numbers[randomIndex];
    // Thêm số ngẫu nhiên vào danh sách kết quả
    result.push(randomNumber);
    // Xóa số vừa lấy ra khỏi danh sách để tránh trùng lặp
    numbers.splice(randomIndex, 1);
  }

  return result;
}

export {
  getImgCard,
  getImgStone,
  magicShuffle,
  getRandomDeck,
  stoneShuffle,
  flowerShuffle,
};
