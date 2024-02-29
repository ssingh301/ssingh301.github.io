import { useRouter } from 'next/router';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

export default function BooksTable(props) {
  const router = useRouter();
  
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Books in all Languages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.books.map((book, index) => {
            const bookId = book.key.replace('/works/', '');
            const navigateToBookInfo = () => {
              router.push(`/book/${bookId}`);
              };

            return (
              <TableRow key={index}>
                <TableCell>{book.title}</TableCell>
                <TableCell>
                    <Button 
                    onClick={navigateToBookInfo}
                    >
                      Details
                    </Button>                 
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
