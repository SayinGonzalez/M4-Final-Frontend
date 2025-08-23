import { Slide, ToastContainer } from "react-toastify"
import AppRouter from "./routes/AppRouter"

function App() {

  return (
    <div className='min-h-screen flex flex-col bg-[#C2A0B6] dark:bg-[#4B636D]'>
      <ToastContainer stacked
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <AppRouter />
    </div>
  )
}

export default App