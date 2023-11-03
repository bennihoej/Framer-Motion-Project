import { Sidebar } from './Sidebar'

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-2 border-b-2 border-zinc-800">
      <div className="flex items-center gap-3">
        <Sidebar />
        <p>Framer-Motion</p>
      </div>
    </nav>
  )
}