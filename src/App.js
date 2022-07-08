function App() {
  const handlePrint = () => {
    window.print()
  }
  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
      {/* Header */}
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between "> 

          <div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoice</h1>
          </div>

          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li><button className="btn btn-print" onClick={handlePrint} >Print</button></li>
              <li><button className="btn btn-download">Download</button></li>
              <li><button className="btn btn-send">Send</button></li>
            </ul>
          </div>

        </header>
      {/* End of Header */}

      {/* Your Details */}
      <section className="flex flex-col items-end justify-end">
        <h2 className="text-xl uppercase">Ena Jenkins</h2>
        <p>Your Address</p>
      </section>
      {/* End of Your Details */}

      {/* Client Details */}
      <section className="mt-5">
        <h2 className="text-xl uppercase">Client's Name</h2>
        <p>Client's Address</p>
      </section>      
      {/* End of Client Details */}

      {/* Dates */}
      <article  className="my-5 flex items-end justify-end">
        <ul>
          <li><span className="font-bold">Invoice Number:</span> xxxx</li>
          <li><span className="font-bold">Invoice Date:</span> xx/xx/xxxx</li>
          <li><span className="font-bold">Due Date:</span> xx/xx/xxxx</li>
        </ul>
      </article>
      {/* End of Dates */}

      {/* Table */}
      <div className="my-5">
        This is the table.
      </div>
      {/* End of Table */}

      {/* Notes */}
      <section className="mb-5">
        {/* Textarea */}
        <p>Notes to the Client</p>
      </section>
      {/* End of Notes */}

      {/* Footer */}
      <footer>
        <ul  className="flex items-center justify-center flex-wrap">
          <li><span className="font-bold">Your Name: </span> Ena Jenkins</li>
          <li><span className="font-bold">Your Email Address: </span> enajenkins@gmail.com</li>
          <li><span className="font-bold">Phone Number: </span> 312-555-5555</li>
          <li><span className="font-bold">Bank: </span> Chase or Bank Account?</li>
          <li><span className="font-bold">Account Holder: </span> Ena Jenkins</li>
          <li><span className="font-bold">Account Number: </span> 1234 5678 9100</li>
          <li><span className="font-bold">Website: </span> https://www.google.com</li>
        </ul>
      </footer>
      {/* End of Footer */}

      </main>
    </>
  );
}

export default App;

// <input type="text" name="text" id="text" placeholder="Enter your name" required />

