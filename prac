/** 
입력에 따라 덧셈과 곱셈을 수행하는 계산기를 만들어주세요.

입출력 형식
calculate 함수의 첫 번째 인자로 연산을 나타내는 문자열 type, 두 번째 인자로 피연산자를 나타내는 숫자의 배열 operands 가 주어집니다.

연산 종류 type은 'add' 또는 'multiply'로 주어진다고 가정합니다.

type이 'add'인 경우, operands에 있는 숫자를 모두 더한 값을 반환해주세요.

type이 'multiply'인 경우, operands에 있는 숫자를 모두 곱한 값을 반환해주세요.

피연산자의 배열 operands는 길이가 5 이하인 숫자의 배열로 주어집니다. 각 원소는 0 이상 200 이하의 값을 가집니다.
*/

function calculate(type, operands) {
	const ADD = 'add'
	const MULTIPLY = 'multiply'
	let result = 1
	if (type == ADD) {
		for (let i=0; i<operands.length; i++) {
			result += operands[i]
		}
	} else if (type == MULTIPLY) {
		
		for (let i=0; i<operands.length; i++) {
			result *= operands[i]
		}
	}
	
	return type == ADD ? result-1 : result
}
