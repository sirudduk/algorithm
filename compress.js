// 압축 알고리즘을 개발해야 합니다.
// 아래에 요구사항에 맞게 함수를 2개 작성해주세요.

// • 문자열을 아래와 같은 방식으로 압축하는 함수를 작성해주세요.
// (ZZZAAAABBCCQ => 3Z4A2B2C1Q)
// String compress(String any)

// • 압축된 문자열을 아래와 같은 방식으로 해제하는 함수를 작성해주
// 세요.
// (3Z4A2B2C1Q => ZZZAAAABBCCQ)
// String decompress(String compressed)

function compress(str) {

  let count = 1;
  let compressString = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++;
    } else {
      compressString += str[i]+count;
      count = 1;
    }
  }

  return compressString;

};

function decompress(str) {
  let decompressString = '';

  for (let i = 0; i < str.length; i++) {
    // 숫자인지 넘버인지 확인
    if (isNaN(str[i])) {
      for (let k = 0; k < str[i-1]; k++) {
        decompressString += str[i];
      }
    }
  }
  return decompressString;
};