export default function Footer({ name, phone, website, email, bankAccountNumber, bankName }) {
  return (
    <footer className="footer border-t-2 border-gray-300 pt-5">
      <ul className="flex items-center justify-center flex-wrap">
        <li><span className="font-bold">Your Name: </span> {name}</li>
        <li><span className="font-bold">Your Email Address: </span> {email}</li>
        <li><span className="font-bold">Phone Number: </span> {phone}</li>
        <li><span className="font-bold">Bank: </span> {bankName}</li>
        <li><span className="font-bold">Account Holder: </span> Ena Jenkins</li>
        <li><span className="font-bold">Account Number: </span> {bankAccountNumber}</li>
        <li><span className="font-bold">Website: </span> <a href={website} target="_blank" rel="noopener noreferrer" />{website}</li>
        {/* What rel=”noreferrer noopener” Mean and How it Affects SEO: https://www.reliablesoft.net/noreferrer-noopener/ */}
      </ul>
    </footer>
  )
}