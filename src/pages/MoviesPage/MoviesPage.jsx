import { PageTitle } from 'components/PageTitle';

export const MoviesPage = () => {
  return (
    <>
      <PageTitle title="Search Movie" />
      <input
        style={{ width: 300 }}
        placeholder="input search movie"
        allowClear
        size="large"
        // onSearch={}
      />
    </>
  );
};
