import { useState } from "react";
import { Mail, renderIcon } from "../utils/icons";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const contactSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

const ContactSection = ({ theme, isVisible = {}, contactItems = [] }) => {
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle, loading, success, error

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setSubmitStatus("loading");
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: "milankoradiya.work@gmail.com",
        },
        publicKey
      );

      setSubmitStatus("success");
      reset();
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-12 md:px-6 md:py-20 lg:py-28"
    >
      <div className="w-full max-w-5xl">
        <h2
          data-animate
          id="contact-title"
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center transition-all duration-1000 ${
            isVisible["contact-title"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          Get In
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent ml-2">
            Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Left: Contact Info */}
          <div
            data-animate
            id="contact-info"
            className={`transition-all duration-1000 delay-150 ${
              isVisible["contact-info"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-6"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Let's work together!
            </h3>
            <p
              className={`${
                theme?.textSecondary || "text-gray-400"
              } text-base sm:text-lg mb-6 leading-relaxed`}
            >
              Have a project in mind? Let's discuss how we can work together to
              bring your ideas to life.
            </p>

            <div className="space-y-4">
              {contactItems && contactItems.length ? (
                contactItems.map((contact, idx) => {
                  const isEmail = contact.iconKey === "mail";
                  const href = isEmail
                    ? `mailto:${contact.value}`
                    : contact.value;

                  return (
                    <a
                      key={idx}
                      href={href}
                      target={isEmail ? "_self" : "_blank"}
                      rel={isEmail ? "" : "noopener noreferrer"}
                      className={`flex items-start sm:items-center gap-3 p-3 sm:p-4 ${
                        theme?.cardBg || "bg-white/5"
                      } ${
                        theme?.border || "border-white/10"
                      } border rounded-lg ${
                        theme?.hover || "hover:bg-white/5"
                      } transition-transform duration-200 hover:scale-105 cursor-pointer block`}
                    >
                      <div className="flex-shrink-0 text-cyan-400">
                        {/* icon size grows on larger screens */}
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                          {renderIcon(contact.iconKey, "w-full h-full")}
                        </div>
                      </div>

                      <div className="min-w-0">
                        <p
                          className={`text-xs sm:text-sm ${
                            theme?.textSecondary || "text-gray-400"
                          }`}
                        >
                          {contact.label}
                        </p>
                        <p className="font-semibold truncate">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  );
                })
              ) : (
                <p
                  className={`${
                    theme?.textSecondary || "text-gray-400"
                  } text-sm`}
                >
                  No contact information provided.
                </p>
              )}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            data-animate
            id="contact-form"
            className={`transition-all duration-1000 delay-300 ${
              isVisible["contact-form"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-6"
            }`}
          >
            <div
              className={`${theme?.cardBg || "bg-white/5"} ${
                theme?.border || "border-white/10"
              } border rounded-2xl p-6 sm:p-8 relative overflow-hidden`}
            >
              {/* Loading Overlay */}
              {submitStatus === "loading" && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center z-10 rounded-2xl">
                  <Loader2 className="w-10 h-10 text-cyan-400 animate-spin mb-2" />
                  <p className="text-white font-semibold">Sending message...</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    disabled={submitStatus === "loading"}
                    {...register("name")}
                    className={`w-full px-4 py-3 ${
                      theme?.inputBg || "bg-white/3"
                    } ${
                      errors.name
                        ? "border-red-500"
                        : theme?.border || "border-white/10"
                    } border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.name ? "focus:ring-red-500" : "focus:ring-cyan-400"
                    } transition-all duration-200 ${
                      theme?.text || "text-white"
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-semibold"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    disabled={submitStatus === "loading"}
                    {...register("email")}
                    className={`w-full px-4 py-3 ${
                      theme?.inputBg || "bg-white/3"
                    } ${
                      errors.email
                        ? "border-red-500"
                        : theme?.border || "border-white/10"
                    } border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "focus:ring-red-500"
                        : "focus:ring-cyan-400"
                    } transition-all duration-200 ${
                      theme?.text || "text-white"
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    disabled={submitStatus === "loading"}
                    {...register("message")}
                    className={`w-full px-4 py-3 ${
                      theme?.inputBg || "bg-white/3"
                    } ${
                      errors.message
                        ? "border-red-500"
                        : theme?.border || "border-white/10"
                    } border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.message
                        ? "focus:ring-red-500"
                        : "focus:ring-cyan-400"
                    } transition-all duration-200 resize-none ${
                      theme?.text || "text-white"
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {submitStatus === "error" && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
                    Something went wrong. Please try again later.
                  </div>
                )}

                {submitStatus === "success" && (
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  aria-label="Send message"
                  className={`cursor-pointer w-full py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed`}
                >
                  {submitStatus === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                      <span className="text-sm sm:text-base">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-gray-400 mt-1">
                  Or email me directly at{" "}
                  <span className="font-semibold">
                    milankoradiya.work@gmail.com
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
