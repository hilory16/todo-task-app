import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 25px;
  height: 116px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.lemon};
  position: relative;
  border: 2px solid #9eb031;
  width: 100%;

  ::before {
    content: '';
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0;
    height: 2px;
    background: #ebf5b1;
  }

  .trophy-container {
    margin-right: 25px;
  }

  .plan-heading {
    color: ${({ theme }) => theme.colors.textColor2};
    text-shadow: 0px 2.5px white;
  }

  .upgrade-cost {
    position: absolute;
    background: ${({ theme }) => theme.colors.textColor2};
    width: 66px;
    height: 71px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -2px;
    right: 24px;

    .upgrade-cost-text {
      color: ${({ theme }) => theme.colors.lemon2};
      font-size: 18px;
      font-weight: 500;
      line-height: 19.05px;
    }
  }
`
