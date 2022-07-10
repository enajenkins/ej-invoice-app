// destructure props name, address, email
export default function MainDetails({ name, address }) {
  return (
    // pass in name and address dynamically
    <section className="flex flex-col items-end justify-end">
      <h2 className="font-bold text-xl uppercase md:text-4xl mb-1">{name}</h2>
      <p>{address}</p>
    </section>
  )
}