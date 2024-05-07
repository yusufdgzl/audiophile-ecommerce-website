export default function CartSummary() {
  return (
    <div className="bg-white space-y-6 p-6  md:w-[350px] rounded-xl ">
      <h2 className="text-lg font-semibold">SUMMARY</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <p>TOTAL</p>
          <p className="font-semibold text-lg">$0</p>
        </div>
        <div className="flex justify-between">
          <p>SHIPPING</p>
          <p className="font-semibold text-lg">$0</p>
        </div>
        <div className="flex justify-between">
          <p>VAT (INCLUDED)</p>
          <p className="font-semibold text-lg">$0</p>
        </div>
        <div className="flex justify-between">
          <p>GRAND TOTAL</p>
          <p className="font-semibold text-lg">$0</p>
        </div>
      </div>
      <button className="btn-orange w-full">CONTINUE & PAY</button>
    </div>
  );
}
