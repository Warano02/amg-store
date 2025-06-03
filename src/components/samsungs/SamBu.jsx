function SamBu() {
  return (
    <div>
      <Title />
      <main>

      </main>
      <Footer />
    </div>
  )
}


const Title = () => {
  return (
    <div className="fixed top-0 w-full h-20 border-b flex items-center justify-center text-black bg-white z-10">
      <div className="relative w-10/12 md:w-1/2 h-full flex items-center justify-between">
        <button  className="w-[50px] h-[50px] rounded-full bg-[#fdf6f6ab] cursor-pointer"></button>
        <h1 className="text-xl md:text-2xl font-bold">Watch design studio</h1>
        <button className="w-[150px] h-[50px] bg-black text-white rounded-4xl cursor-pointer">Buy Now</button>
      </div>
    </div>
  )
}

const Footer=()=>{
  return (
    <footer className="w-full h-96 border-t border-gray-300 flex items-center justify-center relative">
     <div className="w-1/2 h-full flex flex-col items-center justify-center">
       <div className="w-10/12 flex gap-6">
         <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold">Galaxy Watch Ultra</h1>
            <p className="font-mono"><span>44mm case,</span> <span>Titanium White</span> </p>
            <p className="font-mono">Peakform band, White Sand</p>
         </div>
        <p className="text-gray-500 text-sm md:text-base">
          From <span className="font-bold text-black">$449.99</span><br />  or <span className="font-bold text-black">$18.75</span>/mo.
        </p>
       </div>
       <button className="w-2/3 h-16 bg-black text-white rounded-4xl mt-4 cursor-pointer transition hover:bg-[#161616]">Add to Card</button>
     </div>
    </footer>
  )
}
export default SamBu
