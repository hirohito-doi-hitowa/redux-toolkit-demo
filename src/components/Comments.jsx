import React from 'react';
import { useSelector } from 'react-redux'

export default function Comments() {
  const comments = useSelector(state => state.comments)

  return (
    <table className="table">
      <tbody>
        {
          comments.map((comment, index) => {
            return (
              <tr key={index}>
                <td>
                  {comment}
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}