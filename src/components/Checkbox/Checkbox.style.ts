import styled from 'styled-components'

export const Wrapper = styled.div`
  .container {
    display: block;
    position: relative;
    padding-left: 47px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    span {
      font-size: 16px;
      font-weight: 500;
      line-height: 16.08px;
      color: ${({ theme }) => theme.colors.textColor2};
      padding-top: 8px;
      display: block;
      max-width: 230px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    /* Hide the browser's default checkbox */
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 32px;
      width: 32px;
      background-color: ${({ theme }) => theme.colors.transparent};
      border: 1.5px solid ${({ theme }) => theme.colors.textColor2};
      border-radius: 50%;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
      position: absolute;
      display: none;
    }
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: ${({ theme }) => theme.colors.success};
    border: 1.5px solid ${({ theme }) => theme.colors.success2};
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    content: url(/assets/icons/check.svg);
    left: 8px;
    top: 8px;
    width: 15px;
    height: 13px;
  }
`
