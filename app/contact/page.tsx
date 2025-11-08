export const metadata = { title: "Contact — NexNet CyberLabs" };

export default function ContactPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <p className="mt-4 text-gray-300 max-w-3xl">
        Request a consultation or reach our emergency hotline. We will respond promptly.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <form className="card space-y-4" action="/api/contact" method="post">
          <div>
            <label className="block text-sm text-gray-300">Name</label>
            <input name="name" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-300">Email</label>
            <input name="email" type="email" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-300">Message</label>
            <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none" />
          </div>
          <button className="rounded-md px-5 py-3 bg-brand-teal font-medium text-black">Send</button>
        </form>

        <div className="card">
          <h3 className="text-xl font-semibold">Emergency Incident?</h3>
          <p className="text-gray-300 mt-2">24/7 Hotline: +263 (000) 000 000</p>
          <p className="text-gray-300 mt-1">Email: ir@nexnet.example</p>
          <p className="text-gray-300 mt-6">Office: Harare, Zimbabwe • Warsaw, Poland</p>
        </div>
      </div>
    </div>
  );
}
