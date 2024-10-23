import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: 20px 32px;
  display: flex;
  align-items: flex-start;
  width: 100%;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: relative;

  .user-avatar-container {
    border-radius: 50%;
    margin-right: 21px;

    image {
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
  }

  .user-text-container {
    max-width: 221px;

    h1 {
      font-size: 16px;
      text-shadow: 0px 2.5px black;
      font-weight: 500;
    }
    .welcome-text {
      color: ${({ theme }) => theme.colors.base};
      font-size: 25px;
      font-style: italic;
      font-weight: 100;
      line-height: 26.46px;
      text-shadow: 0px 2.5px black;
      margin-top: 8px;
    }
  }
`
