import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.2);
  height: 100vh;
  overflow-y: auto;

  .add-new-todo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.textColor3};
    opacity: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 339px;
    bottom: 25px;
    z-index: 10;

    .add-text {
      font-size: 36px;
      font-weight: 400;
      line-height: 42.19px;
      color: ${({ theme }) => theme.colors.base};
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: 2px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
