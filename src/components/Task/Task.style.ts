import styled from 'styled-components'

export const TaskWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`

export const TaskHeadingWrapper = styled.div`
  height: 125px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 28.13px;
    text-shadow: 0px 2.5px black;
  }
`

export const TaskControlWrapper = styled.div`
  padding: 28px 20px;

  .input-area {
    margin-bottom: 30px;
  }

  .button-container {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 20px;
    bottom: 25px;
    left: 20px;
    right: 20px;

    .delete-button {
      width: 121px;
    }
  }
`
