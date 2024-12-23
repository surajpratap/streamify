'use client';

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export default function FilterBox({title, data, selected: _selected, queryName}: { title: string; data: string[]; selected?: string; queryName: string }) {
  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  const [query, setQuery] = useState('')

  const [selected, setSelected] = useState<string | null>(_selected || null)

  const filteredPeople =
    query === ''
      ? data
      : data.filter((d) => {
        return d.toLowerCase().includes(query.toLowerCase())
      })

  return (
    <Combobox
      as="div"
      value={selected}
      onChange={(p) => {
        setQuery('')
        setSelected(p)
        const current = new URLSearchParams(Array.from(searchParams.entries()));

        if (!p) {
          current.delete(queryName);
        } else {
          current.set(queryName, p);
        }

        // cast to string
        const search = current.toString();
        // or const query = `${'?'.repeat(search.length && 1)}${search}`;
        const query = search ? `?${search}` : "";

        router.push(`${pathname}${query}`);
      }}
    >
      <div className="relative mt-2">
        <ComboboxInput
          className="block w-full rounded-md bg-gray-900 py-1.5 pl-3 pr-12 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery('')}
          displayValue={(p: string) => p}
          placeholder={title}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="size-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>

        {filteredPeople.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {filteredPeople.map((p, index) => (
              <ComboboxOption
                key={index}
                value={p}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-white data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
              >
                <span className="block truncate group-data-[selected]:font-semibold">{p}</span>

                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="size-5" aria-hidden="true" />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  )
}
