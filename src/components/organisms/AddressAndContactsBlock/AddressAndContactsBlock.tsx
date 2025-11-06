"use client";
/* eslint-disable @next/next/no-img-element */
import { GoogleMap } from "@/components/molecules/GoogleMap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/ui/form-field";
import { useTranslations } from "next-intl";
import { useContactForm } from "@/hooks";

export const AddressAndContactsBlock = () => {
  const t = useTranslations();
  const { form, onSubmit, isSubmitting, submitStatus } = useContactForm();

  return (
    <div id="contacts" className="py-15 w-full px-3 md:px-0">
      <div className="container mx-auto w-full flex flex-col gap-10">
        <h2 className="text-headline-4 md:text-headline-3 lg:text-headline-3 max-w-3xl lg:max-w-4xl">
          {t("common.addressAndContacts")}
        </h2>
        <div className="grid gap-4 grid-cols-2 lg:grid-rows-2">
          <div className="bg-primary-dark rounded-3xl col-span-2 lg:col-span-1 lg:row-span-2 px-5 md:px-10 lg:px-16 py-10">
            <div className="flex flex-col justify-start gap-10">
              <h3 className="text-headline-5 md:text-headline-3 text-grayscale-white">
                {t("common.contactUs")}
              </h3>

              {/* Status Messages */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-md mb-4 flex items-center ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-800" // Стилі з вашого зображення
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.type === "success" && (
                    <svg 
                      className="w-5 h-5 mr-3 flex-shrink-0" // mr-3 додає відступ
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              )}

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
              >
                <FormField error={form.formState.errors.name?.message}>
                  <Input
                    placeholder={t("form.name")}
                    {...form.register("name")}
                    className={
                      form.formState.errors.name ? "border-red-500" : ""
                    }
                  />
                </FormField>

                <FormField error={form.formState.errors.email?.message}>
                  <Input
                    placeholder={t("form.email")}
                    type="email"
                    {...form.register("email")}
                    className={
                      form.formState.errors.email ? "border-red-500" : ""
                    }
                  />
                </FormField>

                <FormField error={form.formState.errors.phone?.message}>
                  <Input
                    placeholder={t("form.phone")}
                    type="tel"
                    {...form.register("phone")}
                    className={
                      form.formState.errors.phone ? "border-red-500" : ""
                    }
                  />
                </FormField>

                <FormField error={form.formState.errors.subject?.message}>
                  <Input
                    placeholder={t("form.subject")}
                    {...form.register("subject")}
                    className={
                      form.formState.errors.subject ? "border-red-500" : ""
                    }
                  />
                </FormField>

                <FormField error={form.formState.errors.message?.message}>
                  <Textarea
                    placeholder={t("form.message")}
                    rows={8}
                    className={`min-h-30 ${
                      form.formState.errors.message ? "border-red-500" : ""
                    }`}
                    {...form.register("message")}
                  />
                </FormField>

                <Button type="submit" className="w-fit" disabled={isSubmitting}>
                  {isSubmitting ? t("form.sending") : t("common.send")}
                </Button>
              </form>
            </div>
          </div>
          <div className="bg-grayscale-gray1 rounded-3xl col-span-2 md:col-span-1 lg:row-span-1 py-10 px-5 md:px-10 lg:px-16 flex flex-col gap-6 lg:gap-10">
            <h3 className="text-headline-5 md:text-headline-3 text-grayscale-black">
              {t("common.contacts")}
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex gap-3 items-center">
                <img
                  src="/icons/PhoneOutgoing.svg"
                  alt="Phone"
                  width={36}
                  height={36}
                />
                <h5 className="text-subtitle-1 md:text-headline-5">
                  <a href="tel:+380934634946" className="hover:underline">
                    +38 (093) 463-49-46
                  </a>
                </h5>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src="/icons/PhoneOutgoing.svg"
                  alt="Phone"
                  width={36}
                  height={36}
                />
                <h5 className="text-subtitle-1 md:text-headline-5">
                  <a href="tel:+380501330506" className="hover:underline">
                    +38 (050) 133-05-06
                  </a>
                </h5>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src="/icons/EnvelopeSimple.svg"
                  alt="Email"
                  width={36}
                  height={36}
                />
                <h5 className="text-subtitle-1 md:text-headline-5">
                  <a
                    href="mailto:universalum@ukr.net"
                    className="hover:underline"
                  >
                    universalum@ukr.net
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="bg-grayscale-gray1 rounded-3xl col-span-2 md:col-span-1 lg:row-span-1 py-10 px-5 md:px-10 lg:px-16 flex flex-col  gap-6 lg:gap-10">
            <h3 className="text-headline-5 md:text-headline-3 text-grayscale-black">
              {t("common.address")}
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex gap-3 items-center">
                <img
                  src="/icons/MapPin.svg"
                  alt="Address"
                  width={36}
                  height={36}
                />
                <div className="flex flex-col">
                  <h5 className="text-subtitle-1 md:text-headline-5">
                    {t("footer.actualAddress")}
                  </h5>
                  <h5 className="text-subtitle-1 md:text-headline-5">
                    {t("footer.actualAddressValue")}
                  </h5>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src="/icons/SuitcaseSimple.svg"
                  alt="Address"
                  width={36}
                  height={36}
                />
                <div className="flex flex-col">
                  <h5 className="text-subtitle-1 md:text-headline-5">
                    {t("footer.legalAddress")}
                  </h5>
                  <h5 className="text-subtitle-1 md:text-headline-5">
                    {t("footer.legalAddressValue")}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GoogleMap
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
        />
      </div>
    </div>
  );
};
