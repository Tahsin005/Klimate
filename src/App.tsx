import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import { ThemeProvider } from "./context/ThemeProvider"
import WeatherDashboard from "./pages/WeatherDashboard"

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import NotFound from "./components/NotFound"


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000 * 60,
      gcTime: 10 * 1000 * 60,
      retry: false,
      refetchOnWindowFocus: false,
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider defaultTheme="dark">
          <Layout>
            <Routes>
              <Route path="/" element={<WeatherDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
          </ThemeProvider>
        </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
