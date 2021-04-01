import { SearchOutlined } from "@ant-design/icons"
import { Button, Input, InputNumber, Select } from "antd"
import * as React from "react"
import styled from "styled-components"
const { Option } = Select

const Label = styled.div`
  margin-top: 1em;
`

const InputForm = ({ startSearch }) => {
  const [address, setAddress] = React.useState(undefined)
  const [time, setTime] = React.useState(undefined)
  const [type, setType] = React.useState(undefined)

  const search = () => {
    startSearch(address, time, type)
  }

  return (
    <div>
      <Label>Adresse</Label>
      <Input
        style={{ width: "500px" }}
        size="large"
        placeholder="Åhusene 3, Aarhus C"
        onChange={event => setAddress(event.target.value)}
        value={address}
      />

      <Label>Transporttid (minutter)</Label>
      <InputNumber
        style={{ width: "500px" }}
        size="large"
        placeholder="30"
        min={1}
        max={60}
        onChange={event => setTime(event)}
        value={time}
      />

      <Label>Type</Label>
      <Select
        size="large"
        style={{ width: "500px" }}
        value={type}
        onChange={setType}
      >
        <Option value="car">Bil</Option>
        <Option value="bike">Cykel</Option>
        <Option value="walk">Gå</Option>
      </Select>

      <div>
        <Button
          onClick={() => search()}
          size="large"
          type="primary"
          style={{ width: "500px", marginTop: "2em" }}
          icon={<SearchOutlined />}
        >
          Søg
        </Button>
      </div>
    </div>
  )
}

export default InputForm
