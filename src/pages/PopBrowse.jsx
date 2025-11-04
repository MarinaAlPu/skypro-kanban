import { PopBrowse } from "../components/popups/popBrowse/PopBrowse";


// export const PopBrowsePage = ({ isLoading }) => {
//   return <PopBrowse isLoading={isLoading} />
// }

export const PopBrowsePage = ({ isAuth }) => {
  return <PopBrowse isAuth={isAuth} />
}