import {TableCell, TableRow} from "flowbite-react";

export default function StreamTable(props: { data: Array<{
    "Song name": string,
    "Artist": string,
    "Date Streamed": string,
    "Stream Count": number,
    "User ID": number
  }> }) {
  return (
    <>
      {props.data.map((row, index) => (
        <TableRow key={index} className="bg-white dark:border-gray-800 dark:bg-gray-900">
          <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {row['Song name']}
          </TableCell>
          <TableCell>{row['Artist']}</TableCell>
          <TableCell>{row['Date Streamed']}</TableCell>
          <TableCell>{row['Stream Count']}</TableCell>
          <TableCell>{row['User ID']}</TableCell>
        </TableRow>
      ))}
    </>
  )
}
