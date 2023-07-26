import React,{useRef,useEffect} from 'react';
import ListingCard from '../../components/ListingCard';
import Container from './Container'
import { useSelector } from 'react-redux';
import * as actions from '../../store/actions'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
    let [searchParams] = useSearchParams()
    const listRef = useRef()
    const dispatch = useDispatch()
    const {images} = useSelector(state => state.image)
    console.log(images)
    useEffect(() =>{
      let params = []
        for (let entry of searchParams.entries()) {
            params.push(entry);
        }
        let searchParamsObject = {
            
        }
        params?.forEach(i => {
            if (Object.keys(searchParamsObject)?.some(item => item === i[0])) {
                searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]]
            } else {
                searchParamsObject = { ...searchParamsObject, [i[0]]: i[1] }
            }
        })
      
        console.log('check ',searchParamsObject)


      dispatch(actions.getImageLimit(searchParamsObject))
      // listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },[searchParams])
   
    return (
        <Container>
          <div
              className="
              pt-28
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4
              xl:grid-cols-5
              2xl:grid-cols-6
              gap-8"
          >
            {images.map((listing) => (
              <ListingCard
                
                key={listing.id}
                data={listing}
              />
            ))}
          </div>
        </Container>
    );
};

export default HomePage;
