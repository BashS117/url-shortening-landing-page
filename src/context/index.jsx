import { createContext,useState, } from "react";

export const ShortenContext= createContext();

export const ShortenProvider=({children}) =>{
    const [shortenedLinks, setShortenedLinks] = useState([]); 
    const [linkToShorten, setLinkToShorten]=useState('');
    const [isInputEmpty, setIsInputEmpty] = useState(false);

    
const handleShortenedLinkChange = (originalLink,shortenedLink) => {
    setShortenedLinks([
      ...shortenedLinks,
      {originalLink,shortenedLink,}
    ]);
  };

  
const handleLinkChange = (event)=>{
    setIsInputEmpty(false)
    setLinkToShorten(event.target.value);
  }

  return(
  <ShortenContext.Provider value={{
    shortenedLinks,handleShortenedLinkChange,
    linkToShorten,handleLinkChange,

    setIsInputEmpty,isInputEmpty,


setShortenedLinks
    }}>
    {children}

  </ShortenContext.Provider>
  )

}
