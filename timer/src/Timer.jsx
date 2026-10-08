import "./Timer.css";


// import { useState } from "react";

// function Timer() {
//   const [seconds, setSeconds] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   function handleStart() {
//     setIsRunning(true);
//   }

//   function handlePause() {
//     setIsRunning(false);
//   }

//   return (
//     <div>
//       <p>현재 시간: {seconds}초</p>
//       <p>현재 상태: {isRunning ? "Running" : "Paused"}</p>

//       <button onClick={handleStart}>Start</button>
//       <button onClick={handlePause}>Pause</button>
//     </div>
//   );
// }

// export default Timer;

// // seconds는 화면에 표시되고 앞으로 변경될 값이므로 State로 관리합니다.
// // isRunning은 타이머의 실행 상태를 관리하는 State입니다.
// // State를 설정하는 함수로 값이 변경되면 React가 컴포넌트를 다시 실행합니다.
// // 이 Re-render 과정에서 새로운 State를 반영한 JSX로 화면을 갱신합니다.
// // 아직 setInterval을 사용하지 않으므로 seconds는 0으로 유지됩니다.


// import { useEffect, useState } from "react";

// function Timer() {
//   const [seconds, setSeconds] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   function handleStart() {
//     setIsRunning(true);
//   }

//   function handlePause() {
//     setIsRunning(false);
//   }

//   function handleReset() {
//     setSeconds(0);
//     // isRunning은 변경하지 않으므로 Start / Pause 상태가 유지됩니다.
//   }

//   useEffect(() => {
//     if (!isRunning) return;

//     const intervalId = setInterval(() => {
//       setSeconds(prev => prev + 1);
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [isRunning]);

//   return (
//     <div>
//       <p>현재 시간: {seconds}초</p>
//       <p>현재 상태: {isRunning ? "Running" : "Paused"}</p>

//       <button onClick={handleStart}>Start</button>
//       <button onClick={handlePause}>Pause</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// }

// export default Timer;

// // seconds는 경과한 시간을, isRunning은 타이머의 실행 여부를 관리합니다.
// // State 값이 변경되면 React가 다시 렌더링하여 화면을 갱신합니다.
// //
// // Reset은 버튼 클릭에 대한 동작이므로 Event Handler에서 처리합니다.
// // Effect에 넣으면 의존성 변경에 따라 초기화가 실행될 수 있으므로,
// // 사용자가 Reset을 클릭한 시점에 직접 setSeconds(0)을 호출합니다.
// //
// // Effect는 isRunning에 따라 interval을 시작하고 정리하는 역할입니다.
// // seconds는 Functional Update로 갱신하므로 의존성은 [isRunning]입니다.
// // Cleanup에서 clearInterval을 호출해 기존 interval을 제거합니다.




// import { useEffect, useState } from "react";

// function Timer() {
//   const [seconds, setSeconds] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   function handleStart() {
//     setIsRunning(true);
//   }

//   function handlePause() {
//     setIsRunning(false);
//   }

//   function handleReset() {
//     setSeconds(0);
//     // isRunning은 변경하지 않으므로 Start / Pause 상태가 유지됩니다.
//   }

//   useEffect(() => {
//     if (!isRunning) return;

//     const intervalId = setInterval(() => {
//       setSeconds(prev => prev + 1);
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [isRunning]);

//   return (
//     <div>
//       <p>현재 시간: {seconds}초</p>
//       <p>현재 상태: {isRunning ? "Running" : "Paused"}</p>

//       <button onClick={handleStart}>Start</button>
//       <button onClick={handlePause}>Pause</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// }

// export default Timer;

// // seconds는 경과한 시간을, isRunning은 타이머의 실행 여부를 관리합니다.
// // State 값이 변경되면 React가 다시 렌더링하여 화면을 갱신합니다.
// //
// // Reset은 버튼 클릭에 대한 동작이므로 Event Handler에서 처리합니다.
// // Effect에 넣으면 의존성 변경에 따라 초기화가 실행될 수 있으므로,
// // 사용자가 Reset을 클릭한 시점에 직접 setSeconds(0)을 호출합니다.
// //
// // Effect는 isRunning에 따라 interval을 시작하고 정리하는 역할입니다.
// // seconds는 Functional Update로 갱신하므로 의존성은 [isRunning]입니다.
// // Cleanup에서 clearInterval을 호출해 기존 interval을 제거합니다.


import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [targetTime, setTargetTime] = useState("");

  const target = Number(targetTime);
  const isValidTarget = Number.isFinite(target) && target > 0;
  const hasReachedTarget = isValidTarget && seconds >= target;

  function handleStart() {
    if (!hasReachedTarget) {
      setIsRunning(true);
    }
  }

  function handlePause() {
    setIsRunning(false);
  }

  function handleReset() {
    setSeconds(0);
    // 실행 여부와 Lap 기록은 그대로 유지합니다.
  }

  function handleLap() {
    setLaps(prev => [...prev, seconds]);
  }

  function handleTargetChange(event) {
    setTargetTime(event.target.value);
  }

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setSeconds(prev => Number((prev + 0.1).toFixed(1)));
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  useEffect(() => {
    if (hasReachedTarget && isRunning) {
      setIsRunning(false);
    }
  }, [hasReachedTarget, isRunning]);

  return (
    <div className="timer">
      <p>현재 시간: {seconds.toFixed(1)}초</p>
      <p>현재 상태: {isRunning ? "Running" : "Paused"}</p>

      <button onClick={handleStart} disabled={hasReachedTarget}>
        Start
      </button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleLap}>Lap</button>

      <div>
        <label htmlFor="targetTime">목표 시간(초): </label>
        <input
          id="targetTime"
          type="number"
          min="0.1"
          step="0.1"
          value={targetTime}
          onChange={handleTargetChange}
          placeholder="예: 5.5"
        />
      </div>

      {hasReachedTarget && <p role="status">목표시간도달</p>}

      <h3>Lap 기록</h3>
      <ol>
        {laps.map((lap, index) => (
          <li key={index}>{lap.toFixed(1)}초</li>
        ))}
      </ol>
    </div>
  );
}

export default Timer;

// seconds는 경과 시간, isRunning은 실행 여부를 관리합니다.
// laps는 Lap 버튼을 누른 순간의 시간을 저장하는 배열 State입니다.
// 기존 배열을 직접 변경하지 않고 새 배열을 만들어 기록을 추가합니다.
//
// 100ms마다 Functional Update로 seconds를 0.1초 증가시킵니다.
// 소수 계산 오차가 누적되지 않도록 소수 첫째 자리로 반올림합니다.
// toFixed(1)은 화면에 소수 첫째 자리까지 표시하는 데도 사용합니다.
//
// interval Effect는 실행 여부에 따라 시작하거나 정리하므로
// Dependency Array는 [isRunning]입니다.
// Pause 또는 Unmount 시 Cleanup에서 interval을 제거합니다.
//
// 목표 도달 여부는 seconds와 목표 시간으로 계산할 수 있어 별도 State가 필요 없습니다.
// 목표를 넘길 수도 있으므로 === 대신 >=로 비교합니다.
// 목표 도달 Effect는 도달 여부와 실행 상태가 변경될 때 자동 Pause합니다.
//
// Reset과 Lap은 사용자 클릭에 대한 동작이므로 Event Handler에서 처리합니다.