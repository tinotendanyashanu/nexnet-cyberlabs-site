"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface AccordionItem {
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <Disclosure key={item.q}>
          {({ open }) => (
            <div className="card">
              <Disclosure.Button className="flex w-full justify-between items-center text-left">
                <span className="font-medium">{item.q}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-brand-teal transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="mt-3 text-gray-300">
                {item.a}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}

