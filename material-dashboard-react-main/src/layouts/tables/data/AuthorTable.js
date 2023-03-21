import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const AuthorTable = () => {
  const [rowData, setRowData] = useState([]);
  const [openUp, setOpenUp] = React.useState(false);
  const handleOpenUp = () => setOpenUp(true);
  const handleCloseUp = () => setOpenUp(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newAuthor, setNewAuthor] = React.useState({
    name: '',
    birth_date: '',
  });

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8080/authors`);
        const data = response.data;
        setRowData(data.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData()

  }, [])
  const [authorUpdate, setAuthorUpdate] = React.useState({
    id: '',
    name: '',
    birth_date: '',
  })
  async function update() {
    try {
      const data = await axios.post(`http://localhost:8080/authors/update`,
        authorUpdate
      );
      setRowData(data.data.data)
      handleClose()
      handleCloseUp()
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const ButtonRenderer = (props) => {
    const handleClick = async () => {

      try {
        switch (props.colDef.headerName) {
          case 'Update':
            setAuthorUpdate(props.data)
            handleOpenUp()
            console.log('Update')

            break
          case 'Delete':
            console.log('Delete')
            try {
              const newData = await axios.post(`http://localhost:8080/authors/delete`,
                props.data
              );
              setRowData(newData.data.data)
            } catch (e) {
              console.log(e)
            }

            break
          default:
            console.log('something strange')
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return <button onClick={handleClick}>Action</button>;
  };

  const columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Age', field: 'birth_date' },
    {
      headerName: 'Update',
      field: 'update',
      cellRenderer: ButtonRenderer,
    },
    {
      headerName: 'Delete',
      field: 'delete',
      cellRenderer: ButtonRenderer,
    },
  ];

  const addNewAuthor = async () => {
    try {
      const data = await axios.post(`http://localhost:8080/authors/create`,
        newAuthor
      );
      setRowData(data.data.data)
      handleClose()
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (<><Button onClick={handleOpen}>Добавить автора!</Button>
    <div className="ag-theme-alpine" style={{ height: '400px', maxWidth: '1200px', margin: 20 }}>

      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        components={{ ButtonRenderer }}

      />

      <Modal
        open={openUp}
        rowData={rowData}
        onClose={handleCloseUp}
        aria-labelledby="modal-modal-title1"
        aria-describedby="modal-modal-description1"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title1" variant="h6" component="h2">
            Изменить автора!
          </Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              value={authorUpdate.name}
              id="outlined-controlled1"
              label="Name"
              onChange={(event) => {
                setAuthorUpdate({ ...authorUpdate, name: event.target.value });
              }}
              required
            />
            <TextField
              required
              value={authorUpdate.birth_date}
              type="date"
              id="outlined-controlled1"
              label="Birth Date"
              onChange={(event) => {
                setAuthorUpdate({ ...authorUpdate, birth_date: event.target.value });
              }}
            />
            <Button
              onClick={update}
            > Изменить автора!</Button>

          </Box>
        </Box>
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Добавить нового автора в систему!
          </Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-controlled"
              label="Name"
              onChange={(event) => {
                setNewAuthor({ ...newAuthor, name: event.target.value });
              }}
            />
            <TextField
              required
              id="outlined-controlled"
              label="Birth Date"
              type="date"
              onChange={(event) => {
                setNewAuthor({ ...newAuthor, birth_date: event.target.value });
              }}
            />
            <Button onClick={addNewAuthor}>Добавить автора!</Button>

          </Box>
        </Box>
      </Modal>
    </div>
  </>
  );
};

export default AuthorTable;
