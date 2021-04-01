import { SearchOutlined } from "@ant-design/icons"
import { Button, Input, InputNumber, Select } from "antd"
import * as React from "react"
import styled from "styled-components"
const { Option } = Select

const Label = styled.div`
  margin-top: 1em;
`

export const InputForm = () => {
  return (
    <div>
      <Label>Adresse</Label>
      <Input
        style={{ width: "500px" }}
        size="large"
        placeholder="Åhusene 3, Aarhus C"
      />

      <Label>Transporttid (minutter)</Label>
      <InputNumber
        style={{ width: "500px" }}
        size="large"
        placeholder="30"
        min={1}
        max={60}
        defaultValue={3}
      />

      <Label>Type</Label>
      <Select size="large" style={{ width: "500px" }} defaultValue="car">
        <Option value="car">Bil</Option>
        <Option value="bike">Cykel</Option>
        <Option value="walk">Gå</Option>
      </Select>

      <div>
        <Button
          size="large"
          type="primary"
          style={{ width: "500px", marginTop: "2em" }}
          icon={<SearchOutlined />}
        >
          Search
        </Button>
      </div>
    </div>
  )
}
