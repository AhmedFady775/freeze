import VEG from "../public/frozen-vegetables.jpg"
import FRT from "../public/frozen-fruit.jpg"
import FFRT from "../public/fruit.jpg"
import Image from "next/image"




export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="flex flex-col sm:flex-row">
        <div className="relative text-center text-white">
          <Image src={FFRT} />
          <div className="center space-y-4 whitespace-nowrap">
            <p className="text-3xl">FROZEN FRUIT</p>
            <button className="px-4 py-2 border-2 border-white rounded-3xl">VIEW PRODUCTS</button>
          </div>
        </div>

        <div className="relative text-center text-white ">
          <Image src={VEG} />
          <div className="center space-y-4  whitespace-nowrap">
            <p className="text-2xl">FROZEN VEGETABLES</p>
            <button className="px-4 py-2 border-2 border-white rounded-3xl">VIEW PRODUCTS</button>
          </div>
        </div>
      </section>
      <section className="color flex flex-col text-lg px-8 py-16 text-white text-center sm:items-center ">
        <p className="text-4xl mb-10 sm:text-7xl">THE GIFT OF NATURE</p>
        <p className="leading-8 sm:w-[50%]">Freeze is a manufacturer and exporter of frozen fruits and vegetables with an annual  production capacity of 20,000 tons, as well as a storage capacity which stores the frozen products at optimal temperatures until it is time to deliver to our customers.</p>
      </section>
      <section className="bg-slate-100 text-lg px-4 py-10 text-sky-800 text-center ">
        <p className="text-3xl mb-6">GET IN TOUCH</p>
        <form className="text-left sm:flex flex-col items-center">
          <div className="inputCont">
            <label className="inputLabel">Name</label>
            <input />
          </div>
          <div className="inputCont">
            <label className="inputLabel">E-mail</label>
            <input />
          </div>
          <div className="inputCont">
            <label className="inputLabel">Phone</label>
            <input />
          </div>
          <div className="inputCont">
            <label className="inputLabel">Subject</label>
            <input />
          </div>
          <div className="inputCont mb-10">
            <label className="inputLabel">Message</label>
            <input />
          </div>
          <div className="flex flex-col sm:w-[50%]">
            <button className="bg-sky-800 text-white py-2 ">Submit</button>
          </div>
        </form>
      </section>
    </main>
  )
}
