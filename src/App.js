import Card from "./Components/Card/Card";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add( faCheck, faTimes);


const products = [
  {
    title : 'FREE',
    price : '0',
    selected : ['Single User', '5GB Storage', 'Unlimited Public Projects', 'Community Access'],
    unselected : ['Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports']

  },
  {
    title : 'PLUS',
    price : '9',
    selected : ['5 Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access','Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain'],
    unselected : ['Monthly Status Reports']

  },
  {
    title : 'PRO',
    price : '49',
    selected : ['Unlimited Users', '150GB Storage', 'Unlimited Public Projects', 'Community Access','Unlimited Private Projects', 'Dedicated Phone Support', 'Unlimited Free Subdomains', 'Monthly Status Reports'],
    unselected : []

  }
]
function App() {
  return (
    <div>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
            {
                products.map((item, index) => {
                  return <Card key = {index} price = {item.price} title = {item.title} selected = {item.selected} unselected = {item.unselected} />
                })
              }
          </div>
      </div>
    
    </section>
      
    </div>
  )
}

export default App;
