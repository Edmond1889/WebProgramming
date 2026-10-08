import { useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  return <div>현재 시간: {seconds}초</div>;
}

export default Timer;

// seconds는 화면에 표시되고 앞으로 변경될 값이므로 State로 관리합니다.
// setSeconds로 값을 변경하면 React가 다시 렌더링하여 화면을 갱신합니다.
// 아직 타이머 동작을 구현하지 않았으므로 초기값인 0초가 표시됩니다.