import { Spin } from "antd"
import "antd/dist/antd.css"
import * as React from "react"
import styled from "styled-components"
import { Header } from "../components/header"
import InputForm from "../components/input"

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5em;
`

const IndexPage = () => {
  const [loading, setLoading] = React.useState(false)

  const startSearch = (address, time, type) => {
    console.log(address, time, type)

    setLoading(true)

    setTimeout(() => setLoading(false), 5000)
  }

  return (
    <CenterDiv>
      {loading ? (
        <Spin size="large" />
      ) : (
        <React.Fragment>
          <Header></Header>
          <InputForm startSearch={startSearch}></InputForm>
        </React.Fragment>
      )}
    </CenterDiv>
  )
}

export default IndexPage
