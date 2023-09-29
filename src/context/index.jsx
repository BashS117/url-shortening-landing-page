import { createContext,useState, } from "react";

export const ShortenContext= createContext();

export const ShortenProvider=({children}) =>{
    const [shortenedLinks, setShortenedLinks] = useState([]); 
    const [linkToShorten, setLinkToShorten]=useState('');

    
const handleShortenedLinkChange = (originalLink,shortenedLink) => {
    setShortenedLinks([...shortenedLinks,{originalLink,shortenedLink}]);
  };

  
const handleLinkChange = (event)=>{
    setLinkToShorten(event.target.value);
  }

  return(
  <ShortenContext.Provider value={{
    shortenedLinks,handleShortenedLinkChange,
    linkToShorten,handleLinkChange

    }}>
    {children}

  </ShortenContext.Provider>
  )

}
