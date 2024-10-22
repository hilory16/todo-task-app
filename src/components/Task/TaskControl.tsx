import { Button } from '../Button'
import { Input } from '../Input'

type TaskControlProps = {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function TaskControl({ label, value, onChange }: TaskControlProps) {
  const onDeleteTask = () => {}
  const onSaveTask = () => {}

  return (
    <div>
      <Input {...{ label, value, onChange }} />
      <div className="button-container">
        <Button text="Delete" variant="danger" onClick={onDeleteTask} />
        <Button text="Save" variant="primary" onClick={onSaveTask} />
      </div>
    </div>
  )
}
