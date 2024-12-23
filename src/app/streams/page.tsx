import {Table, TableBody, TableHead, TableHeadCell} from "flowbite-react";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import {isEqual} from "lodash";
import FilterBox from "@/app/streams/filter-box";
import {getStreamsData} from "@/app/streams/data";
import StreamTable from "@/app/streams/stream-table";

export default async function Page({searchParams}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = ((await searchParams) || {}) as unknown as Record<string, string>;

  const streams = await getStreamsData({ sort: params.sort, order: params.order, song: params.song, artist: params.artist });

  return (
    <div>
      <h1 className="text-3xl font-semibold text-white mb-4">Streams</h1>
      <div className={'grid grid-cols-3 gap-4 mb-4'}>
        <div className={'sm:col-span-3 md:col-span-1'}>
          <FilterBox queryName={'song'} selected={params.song} data={streams.map(s => s['Song name'])} title={'Filter by Song'} />
        </div>
        <div className={'sm:col-span-3 md:col-span-1'}>
          <FilterBox queryName={'artist'} selected={params.artist} data={streams.map(s => s['Artist'])} title={'Filter by Artist'} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableHeadCell>Song Name</TableHeadCell>
            <TableHeadCell>Artist</TableHeadCell>
            <TableHeadCell><Link href={`/streams?${new URLSearchParams({
              ...params,
              sort: 'date',
              order: isEqual(params.sort, 'date') && isEqual(params.order, 'asc') ? 'desc' : 'asc'
            }).toString()}`} className={'flex items-center gap-2'}>
              DATE <span>
              { isEqual(params.sort, 'date') && isEqual(params.order, 'desc') && <ChevronUpIcon className={'h-4'} /> }
              { isEqual(params.sort, 'date') && isEqual(params.order, 'asc') && <ChevronDownIcon className={'h-4'} /> }
            </span>
            </Link></TableHeadCell>
            <TableHeadCell>
              <Link href={`/streams?${new URLSearchParams({
                ...params,
                sort: 'count',
                order: isEqual(params.sort, 'count') && isEqual(params.order, 'asc') ? 'desc' : 'asc'
              }).toString()}`} className={'flex items-center gap-2'}>
                STREAM COUNT <span>
                { isEqual(params.sort, 'count') && isEqual(params.order, 'desc') && <ChevronUpIcon className={'h-4'} /> }
                { isEqual(params.sort, 'count') && isEqual(params.order, 'asc') && <ChevronDownIcon className={'h-4'} /> }
            </span>
              </Link>
            </TableHeadCell>
            <TableHeadCell>User ID</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            <StreamTable data={streams} />
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
