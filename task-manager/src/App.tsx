import { useState } from 'react'
import type * as React from 'react'
import TaskItem from './TaskItem'
import type { Task } from './task'
import { validateTaskTitle } from './task'
import './App.css'

// Task[]는 Task 객체가 들어 있는 배열을 뜻합니다.
const initialTasks: Task[] = [
  { id: 1, title: 'React 컴포넌트 배우기', completed: true },
  { id: 2, title: 'TypeScript 인터페이스 이해하기', completed: false },
  { id: 3, title: 'Task Manager 목록 만들기', completed: false },
  { id: 4, title: '오늘 배운 내용 정리하기', completed: false },
  { id: 5, title: '집 가기', completed: false },
]

function App(): React.JSX.Element {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [inputValue, setInputValue] = useState<string>('')
  const [error, setError] = useState<string>('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value)
    setError('')
  }

  function addTask(title: string): void {
    const message: string = validateTaskTitle(title)
    setError(message)
    if (message !== '') return

    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    }

    setTasks((previousTasks: Task[]): Task[] => [...previousTasks, newTask])
    setInputValue('')
  }

  function deleteTask(id: number): void {
    setTasks((previousTasks: Task[]): Task[] => [
      ...previousTasks.filter((task: Task): boolean => task.id !== id),
    ])
  }

  function toggleTask(id: number): void {
    setTasks((previousTasks: Task[]): Task[] =>
      previousTasks.map((task: Task): Task =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  // 실패하면 오류 메시지를, 성공하면 빈 문자열을 반환합니다.
  function updateTask(id: number, title: string): string {
    const message: string = validateTaskTitle(title)
    if (message !== '') return message

    setTasks((previousTasks: Task[]): Task[] =>
      previousTasks.map((task: Task): Task =>
        task.id === id ? { ...task, title: title.trim() } : task,
      ),
    )
    return ''
  }

  const completedCount: number = tasks.filter(
    (task: Task): boolean => task.completed,
  ).length
  const progress: number = tasks.length === 0 ? 0 : Math.round(completedCount / tasks.length * 100)

  return (
    <main className="task-manager">
      <header className="page-header">
        <div className="header-decoration" aria-hidden="true"><span>✓</span><i></i><i></i></div>
        <div className="brand"><span className="brand-mark" aria-hidden="true">✓</span> MY LITTLE PLANNER</div>
        <p className="eyebrow">하나씩, 나의 속도로</p>
        <h1>Task Manager<span>.</span></h1>
        <p className="subtitle">머릿속 할 일을 내려놓고, 오늘의 한 걸음을 시작해요.</p>
      </header>
      <section className="stats" aria-label="할 일 통계">
        <div className="stat"><span className="stat-icon" aria-hidden="true">☰</span><span>전체 할 일</span><strong>{tasks.length}<small>개</small></strong></div>
        <div className="stat"><span className="stat-icon" aria-hidden="true">✓</span><span>완료한 일</span><strong>{completedCount}<small>개</small></strong></div>
        <div className="stat"><span className="stat-icon" aria-hidden="true">◷</span><span>남은 할 일</span><strong>{tasks.length - completedCount}<small>개</small></strong></div>
      </section>
      <section className="list-panel" aria-labelledby="list-heading">
        <div className="panel-heading">
          <div><h2 id="list-heading">나의 할 일</h2><p>작은 완료가 모여 멋진 하루가 돼요.</p></div>
          <span className="count-badge">{tasks.length} TASKS</span>
        </div>
      <div className="task-input">
        <input
          type="text"
          aria-label="새로운 Task"
          placeholder="새로운 할 일을 적어보세요"
          value={inputValue}
          onChange={handleInputChange}
          aria-invalid={error !== ''}
          aria-describedby={error !== '' ? 'add-error' : undefined}
        />
        <button type="button" onClick={(): void => addTask(inputValue)}>
          <span aria-hidden="true">＋ </span>추가
        </button>
      </div>
      {error !== '' && <p id="add-error" className="error" role="alert">{error}</p>}
      <ul className="task-list">
        {tasks.map((task: Task): React.JSX.Element => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
            onUpdate={updateTask}
          />
        ))}
      </ul>
      {tasks.length === 0 && <p className="empty-state">아직 할 일이 없어요.<br />위 입력창에서 첫 번째 할 일을 추가해보세요.</p>}
      <div className="progress-section">
        <div className="progress-caption"><span>차곡차곡 쌓이는 성취</span><strong>{progress}% 완료</strong></div>
        <progress value={completedCount} max={tasks.length || 1} aria-label="할 일 완료율" />
      </div>
      </section>
      <footer className="page-footer">한 번에 하나씩, 그것만으로 충분해요.</footer>
    </main>
  )
}

export default App
