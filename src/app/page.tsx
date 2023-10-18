export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <div className="container flex flex-col gap-12 px-16 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Very Good Pizza Restaurant
        </h1>

        <div className="font-extrabold tracking-tight">
          <h3 className="text-3xl">Address:</h3>
          <h3 className="text-xl">
            We are located at 509 2nd Ave S in Hopkins
          </h3>
        </div>

        <div className="font-extrabold tracking-tight">
          <h3 className="text-3xl">Hours:</h3>
          <h3 className="text-xl">Open Wednesday - Sunday from 4 pm - 11</h3>
          <h3 className="text-xl">Closed Monday and Tuesday</h3>
        </div>

        <div className="font-extrabold tracking-tight">
          <h3 className="text-3xl">Absolutely No Catering</h3>
        </div>
      </div>
    </main>
  );
}
