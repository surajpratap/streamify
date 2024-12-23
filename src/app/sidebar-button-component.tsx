'use client'

import {Bars3Icon} from "@heroicons/react/24/outline";
import {useAppUi} from "@/store/app-ui";

export default function SidebarButtonComponent() {
  const setSidebarOpen = useAppUi((state) => state.setSidebarOpen);

  return (
    <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-400 lg:hidden">
      <span className="sr-only">Open sidebar</span>
      <Bars3Icon aria-hidden="true" className="size-6"/>
    </button>
  )
}
