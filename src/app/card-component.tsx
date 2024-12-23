import {Card} from "flowbite-react";

export default function CardComponent(props: { title: string, subtitle: string }) {
  return (
    <Card className="max-w-sm dark:bg-gray-900">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        { props.title }
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        { props.subtitle }
      </p>
    </Card>
  )
}
