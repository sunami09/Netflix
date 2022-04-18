import Image from "next/image"
import { Movie } from "../typings"

interface Props {
    movie: Movie
}

function Thumbnail({movie} : Props) {
  return (
      <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">

        if(movie.backdrop_path == null && movie.poster_path == null){
              < Image
                  src={'https://image.tmdb.org/t/p/w500/esGtYJE3uoRuwA7o4ST2kGDhmeO.jpg'}
                  className="rounded-sm object-cover md:rounded"
                  layout="fill"
              />
        }else{
              <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path
                      }`}
                  className="rounded-sm object-cover md:rounded"
                  layout="fill"
              />
        }
              
        
        
    </div>
  )
}

export default Thumbnail