import { useState } from "react"; // to manage local state
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Table from "./components/Table";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
// create state values and set them to false by default...
// We will use them to render components based on a condition
const [showInvoice, setShowInvoice] = useState(false);
// states we will need to manage for the invoice form section
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

  const handlePrint = () => {
    window.print()
  }
  return (
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
      {/* If showInvoice is true, render components, or else render the form input CHANGE NOTES TO EXPLAIN WHY */}
      {showInvoice ? 
        <div>
          {/* Header */}
          {/* Pass handlePrint in as a prop here then pass it to the Header function in Header.js as a destructured prop */}
          <Header handlePrint={handlePrint} />
          {/* End of Header */}

          {/* Main Details */}
          {/* Pass in name, address, email as props EXPLAIN WHY HERE */}
          <MainDetails name={name} address={address} />
          {/* End of Main Details */}

          {/* Client Details */}
          <ClientDetails clientName={clientName} clientAddress={clientAddress} />
          {/* End of Client Details */}

          {/* Dates */}
          <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
          {/* End of Dates */}

          {/* Table */}
          <Table />
          {/* End of Table */}

          {/* Notes */}
          <Notes notes={notes} />
          {/* End of Notes */}

          {/* Footer */}
          <Footer name={name} email={email} phone={phone} website={website} bankAccountNumber={bankAccountNumber} bankName={bankName} />
          <button onClick={() => setShowInvoice(false)} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>
          {/* End of Footer */}
        </div> : (
          <>
          {/* State values that you will need to add: name, address, email, phone, bank name, bank account number, website, client name, client address, invoice number, invoice date, due date, notes */}
          <div className="flex flex-col justify-center">
            {/* Form */}
            <label htmlFor="name">Enter your name</label>        
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


          <label htmlFor="invoiceNumber">Enter your invoice number</label>
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

          <label htmlFor="invoiceDate">Enter your invoice date</label>
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

          <label htmlFor="dueDate">Enter your due date</label>
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