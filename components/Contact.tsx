"use client";

import { Linkedin, Mail } from "lucide-react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";

interface Touched {
  name: boolean;
  email: boolean;
  message: boolean;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState<Touched>({
    name: false,
    email: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) {
          return "Full name is required";
        }
        if (value.trim().length < 2) {
          return "Name must be at least 2 characters";
        }
        return "";

      case "email":
        if (!value.trim()) {
          return "Email is required";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Please enter a valid email address";
        }
        return "";

      case "message":
        if (!value.trim()) {
          return "Message is required";
        }
        if (value.trim().length < 10) {
          return "Message must be at least 10 characters";
        }
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Validate on change if field has been touched
    if (touched[id as keyof Touched]) {
      setErrors((prev) => ({
        ...prev,
        [id]: validateField(id, value),
      }));
    }
  };

  const handleBlur = (e: any) => {
    const { id, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [id]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [id]: validateField(id, value),
    }));
  };

  const handleSubmit = async () => {
    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };
  
    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      message: true
    });
  
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (!hasErrors) {
      setIsSubmitting(true);
      
      try {
        // Send to your API route
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.error || 'Failed to send message');
        }
  
        console.log('Email sent successfully:', data);
        setSubmitSuccess(true);
        
        // Reset form after delay
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setTouched({ name: false, email: false, message: false });
        }, 2000);
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
        
      } catch (error) {
        console.error('Submission error:', error);
        // Optionally show error message to user
        alert('Failed to send message. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen w-full bg-ivory-mist flex font-montserrat"
    >
      <div className="w-1/2 flex flex-col justify-center px-32 py-12">
        <div className="max-w-xl">
          {/* Heading */}
          <div className="mb-12">
            <h1 className="text-7xl  tracking-wider mb-2">
              LET'S{" "}
              <span className="font-blosta italic font-light text-7xl">
                Connect
              </span>
            </h1>
          </div>

          

          {/* Contact Form */}
          <div className="space-y-4 mb-12">
            <FieldSet>
              <FieldLegend className="font-semibold tracking-widest">
                EMAIL
              </FieldLegend>
              <FieldDescription>contact@avantmgmt.co</FieldDescription>

              <FieldGroup>
                <Field
                  data-invalid={touched.name && errors.name ? true : undefined}
                >
                  <FieldLabel htmlFor="name">Full name</FieldLabel>
                  <Input
                    id="name"
                    autoComplete="off"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={
                      touched.name && errors.name ? true : undefined
                    }
                  />
                  {touched.name && errors.name && (
                    <FieldError>{errors.name}</FieldError>
                  )}
                </Field>

                <Field
                  data-invalid={
                    touched.email && errors.email ? true : undefined
                  }
                >
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    autoComplete="off"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={
                      touched.email && errors.email ? true : undefined
                    }
                  />
                  {touched.email && errors.email && (
                    <FieldError>{errors.email}</FieldError>
                  )}
                </Field>

                <Field
                  data-invalid={
                    touched.message && errors.message ? true : undefined
                  }
                >
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={
                      touched.message && errors.message ? true : undefined
                    }
                  />
                  {touched.message && errors.message && (
                    <FieldError>{errors.message}</FieldError>
                  )}
                </Field>

                <Field orientation="horizontal">
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    className="py-4 px-8"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </Field>
              </FieldGroup>
            </FieldSet>
          </div>

          {submitSuccess && (
            <div className="my-4 p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-sm text-green-800">
                Thank you! Your message has been sent successfully.
              </p>
            </div>
          )}

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="mailto:contact@avantmgmt.co"
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/avant-management-llc/"
              target="_blank"
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="w-1/2 relative bg-linear-to-br from-yellow-600 to-yellow-700 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-yellow-800 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-yellow-800 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-80 bg-[#f5f1e8] shadow-2xl flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <p className="text-sm">Some image</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
