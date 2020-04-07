// 버스 운행여부 확인하기

// 버스의 운행 시간은 23:00~03:59 입니다.
// 그리고 일요일에서 월요일로 넘어가는 밤을 제외하고 매일 운행을 하고 있습니다.
// 날짜와 시간을 입력받으면 운행을 하는지 확인하는 함수가 필요합니다.
// • 요일과 시간(hour of day)을 입력하면 콜버스 운행 여부를 알려주
// 는 함수를 작성해주세요.

// • boolean isServiceTime(int day, int hourOfDay)

// • int day = (0, 1, 2, 3, 4, 5, 6) / 0 : 월요일, 6 : 일요일

// • int hourOfDay = 0~23

// • 내장함수 OK

function isServiceTime (d, h) {
  // 운행 요일 화~일     1: 화, 6: 일
  const day = [1,2,3,4,5,6];
  // 운행 시간 23:00~03:59
  const hour = [0,1,2,22,23];
  
  return day.includes(d) && hour.includes(h);
};