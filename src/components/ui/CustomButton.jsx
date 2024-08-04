
export default function CustomButton({type, children, btnStyles}) {
  return (
    <button 
      type={type || 'button'} 
      className={`cursor-pointer ${btnStyles}`}
    >
      {children}
    </button>
  )
}
