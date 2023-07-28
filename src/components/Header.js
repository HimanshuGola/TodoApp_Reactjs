import "./Header.css"

export default function Header({lightTheme, onThemeChange}){
  return(
    <header className="flex-group">
      <h1>Todo</h1>
      <label for="lightTheme">
        <input type="checkbox" id="lightTheme" checked={lightTheme} onChange={()=> onThemeChange()} />
      </label>
    </header>
  )
}