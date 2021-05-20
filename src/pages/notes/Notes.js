import Container from '@material-ui/core/Container';
import React, { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { deleteNote, fetchNotes } from '../../actions/notes';
import NoteCard from '../../components/NoteCard';

export default function Notes() {
  // const [notes, setNotes] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const notes = useSelector((state) => state.notes);
  console.log('note', notes);
  useEffect(() => {

    dispatch(fetchNotes());
  }, [dispatch]);

  const handleUpdate = (id) => {
    history.push(`/update/${id}`);
  };

  const handleDelete = async (id) => {
    dispatch(deleteNote(id));

  
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes?.length > 0 &&
          notes.map((note) => (
            <div key={note.id}>
              <NoteCard
                note={note}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
              />
            </div>
          ))}
      </Masonry>
    </Container>
  );
}
