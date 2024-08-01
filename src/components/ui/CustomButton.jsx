
export default function CustomButton({type, children, btnStyles}) {
  return (
    <buton 
      type={type || 'button'} 
      className={`cursor-pointer ${btnStyles}`}
    >
      {children}
    </buton>
  )
}
