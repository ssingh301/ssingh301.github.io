import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { getBookDetails } from '../../utils/api/books';
import LoadingCircle from '../../components/LoadingCircle';
import NavBar from '../../components/NavBar';

export default function Book() {
  const [bookData, setBookData] = useState(null);

  const router = useRouter();
  const { bookId } = router.query;

  useEffect(() => {
    if (bookId) {
      getBookDetails(bookId).then((data) => {
        setBookData(data);
      });
    }
  }, [bookId]);


  return (
    <div>
      <NavBar/>
      {!bookData ? (
        <LoadingCircle />
      ) : (
        <div>
          <header style={{ textAlign: 'center', fontWeight: 'lighter' }}>
            <h1>{bookData.title}</h1>
            <h3>Covers</h3>
          </header>
          <Container maxWidth="md" style={{ margin: 'auto' }}>
            <ImageList cols={3}>
              {bookData.covers &&
                bookData.covers.map((coverId) => (
                  <ImageListItem key={coverId}>
                    <img
                      src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`}
                      alt="Cover"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
          </Container>
        </div>
      )}
    </div>
  );
}
