import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import MenuList from "./MenuList";
import ItemDetail from "./ItemDetail";
import AddItemForm from './AddItemForm';
import NotFound from './NotFound';

function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  
  useEffect(() => {
    async function getSnacksandDrinks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getSnacksandDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  
  const handleAddItem = (newItem, itemType) => {
    if (itemType === 'snacks') {
      setSnacks(currentSnacks => [...currentSnacks, newItem]);
    } else {
      setDrinks(currentDrinks => [...currentDrinks, newItem]);
    }
  };

  const deleteItem = async (itemType, id) => {
    await SnackOrBoozeApi.deleteItem(itemType, id);
    if (itemType === 'snacks') {
      setSnacks(snacks => snacks.filter(snack => snack.id !== id));
    } else {
      setDrinks(drinks => drinks.filter(drink => drink.id !== id));
    }
  };
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <MenuList items={snacks} title="Snacks" itemType="snacks" deleteItem={(id) => deleteItem('snacks', id)} />
            </Route>
            <Route exact path="/drinks">
              <MenuList items={drinks} title="Drinks" itemType="drinks" deleteItem={(id) => deleteItem('drinks', id)} />
            </Route>
            <Route path="/snacks/:id">
              <ItemDetail items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <ItemDetail items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/add-snack">
              <AddItemForm itemType="snacks" onItemAdded={(newItem) => handleAddItem(newItem, 'snacks')} />
            </Route>
            <Route exact path="/add-drink">
              <AddItemForm itemType="drinks" onItemAdded={(newItem) => handleAddItem(newItem, 'drinks')} />
            </Route>
            <Route>
            <NotFound />
            </Route>
           </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
