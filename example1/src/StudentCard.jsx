// function StudentCard() {
//   return (
//     <div>
//       <h2>학생 정보</h2>
//       <p>이름: 홍길동</p>
//       <p>학과: AISW학과</p>
//       <p>학년: 3학년</p>
//     </div>
//   );
// }

// export default StudentCard;

/**************************************************************************/

// function StudentCard({ name, major, grade }) {
//   // Props 사용:
//   // App.jsx에서 전달받은 name, major, grade를 여기서 사용
//   // 현재 state 존재 XX >> rerendering XX

//   return (
//     <div>
//       <h2>학생 정보</h2>
//       <p>이름: {name}</p>
//       <p>학과: {major}</p>
//       <p>학년: {grade}</p>
//     </div>
//   );
// }

// export default StudentCard;


// import { useState } from "react";

// function StudentCard({ name, major, grade }) {
//   // useState:
//   // StudentCard가 자신의 상태값을 가질 수 있게 해줌
//   // likes의 초기값은 0
//   const [likes, setLikes] = useState(0);

//   const handleLike = () => {
//     // setLikes:
//     // 현재 likes 값을 1 증가시켜 새로운 상태값으로 변경
//     setLikes(likes + 1);

//     // State가 변경되면 React가 해당 컴포넌트를 Re-render함
//     // Re-render:
//     // 변경된 likes 값을 화면에 다시 반영하는 과정
//   };

//   return (
//     <div>
//       <h2>학생 정보</h2>
//       <p>이름: {name}</p>
//       <p>학과: {major}</p>
//       <p>학년: {grade}</p>

//       <button onClick={handleLike}>
//         좋아요 {likes}
//       </button>
//     </div>
//   );
// }

// export default StudentCard;
import { useState } from "react";
import "./StudentCard.css";

function StudentCard({ name, major, grade }) {
  const [liked, setLiked] = useState(false);

  const [currentMajor, setCurrentMajor] = useState(major);
  const [currentGrade, setCurrentGrade] = useState(grade);

  // 학과 수정 모드인지 여부
  const [isEditingMajor, setIsEditingMajor] = useState(false);

  // 입력창에 입력 중인 값
  const [majorInput, setMajorInput] = useState(major);

  const handleLike = () => {
    setLiked((previousLiked) => !previousLiked);
  };

  const handleMajorEdit = () => {
    setIsEditingMajor(true);
  };

  const handleMajorSave = () => {
    // 입력한 값으로 학과 변경
    setCurrentMajor(majorInput);

    // 다시 일반 화면으로 변경
    setIsEditingMajor(false);
  };

  const handleGradeChange = () => {
    setCurrentGrade((previousGrade) => {
      if (previousGrade === "1학년") return "2학년";
      if (previousGrade === "2학년") return "3학년";
      if (previousGrade === "3학년") return "4학년";

      return "1학년";
    });
  };

  return (
    <div className="student-card">
      <h2>학생 정보</h2>

      <div className="info-row">
        <span className="label">이름</span>
        <span>{name}</span>
      </div>

      <div className="info-row">
        <span className="label">학과</span>

        {isEditingMajor ? (
          <div className="edit-area">
            <input
              type="text"
              value={majorInput}
              onChange={(e) => setMajorInput(e.target.value)}
            />

            <button
              className="save-btn"
              onClick={handleMajorSave}
            >
              수정 완료
            </button>
          </div>
        ) : (
          <div className="edit-area">
            <span>{currentMajor}</span>

            <button
              className="edit-btn"
              onClick={handleMajorEdit}
            >
              수정
            </button>
          </div>
        )}
      </div>

      <div className="info-row">
        <span className="label">학년</span>
        <span>{currentGrade}</span>
      </div>

      <div className="button-area">
        <button
          className={liked ? "like-btn liked" : "like-btn"}
          onClick={handleLike}
        >
          좋아요 {liked ? 1 : 0}
        </button>

        <button
          className="grade-btn"
          onClick={handleGradeChange}
        >
          학년 변경
        </button>
      </div>
    </div>
  );
}

export default StudentCard;