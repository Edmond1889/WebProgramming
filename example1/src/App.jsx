import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// function App() {
//   return (
//     <div>
//       <h1>학생 목록</h1>

//       <StudentCard />
//       <StudentCard />
//       <StudentCard />
//     </div>
//   );
// }

// export default App;

/*********************************************************************/

// function App() {
//   return (
//     <div>
//       <h1>학생 목록</h1>

//       {/* Props 전달: name, major, grade 값을 StudentCard에 전달 */}
//       <StudentCard
//         name="홍길동"
//         major="AISW학과"
//         grade="1학년"
//       />

//       {/* Props 전달: 서로 다른 학생 정보 전달 */}
//       <StudentCard
//         name="김철수"
//         major="컴퓨터공학과"
//         grade="2학년"
//       />

//       {/* Props 전달: 같은 StudentCard 컴포넌트를 재사용 */}
//       <StudentCard
//         name="이영희"
//         major="소프트웨어학과"
//         grade="3학년"
//       />
//     </div>
//   );
// }

// export default App;


// import StudentCard from "./StudentCard";

// function App() {
//   return (
//     <div>
//       <h1>학생 목록</h1>

//       <StudentCard
//         name="홍길동"
//         major="AISW학과"
//         grade="1학년"
//       />

//       <StudentCard
//         name="김철수"
//         major="컴퓨터공학과"
//         grade="2학년"
//       />

//       <StudentCard
//         name="이영희"
//         major="소프트웨어학과"
//         grade="3학년"
//       />
//     </div>
//   );
// }

// export default App;

import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="title">
        🎓 학생 정보 관리 시스템
      </h1>

      <div className="student-list">
        <StudentCard
          name="홍길동"
          major="AISW학과"
          grade="1학년"
        />

        <StudentCard
          name="김철수"
          major="컴퓨터공학과"
          grade="2학년"
        />

        <StudentCard
          name="이영희"
          major="소프트웨어학과"
          grade="3학년"
        />
      </div>
    </div>
  );
}

export default App;











// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           집 가고 싶은 정도는 {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
