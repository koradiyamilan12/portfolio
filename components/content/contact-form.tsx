"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { contactFormAction } from "@/lib/contact";
import type { ContactFormInput } from "@/types/contactForm";

export default function ContactForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<ContactFormInput>();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit: SubmitHandler<ContactFormInput> = async (formData) => {
    try {
      const data = await contactFormAction(formData);
      if (data.status) {
        setIsSuccess(true);
        reset();
      } else {
        setIsSuccess(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-hankenGrotesk text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Contact
        </h1>
        <p className="text-muted-foreground mt-4 text-center text-lg">
          Have a question or project in mind? Let’s connect.
        </p>
      </div>

      {/* Form Card */}
      <Card className="bg-background">
        {isSuccess ? (
          <CardContent className="flex scale-100 flex-col items-center justify-center py-14 text-center opacity-100">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
              <FaCheck className="text-2xl" />
            </div>

            <h2 className="text-foreground text-xl font-medium tracking-tight transition-colors duration-500">
              Message Sent Successfully
            </h2>

            <p className="text-muted-foreground mt-2 max-w-xs leading-relaxed">
              Thanks for reaching out. I’ll get back to you as soon as possible.
            </p>
          </CardContent>
        ) : (
          <CardContent className="">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className={`mb-2 font-medium ${errors?.name && "text-red-400"}`}
                  >
                    Name*
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className={`border-border mt-1 w-full rounded-lg border bg-zinc-50 px-4 py-2.5 transition outline-none focus:border-transparent focus:ring-2 dark:bg-zinc-900 ${
                      errors?.name
                        ? "border-red-400 focus:ring-red-400"
                        : "focus:ring-ring"
                    }`}
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters.",
                      },
                    })}
                  />
                  {errors.name && (
                    <p
                      role="alert"
                      className="text-[13px] tracking-tight text-red-400"
                    >
                      {errors?.name?.message ||
                        "Name must be at least 2 characters."}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="phone"
                    className={`mb-2 font-medium ${errors?.phone && "text-red-400"}`}
                  >
                    Phone*
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 XXX XXX XXXX"
                    className={`border-border mt-1 w-full rounded-lg border bg-zinc-50 px-4 py-2.5 transition outline-none focus:border-transparent focus:ring-2 dark:bg-zinc-900 ${
                      errors?.phone
                        ? "border-red-400 focus:ring-red-400"
                        : "focus:ring-ring"
                    }`}
                    {...register("phone", {
                      required: "Phone number is required",
                      minLength: {
                        value: 10,
                        message: "Phone number must be at least 10 characters.",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p
                      role="alert"
                      className="text-[13px] tracking-tight text-red-400"
                    >
                      {errors?.phone?.message ||
                        "Phone number must be at least 10 characters."}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className={`mb-2 font-medium ${errors?.email && "text-red-400"}`}
                >
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className={`border-border mt-1 w-full rounded-lg border bg-zinc-50 px-4 py-2.5 transition outline-none focus:border-transparent focus:ring-2 dark:bg-zinc-900 ${
                    errors?.email
                      ? "border-red-400 focus:ring-red-400"
                      : "focus:ring-ring"
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p
                    role="alert"
                    className="text-[13px] tracking-tight text-red-400"
                  >
                    {errors.email.message ||
                      "Please enter a valid email address."}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className={`mb-2 font-medium ${errors?.message && "text-red-400"}`}
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message here..."
                  className={`border-border mt-1 w-full resize-none rounded-lg border bg-zinc-50 px-4 py-3 transition outline-none focus:border-transparent focus:ring-2 dark:bg-zinc-900 ${
                    errors?.message
                      ? "border-red-400 focus:ring-red-400"
                      : "focus:ring-ring"
                  }`}
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters.",
                    },
                  })}
                />
                {errors.message && (
                  <p
                    role="alert"
                    className="text-[13px] tracking-tight text-red-400"
                  >
                    {errors?.message?.message ||
                      "Message must be at least 10 characters."}
                  </p>
                )}
              </div>

              {/* Submit */}

              <Button
                disabled={isSubmitting}
                type="submit"
                className="group inline-flex cursor-pointer items-center gap-2 px-8 py-2.5 transition"
              >
                {isSubmitting ? (
                  <>
                    <span className="tracking-tight">Sending</span>
                    <Spinner className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span className="tracking-tight">Send Message</span>
                    <IoIosSend className="text-base opacity-90 duration-300 group-hover:rotate-45" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
