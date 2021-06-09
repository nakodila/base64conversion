import React, { useState } from 'react'
import { Input, Button } from 'antd'

import { instagramIdToUrlSegment, urlSegmentToInstagramId } from './util.js'
import './App.css'


function App() {
    const [shorcode, setShortcode] = useState('')
    const [id, setId] = useState('')
    const [shortcodeToIdResult, setShortcodeToIdResult] = useState('')
    const [idToShortcodeResult, setIdToShortcodeResult] = useState('')

    const getShortcode = (e) => {
      const { value } = e.target
      setShortcode(value)
    }

    const getId = (e) => {
      const { value } = e.target
      setId(value)
    }

    const convertShortcode = () => {
      const item = urlSegmentToInstagramId(shorcode)
      setShortcodeToIdResult(item)
    }

    const convertId = () => {
      const item = instagramIdToUrlSegment(id)
      setIdToShortcodeResult(item)
    }

    return (
      <div>
        <div>
          <h3>Shortcode</h3>
          <div>
            <Input value={shorcode} onChange={getShortcode} />
            <Button onClick={convertShortcode}>Convert</Button>
            <div>{shortcodeToIdResult}</div>
          </div>
        </div>
        <div>
          <h3>Id</h3>
          <div>
            <Input value={id} onChange={getId} />
            <Button onClick={convertId}>Convert</Button>
            <div>{idToShortcodeResult}</div>
          </div>
        </div>
      </div>
  );
}

export default App
