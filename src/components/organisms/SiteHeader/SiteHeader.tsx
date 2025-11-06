"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Image } from "@/components/atoms";
import {
  NavigationTabs,
  LanguageDropdown,
  type NavigationItem,
} from "@/components/molecules";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks";
import {
  NAVIGATION_ITEMS,
  LANGUAGES,
  DEFAULT_LANGUAGE,
} from "@/config/constants";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { redirect } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export interface SiteHeaderProps {
  className?: string;
}

// Navigation (used in desktop + mobile)
const MobileNavigation = ({
  items,
  activeTab,
  onChange,
}: {
  items: NavigationItem[];
  activeTab: string;
  onChange: (value: string) => void;
}) => {
  const t = useTranslations();
  return (
    <nav className="flex flex-col  w-full items-center mt-20 text-headline-3 mb-3">
      {items.map((item: NavigationItem) => (
        <button
          key={item.value}
          onClick={() => onChange(item.value)}
          className={cn(
            "text-center font-medium border-b border-grayscale-gray2 py-3 w-full cursor-pointer",
            activeTab === item.value ? "text-orange-500" : "text-black"
          )}
        >
          {t(item.label)}
        </button>
      ))}
    </nav>
  );
};

// Mobile Fullscreen Menu
const MobileMenu = ({
  isOpen,
  onClose,
  activeTab,
  onTabChange,
  onLanguageChange,
  selectedLanguage,
  onContactClick,
}: {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  onTabChange: (value: string) => void;

  selectedLanguage: string;
  onLanguageChange: (value: string) => void;
  onContactClick: () => void;
}) => {
  const t = useTranslations();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-white flex flex-col h-screen"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <div className="flex w-full justify-between items-center">
            <Link href={'/'} className="absolute left-0 top-0 flex">
              <Image
                src="/logo/Universalum.png"
                alt="Universalum Logo"
                width={86}
                height={72}
              />
              <Image
                src="/logo/TGD.png"
                alt="TGD Logo"
                width={86}
                height={72}
              />
            </Link>

            <div className="mx-auto container flex relative justify-end xl:justify-center py-4">
              <Button
                variant="icon"
                size="icon"
                className="bg-white border text-grayscale-black mr-4 md:m-0"
                onClick={onClose}
              >
                <XIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1 h-full w-full p-4">
            <MobileNavigation
              items={NAVIGATION_ITEMS}
              activeTab={activeTab}
              onChange={onTabChange}
            />
            <LanguageDropdown
              languages={LANGUAGES}
              selectedLanguage={selectedLanguage}
              onLanguageChange={onLanguageChange}
            />
          </div>

          {/* Contact button bottom */}
          <div className="p-10">
            <Button className="w-full" onClick={onContactClick}>
              {t("common.contactUs")}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const SiteHeader = ({ className, ...props }: SiteHeaderProps) => {
  const locale = useLocale();
  const t = useTranslations();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    locale || DEFAULT_LANGUAGE
  );
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isScrolled } = useScroll({ threshold: 10 });

  // Determine the active tab based on pathname
  const activeTab = React.useMemo(() => {
    // Remove locale prefix from pathname for comparison
    let cleanPath = pathname;
    const localePattern = new RegExp(
      `^/(${LANGUAGES.map((lang) => lang.code).join("|")})(\/|$)`
    );
    const match = pathname.match(localePattern);

    if (match) {
      cleanPath = pathname.replace(match[0], match[0].endsWith("/") ? "/" : "");
    }

    // Handle project path separately
    if (cleanPath.startsWith("/projects/")) {
      return (
        NAVIGATION_ITEMS.find((item) => item.href === "/projects")?.value ||
        NAVIGATION_ITEMS[0].value
      );
    }

    // Find exact match
    const item = NAVIGATION_ITEMS.find((item) => item.href === cleanPath);
    return item?.value || NAVIGATION_ITEMS[0].value;
  }, [pathname]);

  // Handle tab change
  const handleTabChange = (value: string) => {
    const item = NAVIGATION_ITEMS.find((item) => item.value === value);

    if (item) {
      const localizedPath = `/${locale}${item.href}`;
      router.push(localizedPath);
    }
  };

  // Handle language change
  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);

    // Extract the path without the locale prefix
    let cleanPath = pathname;

    // Check if the current path starts with any of the supported locales
    const localePattern = new RegExp(
      `^/(${LANGUAGES.map((lang) => lang.code).join("|")})(\/|$)`
    );
    const match = pathname.match(localePattern);

    if (match) {
      // Remove the locale prefix
      cleanPath = pathname.replace(match[0], match[0].endsWith("/") ? "/" : "");
    }

    // Ensure the path starts with a forward slash
    if (!cleanPath.startsWith("/")) {
      cleanPath = "/" + cleanPath;
    }

    // Redirect with the correct path structure
    redirect({
      href: cleanPath,
      locale: languageCode,
    });
  };

  // lock/unlock scroll on mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const onContactClick = () => {
    const contactsSection = document.getElementById("contacts");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "backdrop-blur" : "bg-transparent",
        className
      )}
      {...props}
    >
      <div className="absolute left-0 top-0 flex">
        <Image
          src="/logo/Universalum.png"
          alt="Universalum Logo"
          width={86}
          height={72}
        />
        <Image src="/logo/TGD.png" alt="TGD Logo" width={86} height={72} />
      </div>

      <div className="mx-auto container flex relative justify-end xl:justify-center py-4">
        <div className="hidden xl:flex gap-5">
          <NavigationTabs
            items={NAVIGATION_ITEMS}
            activeValue={activeTab}
            onValueChange={handleTabChange}
          />
          <LanguageDropdown
            languages={LANGUAGES}
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>

        {/* Contact Button */}
        <Button
          className="absolute right-0 hidden xl:flex"
          onClick={onContactClick}
        >
          {t("common.contactUs")}
        </Button>

        <Button
          variant="icon"
          size="icon"
          className="bg-grayscale-white xl:hidden text-grayscale-black mr-4 md:m-0"
          onClick={() => setIsMenuOpen(true)}
        >
          <MenuIcon />
        </Button>
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          activeTab={activeTab}
          onTabChange={(value) => {
            handleTabChange(value);
            setIsMenuOpen(false);
          }}
          selectedLanguage={selectedLanguage}
          onLanguageChange={handleLanguageChange}
          onContactClick={() => {
            if (onContactClick) onContactClick();
            setIsMenuOpen(false);
          }}
        />
      </div>
    </header>
  );
};
