import { useState, useRef } from "react"; // useState hook to manage local state | useRef hook to initialize ReactToPrint props
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Table from "./components/Table";
import TableForm from "./components/TableForm";
import Notes from "./components/Notes";
import Footer from "./components/Footer";
import ReactToPrint from "react-to-print"; 

/** React To Print ** 
 * https://www.npmjs.com/package/react-to-print
 * 
 * import React, { useRef } from 'react';
 * import ReactToPrint from 'react-to-print';
 * import { ComponentToPrint } from './ComponentToPrint';

        const Example = () => {
          const componentRef = useRef();

          return (
            <div>
              <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
              />
              <ComponentToPrint ref={componentRef} />
            </div>
          );
        }; 
 * 
 */

function App() {
// create state values and set them to false by default...
// We will use them to render components based on a condition
const [showInvoice, setShowInvoice] = useState(false); // false - show form by default
// states we will need to manage for the invoice form section - default values added for developemnt
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const [phone, setPhone] = useState("");
const [bankName, setBankName] = useState("");
const [bankAccountNumber, setBankAccountNumber] = useState("");
const [website, setWebsite] = useState("");
const [clientName, setClientName] = useState("");
const [clientAddress, setClientAddress] = useState("");
const [invoiceNumber, setInvoiceNumber] = useState("");
const [invoiceDate, setInvoiceDate] = useState("");
const [dueDate, setDueDate] = useState("");
const [notes, setNotes] = useState("");
const [description, setDescription] = useState("");
const [quantity, setQuantity] = useState(""); 
const [price, setPrice] = useState(""); 
const [amount, setAmount] = useState(""); 
const [list, setList] = useState([]);
const [total, setTotal] = useState(0);

// initialize useRef hook
const componentRef = useRef()

  const handlePrint = () => {
    window.print()
  }
  return (
    <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
       {/* If showInvoice is true, render components, or else render the form input */}
      {showInvoice ? (
        <>
          <ReactToPrint 
            // returns a button
            trigger={() => <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 ml-5">Print / Download</button>} 
            // https://rossbulat.medium.com/how-to-use-react-refs-4541a7501663 - "current refers to the element the ref is currently attached to, and is used extensively to access and modify our attached element."
            content={() => componentRef.current}  
          />

          <div ref={componentRef} className="p-5">
            {/* Pass handlePrint in as a prop here then pass it to the Header function in Header.js as a destructured prop */}
            <Header handlePrint={handlePrint} />
            {/* Pass in name, address, email as props */}
            <MainDetails name={name} address={address} />
            <ClientDetails clientName={clientName} clientAddress={clientAddress} />
            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
            <Table
              description={description}
              quantity={quantity}
              price={price} 
              amount={amount} 
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />
            <Notes notes={notes} />
            <Footer name={name} email={email} phone={phone} website={website} bankAccountNumber={bankAccountNumber} bankName={bankName} />
          </div>

          <button 
          onClick={() => setShowInvoice(false)} 
          className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>
        </>
        ) : (
          <>
          {/* State values that you will need to add: name, address, email, phone, bank name, bank account number, website, client name, client address, invoice number, invoice date, due date, notes */}
          <div className="flex flex-col justify-center">
            {/* Form */}
            <section className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="name">Enter your full name</label>        
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Enter your name" 
                  autoComplete="off" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address">Enter your address</label>
                  <input 
                    type="text" 
                    name="address" 
                    id="address" 
                    placeholder="Enter your address" 
                    autoComplete="off" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    required 
                  />
              </div>
            </section>

            <section className="md:grid grid-cols-3 gap-10">
            <div className="flex flex-col">
              <label htmlFor="email">Enter your email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Enter your email" 
                autoComplete="off" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone">Enter your phone</label>
                <input 
                  type="text" 
                  name="phone" 
                  id="phone" 
                  placeholder="Enter your phone" 
                  autoComplete="off" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  required 
                />

            </div>
            <div className="flex flex-col">
              <label htmlFor="website">Enter your website</label>
                <input 
                  type="url" 
                  name="website" 
                  id="website" 
                  placeholder="Enter your website" 
                  autoComplete="off" 
                  value={website} 
                  onChange={(e) => setWebsite(e.target.value)} 
                  required 
                />
            </div>
            </section>

          <section className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label htmlFor="bankName">Enter your bank name</label>
              <input 
                type="text" 
                name="bankName" 
                id="bankName" 
                placeholder="Enter your bank name" 
                autoComplete="off" 
                value={bankName} 
                onChange={(e) => setBankName(e.target.value)} 
                required 
              />
          </div>

          <div className="flex flex-col">
            <label htmlFor="bankAccountNumber">Enter your bank account number</label>
              <input 
                type="text" 
                name="bankAccountNumber" 
                id="bankAccountNumber" 
                placeholder="Enter your bank account number" 
                autoComplete="off" 
                value={bankAccountNumber} 
                onChange={(e) => setBankAccountNumber(e.target.value)} 
                required 
              />
            </div>
          </section>

          <section className="md:grid grid-cols-2 gap-10 md:mt-20">
          <div className="flex flex-col">
            <label htmlFor="clientName">Enter your client's name</label>
              <input 
                type="text" 
                name="clientName" 
                id="clientName" 
                placeholder="Enter your client's name" 
                autoComplete="off" 
                value={clientName} 
                onChange={(e) => setClientName(e.target.value)} 
                required 
              />
          </div>

          <div className="flex flex-col">
          <label htmlFor="clientAddress">Enter your client's address</label>
            <input 
              type="text" 
              name="clientAddress" 
              id="clientAddress" 
              placeholder="Enter your client's address" 
              autoComplete="off" 
              value={clientAddress} 
              onChange={(e) => setClientAddress(e.target.value)} 
              required 
            />
          </div>
          </section>

          <section className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
          <label htmlFor="invoiceNumber">Invoice Number</label>
            <input 
              type="text" 
              name="invoiceNumber" 
              id="invoiceNumber" 
              placeholder="Enter your invoice number" 
              autoComplete="off" 
              value={invoiceNumber} 
              onChange={(e) => setInvoiceNumber(e.target.value)} 
              required 
            />
          </div>
          <div className="flex flex-col">
          <label htmlFor="invoiceDate">Invoice Date</label>
            <input 
              type="date" 
              name="invoiceDate" 
              id="invoiceDate" 
              placeholder="Enter your invoice date" 
              autoComplete="off" 
              value={invoiceDate} 
              onChange={(e) => setInvoiceDate(e.target.value)} 
              required 
            />
            </div>
          <div className="flex flex-col">
          <label htmlFor="dueDate">Due Date</label>
            <input 
              type="date" 
              name="dueDate" 
              id="dueDate" 
              placeholder="Enter your due date" 
              autoComplete="off" 
              value={dueDate} 
              onChange={(e) => setDueDate(e.target.value)} 
              required 
            />
            </div>
          </section>

          {/* Table Form */}
          <section>
            <TableForm 
            description={description}
            setDescription={setDescription}
            quantity={quantity}
            setQuantity={setQuantity}
            price={price} 
            setPrice={setPrice}
            amount={amount} 
            setAmount={setAmount}
            list={list}
            setList={setList}
            total={total}
            setTotal={setTotal} 
            />
          </section>
          
          {/* <section className="">
            <div className="flex flex-col"> */}
            <label htmlFor="notes">Additional Notes</label>
              <textarea 
                name="notes" 
                id="notes" 
                cols="30"
                rows="10"
                placeholder="Additional notes to the client" 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)} 
              ></textarea>
              {/* </div>
            </section> */}

            <button 
            onClick={() => setShowInvoice(true)} 
            className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>
            {/* End Form */}
          </div>
          </>
        )}

      </main>
  );
}

export default App;