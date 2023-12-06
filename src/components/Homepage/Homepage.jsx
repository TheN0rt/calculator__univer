import { Link } from "react-router-dom";
import { backgrounds } from '../../utils/backgroundLinksImg.js'
const Homepage = () => {
   const links = [
      {
         title: 'Сайт визитка',
         to: '/landing',
         background: backgrounds.backgroundForLanding
      },
      {
         title: 'Маркет плейс',
         to: '/market',
         background: backgrounds.backgroundForMarket
      },
      {
         title: 'Интернет магазин',
         to: '/shop',
         background: backgrounds.backgroundForShop
      }
   ] 

   return (
      <div className="homepage">
         {
            links.map((link) => (
               <Link to={link.to} style={{ background: `url(${link.background}) no-repeat` }} key={link.title}>
                  <h2>{link.title}</h2>
               </Link>
            ))
         }
         {/* <Link to={'/landing'}>
            landing to
         </Link>
         <Link to={'/market'}>
            market to
         </Link>
         <Link to={'/shop'}>
            shop to
         </Link> */}
      </div>
   )
}

export default Homepage