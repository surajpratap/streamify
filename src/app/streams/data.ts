import streams from './streams.json';
import {filter, orderBy} from "lodash";

const sortToColName = {
  'date': 'Date Streamed',
  'count': 'Stream Count',
}

export const getStreamsData = async (options: { sort?: string; order?: string; song?: string; artist?: string  }) => {
  let data = streams;

  if (options.song) {
    data = filter(data, { 'Song name': options.song });
  }

  if (options.artist) {
    data = filter(data, { 'Artist': options.artist });
  }

  if (options.sort && options.order) {
    const sort = options.sort as keyof typeof sortToColName;

    const _sortToCol = sortToColName[sort] as keyof typeof streams[0];

    const _order = (options.order || 'asc') as 'asc' | 'desc';

    return orderBy(data, _sortToCol, _order);
  }

  return data;
}
