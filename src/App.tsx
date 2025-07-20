import { useForm } from "react-hook-form";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactForm() {
  type formVal = {
    name: string;
    email: string;
    message: string;
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<formVal>();

  const onsubmit = (data: formVal) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Contact</h2>
        <form onSubmit={handleSubmit(onsubmit)} noValidate>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Name *"
              className="form-control custom-input"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <div className="text-danger mt-1 error-text">
                {errors.name.message}
              </div>
            )}
          </div>

          <div className="mb-3">
            <input
              type="email"
              placeholder="Email *"
              className="form-control custom-input"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <div className="text-danger mt-1 error-text">
                {errors.email.message}
              </div>
            )}
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Message"
              className="form-control custom-input"
              rows={3}
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <div className="text-danger mt-1 error-text">
                {errors.message.message}
              </div>
            )}
          </div>

          <button type="submit" className="btn submit-btn w-100">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
