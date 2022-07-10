import React from "react";

export default function Table({ list, total }) {
  return (
      <>
        <table width="100%" className="mb-10">
          <thead>
            <tr className="bg-gray-100 p-1">
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          {list.map(({ id, description, quantity, price, amount }) => (
            // Why are we adding the id to the fragment?
            <React.Fragment key={id}>
              <tbody>
                <tr>
                  <td>{description}</td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td>{amount}</td>
                </tr>
              </tbody>
            </React.Fragment>
          ))}
          </table>
          <div><h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">USD {total.toLocaleString()}</h2></div>
      </>
  )
}