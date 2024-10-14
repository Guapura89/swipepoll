import { Send } from "react-feather";

export const ContactForm = () => {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <div className="form-group gap-6">
        <div className="form-field">
          <label className="form-label">Email</label>

          <input
            placeholder="Type here"
            type="email"
            className="input max-w-full rounded-full"
          />
        </div>
        <div className="form-field">
          <label className="form-label">Subject</label>

          <input
            placeholder="Type here"
            type="text"
            className="input max-w-full rounded-full"
          />
        </div>
        <div className="form-field">
          <label className="form-label">Message</label>

          <textarea className="textarea max-w-full" placeholder="Message" rows={8}></textarea>
        </div>
        <div className="form-field pt-5">
          <div className="form-control justify-center">
            <button 
              type="button" 
              className="btn btn-primary btn-rounded w-1/2 flex gap-4 items-center my-8"
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
