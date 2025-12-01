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

export default function ComingSoon() {
  return (
    <div className="min-h-screen w-full bg-ivory-mist flex font-montserrat">

      <div className="w-1/2 flex flex-col justify-center px-32 py-12">
        <div className="max-w-xl">
          {/* Heading */}
          <div className="mb-12">
            <h1 className="text-7xl  tracking-wider mb-2">
              LET'S{" "}
              <span className="font-blosta italic font-light text-7xl">Connect</span>
            </h1>
          </div>

          {/* Contact Form */}
          <div className="space-y-4 mb-12">
            <FieldSet>
              <FieldLegend className="font-semibold tracking-widest" >EMAIL</FieldLegend>
              <FieldDescription>
                contact@avantmgmt.co
              </FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Full name</FieldLabel>
                  <Input
                    id="name"
                    autoComplete="off"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input id="email" autoComplete="off"/>
                  <FieldError>Invalid email</FieldError>
                </Field>
                <Field>
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <Textarea id="message" rows={4}/>
                </Field>
                <Field orientation="horizontal">
                  <Button type="submit" className="py-4 px-8">Submit</Button>
                </Field>
              </FieldGroup>
            </FieldSet>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="mailto:contact@avantmgmt.co"
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-1/2 relative bg-linear-to-br from-yellow-600 to-yellow-700 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-yellow-800 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-yellow-800 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-80 bg-[#f5f1e8] shadow-2xl flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <p className="text-sm">Product Image</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
