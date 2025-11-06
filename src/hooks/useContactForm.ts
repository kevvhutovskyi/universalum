import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContactFormSchema, ContactFormData } from "@/lib/schemas";
import { useTranslations } from "next-intl";

export const useContactForm = () => {
  const t = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(createContactFormSchema(t)),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: t("form.success"),
        });
        form.reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || t("form.error"),
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: t("form.networkError"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    onSubmit,
    isSubmitting,
    submitStatus,
  };
};
