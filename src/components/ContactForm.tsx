"use client";
import { Send } from "react-feather";

export const ContactForm = () => {
  const handleSubmit = (): void => {
    console.log('btn send');
  }
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <div className="form-group gap-6">
        <div className="form-field">
          <label className="form-label">Email</label>

          <input
            placeholder="Enter your email here..."
            type="email"
            required
            className="px-4 py-2 bg-gray-500 outline-none text-white max-w-full rounded-full"
          />
        </div>
        <div className="form-field">
          <label className="form-label">Subject</label>

          <input
            placeholder="Enter the subject here..."
            type="text"
            required
            className="px-4 py-2 bg-gray-500 outline-none text-white max-w-full rounded-full"
          />
        </div>
        <div className="form-field">
          <label className="form-label">Message</label>
          
          <textarea 
            className="px-4 py-2 bg-gray-500 outline-none max-w-full rounded-2xl" 
            placeholder="Enter the message here.." 
            required
            rows={5}
          ></textarea>
        </div>
        <div className="form-field pt-5">
          <div className="form-control justify-center">
            <button 
              type="button" 
              className="btn btn-primary btn-rounded w-1/2 flex gap-4 items-center my-8"
              onClick={handleSubmit}
            >
              <Send /> Send
            </button>
          </div>
          <p className="font-light text-sm text-slate-400 text-center my-62">You accept that we can use your email to contact you in a response of your message.</p>
        </div>
      </div>
    </div>
  );
};
