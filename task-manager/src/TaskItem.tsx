import { useState } from 'react'
import type * as React from 'react'
import type { Task } from './task'

interface TaskItemProps {
  task: Task
  onDelete: (id: number) => void
  onToggle: (id: number) => void
  onUpdate: (id: number, title: string) => string
}

function TaskItem({ task, onDelete, onToggle, onUpdate }: TaskItemProps): React.JSX.Element {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editTitle, setEditTitle] = useState<string>(task.title)
  const [error, setError] = useState<string>('')

  function startEditing(): void {
    setEditTitle(task.title)
    setError('')
    setIsEditing(true)
  }

  function handleEditChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setEditTitle(event.target.value)
    setError('')
  }

  function saveTask(): void {
    const message: string = onUpdate(task.id, editTitle)
    setError(message)
    if (message === '') setIsEditing(false)
  }

  return (
    <li className={`task-item${task.completed ? ' is-complete' : ''}`}>
      <div className="task-content">
        {isEditing ? (
          <>
            <input
              type="text"
              aria-label={`${task.title} 제목 수정`}
              value={editTitle}
              onChange={handleEditChange}
              aria-invalid={error !== ''}
              aria-describedby={error !== '' ? `edit-error-${task.id}` : undefined}
            />
            {error !== '' && (
              <p id={`edit-error-${task.id}`} className="error" role="alert">{error}</p>
            )}
          </>
        ) : (
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(): void => onToggle(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>{task.title}</span>
            <span className="status-badge">{task.completed ? '완료' : '진행 중'}</span>
          </label>
        )}
      </div>
      <div className="task-actions">
        {isEditing ? (
          <>
            <button type="button" onClick={saveTask}>저장</button>
            <button type="button" onClick={(): void => setIsEditing(false)}>취소</button>
          </>
        ) : (
          <button type="button" onClick={startEditing}>수정</button>
        )}
        <button type="button" className="delete-button" onClick={(): void => onDelete(task.id)}>삭제</button>
      </div>
    </li>
  )
}

export default TaskItem
