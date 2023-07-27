function getImgCard(imgName) {
  return new URL(`/src/assets/img/cards/${imgName}`, import.meta.url).href;
}

function shuffleArray(arr) {
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

export { getImgCard, shuffleArray };
