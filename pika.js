//피카츄를 진화시키려면 12개의 피카츄 사탕이 소모되지만, 피카츄가 진화하면
//500XP와 1개의 사탕이 보너스로 주어집니다.
//또한 피카츄를 오박사님에게 보낸다면 1개의 피카츄 사탕을 받을 수 있지만 피카츄는 돌아오지 않습니다.

//피카츄 마리수와, 피카츄 사탕 갯수를 2개의 인자(arguments)로 받고
//주어진 피카츄와 사탕만으로 플레이어가 받을 수 있는 최대 XP를 구하는 함수를 작성하세요

function solution (pika, candy) {
  // constants
  const BASE = {
    XP: 500,
    LEVELUP_CANDY: 12,
    BONUS_CANDY: 1,
    NEED_PIKA: 1
  };
  const CANDY_EVOLUTION = Math.floor(candy / BASE.LEVELUP_CANDY); // 캔디로 진화 가능한 수
  const PIKA_EVOLUTION = Math.floor(pika / BASE.LEVELUP_CANDY); // 피카츄를 캔디로 바꿔서 진화 가능한 수

  // 변수 세팅
  let remainPika = 0; // 진화 후 남은 피카츄 
  let remainCandy = 0; // 진화 후 남은 캔디 (보너스캔디 + 남은 캔디)
  let bonusCandy = 0; // 진화 후 받은 보너스캔디
  let totalXP = 0;

  remainPika = pika - CANDY_EVOLUTION;
  bonusCandy = CANDY_EVOLUTION * BASE.BONUS_CANDY;
  remainCandy = bonusCandy + (candy % BASE.LEVELUP_CANDY);

  // console.log("remainPika: ",remainPika, "bonusCandy: ",bonusCandy, "remainCandy: ",remainCandy);

  // console.log("CANDY_EVOLUTION: ", CANDY_EVOLUTION, "PIKA_EVOLUTION: ", PIKA_EVOLUTION);

  // 받은 피카츄가 1보다 적으면 함수 끝
  if (pika < BASE.NEED_PIKA) {
    return totalXP;
  }

  totalXP = CANDY_EVOLUTION * BASE.XP;
  
  let combine = remainPika + remainCandy;

  if (combine - 1 >= BASE.LEVELUP_CANDY) {
    if (remainPika < remainCandy) {
      totalXP = totalXP + BASE.XP;
    } else {
      totalXP = totalXP + (PIKA_EVOLUTION * BASE.XP);
    }
  }

  return totalXP;

}