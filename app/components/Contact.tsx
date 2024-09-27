// components/Contact.js
const Contact = () => (
    <section className="py-20 bg-gray-100" id="contact">
      <h2 className="text-center text-4xl font-bold mb-10 text-gray-600">Get in Touch</h2>
      <form className="w-full max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input className="w-full px-3 py-2 border rounded" type="text" id="name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="w-full px-3 py-2 border rounded" type="email" id="email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea className="w-full px-3 py-2 border rounded" id="message" rows={4}></textarea>
        </div>
        <button className="bg-teal-500 w-full px-4 py-2 rounded text-white">Send Message</button>
      </form>
    </section>
  );
  export default Contact;
  