const Error = ({children}) => {
  return (
    <div className='bg-red-500 text-white text-center p-4
    uppercase font-bold mb-4 rounded-md'>
      {children}
      </div>
  )
}

export default Error