import React, { useState, useEffect } from 'react'
import './style.css'
import Select from 'react-select'

function AdvancedSearch (props) {
  const [options, setOptions] = useState([
    { value: 'placeholder', label: 'Select search field ...' },
    { value: 'title', label: 'Title' },
    { value: 'creator', label: 'Creator' },
    { value: 'adate', label: 'Date' },
    { value: 'format', label: 'Format' },
    { value: 'objectNum', label: 'Object Number' },
    { value: 'repo', label: 'Repository' },
  ])

  const [field, fieldVisible] = useState({
    title: 'hidden',
    creator: 'hidden',
    adate: 'hidden',
    format: 'hidden',
    objectNum: 'hidden',
    repo: 'hidden',
  })
  const setField = e => {
    fieldVisible({
      ...field,
      [e]: '',
    })
    var index = options.findIndex(f => {
      return f.value == [e]
    })
    options.splice(index, 1)
  }

  const removeField = e => {
    fieldVisible({
      ...field,
      [e]: 'hidden',
    })
    var label
    switch (e) {
      case 'title' :
        label = 'Title'
        break
      case 'creator' :
        label = 'Creator'
        break
      case 'adate' :
        label = 'Date'
        break
      case 'format' :
        label = 'Format'
        break
      case 'objectNum' :
        label = 'Object Number'
        break
      case 'repo' :
        label = 'Repository'
        break
      default:
        label = null
    }
    setOptions([
      ...options,
      { value: [e], label: [label] },
    ])
  }

  return (
    <div className='advancedSearch'>
      <h3>Advanced Search</h3>
      <div className='options'>
        <Select
          options={options}
          placeholder='Select search field ...'
          onChange={e => setField(e.value)} />
      </div>
      <div className='fields'>
        <div className='title' style={{ visibility: field.title, display: field.title ? 'none' : 'block' }}>
          <label>Title</label> <input type='text' /> <button onClick={e => removeField('title')}> X </button>
        </div>
        <div className='creator' style={{ visibility: field.creator, display: field.creator ? 'none' : 'block' }}>
          <label>Creator</label> <input type='text' /><button onClick={e => removeField('creator')}> X </button>
        </div>
        <div className='adate' style={{ visibility: field.adate, display: field.adate ? 'none' : 'block' }}>
          <label>Date</label> <input type='text' /><button onClick={e => removeField('adate')}> X </button>
        </div>
        <div className='format' style={{ visibility: field.format, display: field.format ? 'none' : 'block' }}>
          <label>Format</label> <input type='text' /><button onClick={e => removeField('format')}> X </button>
        </div>
        <div className='objectNum' style={{ visibility: field.objectNum, display: field.objectNum ? 'none' : 'block' }}>
          <label>Object Number</label> <input type='text' /><button onClick={e => removeField('objectNum')}> X </button>
        </div>
        <div className='repo' style={{ visibility: field.repo, display: field.repo ? 'none' : 'block' }}>
          <label>Repository</label>
          <select>
            <option value='snite'>Snite Museum of Art</option>
            <option value='rbsc'>Rare Books and Special Collections</option>
            <option value='archives'>University Archives</option>
          </select><button onClick={e => removeField('repo')}> X </button>
        </div>
      </div>
      <button alt='Search'>Search</button><button alt='Cancel'>Cancel</button>
    </div>
  )
}

export default AdvancedSearch
