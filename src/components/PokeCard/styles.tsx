import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;

  a {
    text-decoration: none;
    color: initial;
  }

  &:hover {
    img {
      top: -10px;
    }
    .inner {
      box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    }
  }
`

export const InnerWrapper = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  border-radius: 15px;
  margin-top: 45px;
  padding: 65px 10px 20px;
  transition: box-shadow .3s;

  .number {
    text-align: center;
    text-transform: uppercase;
    color: #666;
    font-weight: bold
  }

  .name {
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 10px 0;
  }

  .types-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`

export const Img = styled.img`
  height: 90px;
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50% 0;
  transition: top .3s;
`