import "antd/dist/antd.css"
import * as React from "react"
import styled from "styled-components"
import { Header } from "../components/header"
import { InputForm } from "../components/input"

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5em;
`

const IndexPage = () => (
  <CenterDiv>
    <Header></Header>
    <InputForm></InputForm>
  </CenterDiv>
)

export default IndexPage
