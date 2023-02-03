import { get } from 'api/shared/methods';

export type Genres = {
  genres: Genre[];
};

type Genre = {
  id: number;
  name: string;
};

async function getGenreOptions(): Promise<Genres> {
  const res = await get<Genres>(`genres`).then((e) =>
    e.data.genres.map((a: Genre) => {
      return { value: a.id, label: a.name };
    }),
  );
  console.log(res);
  // eslint-disable-next-line
  return res as any;
}
export const genreOptions = getGenreOptions();

export const sortOptions = [
  {
    value: 'original_title.asc',
    label: 'Title ASC',
  },
];
