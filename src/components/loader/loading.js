import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularIndeterminate() {
  return (
    <div className='flex justify-center items-center w-[100%] h-[100vh] bg-[#641e16]'>
      <CircularProgress sx={{color:"black"}} size={120} />
    </div>
  );
}
