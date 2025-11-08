import { NotFound } from "../components/notFound/NotFound";


export const NotFoundPage = ({isAuth}) => {
   return (
      <NotFound isAuth={isAuth}/>
   )
};
