import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../../components/ContactList/ContactList'
import { selectFavourite } from '../../redux/contacts/selectors'
import s from './FavouritePage.module.css'
import { useEffect } from 'react';
import { fetchFavourite } from '../../redux/contacts/operations';


const FavouritePage = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {    
    dispatch(fetchFavourite());
  }, [dispatch]);

  const favouriteContacts = useSelector(selectFavourite);
  return (
    <ContactList contacts={favouriteContacts} />
  )
}

export default FavouritePage