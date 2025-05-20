function isValidEventCode(code) {
  return ['E1', 'E2', 'E3'].includes(code);
}

function isValidDate(date) {
  return Number.isInteger(date) && date >= 1 && date <= 30;
}

function checkReservation(age, eventCode, reservationDate) {
  // 잘못된 입력 검사
  if (!isValidEventCode(eventCode) || !isValidDate(reservationDate)) {
    return "잘못된 입력입니다. 프로그램을 종료합니다.";
  }

  // 이벤트별 조건 검사
  switch (eventCode) {
    case 'E1':
      if (age < 18) return "나이 제한으로 인해 예약할 수 없습니다.";
      return "예약이 완료되었습니다!";
    case 'E2':
      if (reservationDate % 2 !== 0) return "선택하신 날짜에는 예약할 수 없습니다.";
      return "예약이 완료되었습니다!";
    case 'E3':
      if (age < 16) return "나이 제한으로 인해 예약할 수 없습니다.";
      if (reservationDate % 7 !== 0) return "선택하신 날짜에는 예약할 수 없습니다.";
      return "예약이 완료되었습니다!";
    default:
      return "잘못된 입력입니다. 프로그램을 종료합니다.";
  }
}

// 예시 실행
const age = 17;
const eventCode = 'E3';
const reservationDate = 14;

const result = checkReservation(age, eventCode, reservationDate);
console.log(result);
