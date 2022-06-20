import { isDisabled } from '@testing-library/user-event/dist/utils'
import React, {useState} from 'react'

const Table = (props) => {

  const [offset ,setOffset]=useState(props.offset || props.data.length)
  const limit = (props.limit || props.data.length)

    const onLoadMore = () => {
      setOffset(offset+limit)
      props.handleOffSet(offset+limit)
    }
    const onLoadLess = () => {
      setOffset(offset-limit)
      props.handleOffSet(offset-limit)
    }
    
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
        {(props.offset) ? <tr key={"load"}>
              <td colSpan={props.head.length} align="right" >
                  { (offset != limit  ) ? <span onClick={onLoadLess} className="tableSpan" >{"<"}</span> : <></> }
                  { (offset < props.total ) ? <span onClick={onLoadMore} className="tableSpan" >{">"}</span> : <></> } 
              </td>
            </tr> : <></>
          }
        </tbody>
  </table>
  )
}

export default Table