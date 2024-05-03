export default function CheckoutForm() {
  return (
    <form className="bg-white p-6 md:p-14 max-w-[900px] ">
      <h2 className="text-3xl font-semibold">CHECKOUT</h2>
      <div>
        <p className="text-[#e58c55] py-6 font-semibold text-sm">BILLING DETAILS</p>
        <div className="grid md:grid-cols-2 gap-4  ">
          <div className="flex flex-col justify-center  w-full  space-y-2">
            <label className="form-label " htmlFor="name">
              Name
            </label>
            <input
              className="form-input"
              placeholder="John Doe"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="flex flex-col w-full  space-y-2 ">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              className="form-input "
              placeholder="john@doe.com"
              type="email"
              id="email"
              name="name"
            />
          </div>
          <div className="flex flex-col w-full  space-y-2 ">
            <label className="form-label" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="form-input "
              placeholder="+1 202-555-0136"
              type="text"
              id="phone"
              name="name"
            />
          </div>
        </div>

        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
      </div>
    </form>
  );
}
