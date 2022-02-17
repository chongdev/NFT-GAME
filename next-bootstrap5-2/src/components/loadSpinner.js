const LoadSpinner = () => {
  return (
    <div className='d-grid gap-1 d-md-block text-center py-1 my-1'>
      <flex className='mx-1'><small><div className='spinner-grow spinner-grow-sm text-primary'></div></small></flex>
      <flex className='mx-1'><div className='spinner-border spinner-border-sm text-primary'></div></flex>
      <flex className='mx-1'><div className='spinner-grow spinner-grow-sm text-primary'></div></flex>
    </div>
  )
};

export default LoadSpinner;
