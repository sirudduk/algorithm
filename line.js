// 세 점이 주어지면, 직선상에 있는지 확인하는 코드를 작성해
// 주세요.

// • boolean isStraightLine(int x1, int y1, int x2, int y2, int x3,
// int y3)

// • (0,0), (1,1), (2,2) = true

// • (0,0), (1,2), (2,2) = false

function isStraightLine (x1,y1,x2,y2,x3,y3) {

  const ary = [[x1, y1], [x2, y2], [x3, y3]];

  // 대각선
  function diagonal () {
    for (let i = 0; i < ary.length; i++) {
      if (ary[i][0] !== ary[i][1]) {
        return false;
      }
    }
    return true;
  }

  // 가로선 (y열 숫자가 일치하는지 확인)
  const horizontal = ary[0][1] + ary[1][1] == ary[2][1] * 2;
  // 세로선 (y열 숫자가 일치하는지 확인)
  const vertical = ary[0][0] + ary[1][0] == ary[2][0] * 2;

  return horizontal || vertical || diagonal();
}