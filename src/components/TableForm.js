/** useEffect() ** (from https://reactjs.org/docs/hooks-reference.html#useeffect)
 * Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.
 * 
 * Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from React’s purely functional world into the imperative world.
 * 
 * Warning: Cannot update a component (`App`) while rendering a different component (`TableForm`). 
*/

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

export default function TableForm({ 
  description, setDescription,
  quantity, setQuantity,
  price, setPrice,
  amount, setAmount,
  list, setList,
  total, setTotal
}) {

  const [isEditing, setIsEditing] = useState(false)

  //const newItems = {}


  // Submit form 
  const handleSubmit = (e) => {
    e.preventDefault()

    if ( !description || !quantity || !price ) {
        alert("Please fill in all inputs.")
    } else {
      // uuid generates unique IDs for every time we submit the items from the form
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        amount,
        price
      }
      // set values back to empty string

        /** NOTES...
         * 
         * The rest operator (…) allows us to call a function with any number of arguments and then access those excess arguments as an array. The rest operator also allows us in destructuring array or objects.
         *  
         * The spread operator (…) allows us to expand an iterable like array into its individual elements.
         * 
        */
        setDescription("")
        setQuantity("")
        setAmount("")
        setPrice("")
        setList([...list, newItems]) // spread operator - get all items already in the list and add in the new items. if no items just pass in new items.
        setIsEditing(false) // allows add item buttonm to toggle lable correctly (EXPLAIN MORE LATER)

        //test list
        console.log(list)
      
    }
  }

  // Calculate items price amount
  // useEffect() - ADD NOTES HERE
  useEffect(() => {
      const calcAmount = (amount) => {
        setAmount(quantity * price)
      } 

      calcAmount(amount) 
    }, [amount, price, quantity, setAmount])

    // calculate total price of items in table
    // we want to select ONLY a particular set of tds so we'll add a class to the desired td in the component and use querySelectorAll to target all of the tds in the amount column
    useEffect(() => {
      let rows = document.querySelectorAll(".amount")
      let sum = 0

      // loop over all the rows, grab the values of the .amount td, and add them
      for (let i = 0; i < rows.length; i++ ) {
        // if the current td in the row is an amount td
        if (rows[i].className === "amount") {
          // check if the sum is not a number, display 0
          // else 
          sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
          setTotal(sum)
        }
      }

    }) // You don't need the array as the second arg if the dependencies won't change. You only need to define the dependencies in the array if they will change

    // Edit function
    // pass in the id so we can edit the row we clicked on
    const editRow = (id) => {
      // find the row you have clicked on and return the id
      const editingRow = list.find((row) => row.id === id)
      // delete the row we just clicked on so we can replace it withthe updated row
      // this will remove on click and the set functions will populate the editing fields with the deleted row's info so you can re-add it with updates
      setList(list.filter((row) => row.id !== id))
      setIsEditing(true)
      //set the value of the item description field (the new text) into the description field of the row you have clicked on
      setDescription(editingRow.description)
      setQuantity(editingRow.quantity)
      setPrice(editingRow.price)
    } 

    // Delete funtion
    // Access the id (uuid) of the row you want to delete 
    // the row items populate list so...
    // return all other rows whose id IS NOT equal to the id we clicked on
    const deleteRow = (id) => setList(list.filter((row) => row.id !== id))

    return (
      <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
        <label htmlFor="description">Item Description</label>
        <input 
          type="text" 
          name="description" 
          id="description" 
          placeholder="Item Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        </div>

        <div className="md:grid grid-cols-3 gap-10" >
          <div className="flex flex-col">
          <label htmlFor="quantity">Item quantity</label>
          <input 
            type="text" 
            name="quantity" 
            id="quantity" 
            placeholder="Item quantity" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
          />
          </div>

          <div className="flex flex-col">
          <label htmlFor="price">Item price</label>
          <input 
            type="text" 
            name="price" 
            id="price" 
            placeholder="Item price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
          />
          </div>

          <div className="flex flex-col">
          <label htmlFor="amount">Item amount</label>
          <p>{amount}</p>
          </div>
        </div>
        <button type="submit" className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
          {isEditing ? "Edit Row Item" : "Add Table Item"}
        </button>
      </form>

      {/* Table Items */}

      {/* Get items from list of table items you are adding to so we can display them in the form ui for review */}
      <section>
        <table width="100%" className="mb-10">
          <thead>
            <tr className="bg-gray-100 p-1">
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Amount</th>
              <th> </th>
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
                  <td className="amount">{amount}</td>
                  <td><button onClick={() => deleteRow(id)}><AiOutlineDelete className="text-red-500 font-bold text-xl" /></button></td>
                  <td><button onClick={() => editRow(id)}><AiOutlineEdit className="text-green-500 font-bold text-xl" /></button></td>
                </tr>
              </tbody>
            </React.Fragment>
          ))}
          </table> 
          <div><h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">USD {total.toLocaleString()}</h2></div>
      </section>
      </>
    )
}