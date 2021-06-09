import React, { useState } from 'react'
import { Input, Button } from 'antd'

import { instagramIdToUrlSegment, urlSegmentToInstagramId } from './util.js'
import styles from './App.module.css'


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
      <div className={styles.appContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.section}>
            <div className={styles.subSection}>
              <h3 className={styles.header}>Shortcode to Id</h3>
              <div className={styles.form}>
                <Input className={styles.input} value={shorcode} onChange={getShortcode} />
                <Button onClick={convertShortcode} className={styles.button}>Convert</Button>
              </div>
            </div>
            <div className={styles.subSection}>
              <h3 className={styles.header}>Result</h3>
              <div className={styles.result}>{shortcodeToIdResult}</div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.subSection}>
              <h3 className={styles.header}>Id to Shortcode</h3>
              <div className={styles.form}>
                <Input className={styles.input} value={id} onChange={getId} />
                <Button onClick={convertId} className={styles.button}>Convert</Button>
              </div>
            </div>
            <div className={styles.subSection}>
              <h3 className={styles.header}>Result</h3>
              <div className={styles.result}>{idToShortcodeResult}</div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App
