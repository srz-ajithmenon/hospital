import React from 'react'

const Table = (props) => {
  return (
  <table id="tableId">
        <thead>     
          <tr>
            { props.head.map( headItem => (
                <th key={headItem.keyValue}>
                    {headItem.label}
                </th>
            ))}
          </tr>
        </thead>
        <tbody>
        { props.data.map( (dataItem, index) =>{ 
              return (
                  <tr key={index}>
                      { props.head.map(headItem => {
                      return <td key={headItem.keyValue}>{ dataItem[headItem.keyValue] }</td>
                      })}
                  </tr>
              )
        })}
        </tbody>
  </table>
  )
}

export default Table