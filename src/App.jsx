
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          Welcome to FigPe!
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          FigPe is your collaborative workspace designed to bring teams together.
          Brainstorm, plan, and execute your projects seamlessly.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          In FigPe, you can share ideas, track progress, and achieve your goals
          faster.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default App
