import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const BookTable =  () => {
   
   const [columnDefs] = useState([
       { field: 'title' ,},
       { field: 'publication_date' },
       { field: 'rating' },
       { field: 'price' },
       { field: 'author_id' }
   ])

   async function fetchData(params) {
    const { startRow, endRow } = params;
  
    try {
      const response = await axios.get(`http://localhost:8080/books?start=${startRow}&end=${endRow}`);
      const data = response.data;
  
      params.successCallback(data.data, data.totalCount);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      params.failCallback();
    }
  }
  const dataSource = {
    rowCount: null,
    getRows: fetchData,
  };
   return (
       <div className="ag-theme-alpine" style={{height: 400, maxWidth: 1200, margin:20}}>
           <AgGridReact
               columnDefs={columnDefs}
               rowModelType="infinite"
               cacheBlockSize={10} 
               paginationPageSize={10} 
               onGridReady={(params) => {
                params.api.setDatasource(dataSource);
              }}
               >
           </AgGridReact>
     </div>
   );

};


export default BookTable