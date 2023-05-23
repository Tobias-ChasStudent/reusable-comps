import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Label from "./components/Label.jsx"
import Input from "./components/Input.jsx"
import Button from "./components/Button.jsx"
import LinkList from './components/LinkList'

function App() {
  const [count, setCount] = useState(0)

  const submitBtn = {
    color: "#ffffff",
    background: "#990000"
  }
  const normalBtn = {
    color: "#000000",
    background: "#32CD32"
  }
  const socialLinks = ["Facebook", "Instagram", "Messenger"]
  const navLinks = ["Home", "About", "Contact"]

  return (
    <div className="App">
      <h1>My component library</h1>
      <hr />
      <Label text="Full name">
        <Input placeholder="Sven Svensson" type="text" />
      </Label>
      <hr />
      <div className="checkboxes">
        <Label text="Gender" />
        <br />

        <Label htmlFor="Male">Male</Label>
        <Input name="Male" type="checkbox" /> <br />

        <Label htmlFor="Female">Female</Label>
        <Input name="Female" type="checkbox" />
        <br />

        <Label htmlFor="Other">Other</Label>
        <Input name="Other" type="checkbox" />
      </div>
      <hr />
      <Button
        type="button"
        style={normalBtn}
      >
        Button
      </Button>

      <Button
        type="submit"
        style={submitBtn}
      >
        Submit
      </Button>
      <hr />
      <LinkList links={socialLinks} />
      <LinkList links={navLinks} />
    </div>
  )
}

export default App
