import {getStreamsData} from "@/app/streams/data";
import {Suspense} from "react";
import Loading from "@/app/streams/loading";
import {TableCell, TableRow} from "flowbite-react";

export default async function DataBody() {
  const streams = await getStreamsData({});

  return (
    <Suspense fallback={<Loading />}>
      {streams.map((row, index) => (
        <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {row['Song name']}
          </TableCell>
          <TableCell>{row['Artist']}</TableCell>
          <TableCell>{row['Date Streamed']}</TableCell>
          <TableCell>{row['Stream Count']}</TableCell>
          <TableCell>{row['User ID']}</TableCell>
        </TableRow>
      ))}
    </Suspense>
  )
}
