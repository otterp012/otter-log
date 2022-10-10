// component

import { PageLayout, NoteFilter, Notes } from "components";

const Note = () => {
  return (
    <PageLayout
      title='NOTES...'
      description='아래 페이지는 노션으로 연결됩니다. 🤗'
    >
      <NoteFilter />
      <Notes />
    </PageLayout>
  );
};

export default Note;
