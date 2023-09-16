import getSongsByTitle from '@/actions/getSongsByTitle';
import Header from '@/components/Header';

interface SearchProps {
  searchParams: { title: string };
}

const Search = async ({ searchParams }: SearchProps) => {
  const songs = getSongsByTitle(searchParams.title);

  return (
    <div className="bg-neutral-900 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="gap-y-6 mb-2 flex flex-col">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
        </div>
      </Header>
    </div>
  );
};

export default Search;
