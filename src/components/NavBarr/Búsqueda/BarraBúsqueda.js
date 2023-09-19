import { useState } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { error } from 'qrcode-terminal';
import { searchArticles } from '../../firebase/firebaseService';

const BarraBúsqueda = () => {

const [searchQuery, setSearchQuery] = useState('');
const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const results = await searchArticles(query);
    setSearchResults(results);
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleSearchChange} />
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((articulo) => (
            <li key={articulo.id}>{articulo.title}</li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>  
  )
}

export default BarraBúsqueda
