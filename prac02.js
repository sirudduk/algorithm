/**
다양한 포맷으로 들어오는 금액 데이터 문자열에서 정확히 '금액'만 골라내어 반환하는 함수를 구현해주세요.

입력 형식
금액을 담고 있는 텍스트가 getAmount 함수의 첫번째 인자로 주어집니다.

입력으로 주어지는 텍스트는 아래 문자만 포함합니다.

숫자(0-9)
달러($), 한국 원(₩)을 나타내는 특수문자
콤마(,)
알파벳 대문자(A-Z)
한글
금액은 0 이상의 정수로만 주어진다고 가정합니다. (소숫점을 포함하지 않음)

* getAmount 함수의 이름을 변경하지 마세요.

출력 형식
금액을 담고 있는 텍스트로부터 숫자만 뽑아내어, number 타입으로 반환해주세요.
*/


/**
 * @param {string} text 금액을 담고 있는 문자열
 * @returns {number} 문자열으로부터 뽑아낸 금액 숫자
 */
function getAmount(text) {
	// 이 함수를 구현해주세요.
	let result = '';
	for (let i=0; i < text.length; i++) {

		if (!isNaN(Number(text[i]))) {      
			result += text[i]
		}
	}
	return Number(result);
}
