// 운전자 회원가입시 차량번호를 등록받고 있습니다.
// 운전자의 차량번호 형식이 올바른지 확인하는 함수를 만들어주세요.

// • 차량번호 형식 : 문자2개 + 숫자2개 + 문자1개 + 숫자4개
// (ex: 서울27가8421)

// • boolean isRightCarNumFormat(String carNum)

// • 내장함수 OK

// • 정규표현식 X

function isRightCarNumFormat (carNum) {
  if (carNum.length !== 9) return false;

  // 문자 = true, 숫자 = false
  const formatting = [true, false, true, false];

  const area = carNum.slice(0,2);
  const areaNum = carNum.slice(2,4);
  const initial = carNum.slice(4,5);
  const num = carNum.slice(5);

  arrayNum = [area, areaNum, initial, num];

  // 형식이 맞나 확인 후 틀릴 시 false 리턴
  for (let i = 0; i < formatting.length; i++) {
    if (isNaN(arrayNum[i]) !== formatting[i]) {
      return false;
    }
  }
 
  return true;

}