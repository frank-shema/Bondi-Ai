import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Main from "./components/Main"
import Dashboard from "./pages/Dashboard"
import Database from "./pages/Database"
import Creation from "./pages/Creation"
import Settings from "./pages/Settings"
import AudioFile from "./pages/AudioFile"
import Folder from "./pages/Folder"
function App() {


	return (
		<div className="bg-[#FBFBFB] w-screen h-screen overflow-hidden">
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/main" element={<Main />}>
						<Route path="/main" element={<Dashboard />} />
						<Route path="/main/creation" element={<Creation />} />
						<Route path="/main/creation/file/:id" element={<AudioFile />} />
						<Route path="/main/creation/folder/:id" element={<Folder />} />
						<Route path="/main/database" element={<Database />} />
						<Route path="/main/settings" element={<Settings />} />
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
