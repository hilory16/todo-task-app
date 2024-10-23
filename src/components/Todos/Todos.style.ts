import styled from 'styled-components'

export const TodoListWrapper = styled.div`
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const TodoItemWrapper = styled.div`
  background: ${({ theme }) => theme.colors.base};
  width: 100%;
  height: 91px;
  border-radius: 6px;
  border: 1px solid #0000001a;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 23px;

  .todo-button {
    width: 51px;
  }
`
