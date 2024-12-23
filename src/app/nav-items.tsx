import {
  ChartPieIcon,
  FolderIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

export const navigationItems = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  { name: 'Streams', href: '/streams', icon: FolderIcon, current: false },
  { name: 'Reports', href: '/reports', icon: ChartPieIcon, current: false },
]
