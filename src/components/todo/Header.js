
const Header = ({todos}) => {
  return (
    <div className="row py-5 bg-primary text-center">
      <h1>Todo Application</h1>
      <p className="text-center">An application To plan Your Life</p>
      <h3 className="text-center py-3">You have <strong>{todos.length}</strong> things to do</h3>
    </div>
  )
}

export default Header
