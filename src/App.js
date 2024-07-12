import UsersList from './components/users/UsersList';
import ProductsList from './components/products/ProductsList';

function App() {
  return (
    <div className="container m-10 p-10">
      <UsersList />
      <hr />
      <ProductsList />
    </div>
  );
}

export default App;
