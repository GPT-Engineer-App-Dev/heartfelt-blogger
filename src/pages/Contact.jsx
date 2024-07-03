const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-4">
        If you have any questions, comments, or just want to say hello, feel
        free to reach out to me through the form below. I'd love to hear from
        you!
      </p>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;