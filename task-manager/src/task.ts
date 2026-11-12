export interface Task {
  id: number
  title: string
  completed: boolean
}

export function validateTaskTitle(title: string): string {
  if (title.trim() === '') return '할 일을 입력해주세요.'
  if (title.trim().length > 100) return '할 일은 100자 이하로 입력해주세요.'
  return ''
}
