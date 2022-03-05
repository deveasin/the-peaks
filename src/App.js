import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { Home, NotFound, SearchResult, SingleArticle, Category, Bookmark } from './pages';


function App() {
  return (
    <div className="peak-app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search/" element={<SearchResult />} />
          <Route exact path="/search/:query" element={<SearchResult />} />
          <Route exact path="/category/:name" element={<Category />} />
          <Route exact path="/bookmarks" element={<Bookmark />} />
          <Route exact path="/single/*" element={<SingleArticle />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
