/** useEffect() ** (from https://reactjs.org/docs/hooks-reference.html#useeffect)
 * Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.
 * 
 * Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from React’s purely functional world into the imperative world.
 * 
 * Warning: Cannot update a component (`App`) while rendering a different component (`TableForm`). 
*/

import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TableForm({ 
  description, setDescription,
  quantity, setQuantity,
  price, setPrice,
  amount, setAmount,
  list, setList
}) {

  const handleSubmit = (e) => {
    e.preventDefault()

    // uuid generates unique IDs for every time we submit the items from the form
    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      amount,
      price
    }
    // set vallues back to empty string

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

    //test list
    console.log(list)
  }

  // useEffect() - ADD NOTES HERE
  useEffect(() => {
      const calcAmount = (amount) => {
        setAmount(quantity * price)
      } 

      calcAmount(amount) 
    }, [amount, price, quantity, setAmount])

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
        <button type="submit" className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Add Table Items</button>
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
      </section>
      </>
    )
}







            // <li><span className="font-bold">Description: </span>{description}</li>
            // <li><span className="font-bold">Quantity: </span>{quantity}</li>
            // <li><span className="font-bold">Price: </span>{price}</li>
            // <li><span className="font-bold">Amount: </span>{amount}</li>
