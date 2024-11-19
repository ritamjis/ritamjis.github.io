// Sample recipe data
const recipes = [
    {
      title: 'Quinoa Salad',
      image: 'quinoa-salad.jpg',
      description: 'A healthy and delicious quinoa salad.'
    },
    // Add more recipes here...
  ];
  
  // Sample meal plan data
  const mealPlans = [
    {
      day: 'Monday',
      meal: 'Breakfast',
      dish: 'Avocado Toast'
    },
    // Add more meal plans here...
  ];
  
  // Function to create recipe cards dynamically
  function displayRecipes() {
    const recipeContainer = document.querySelector('.recipe-card');
  
    recipes.forEach(recipe => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const image = document.createElement('img');
      image.src = `images/${recipe.image}`;
      image.alt = recipe.title;
  
      const title = document.createElement('h3');
      title.textContent = recipe.title;
  
      const description = document.createElement('p');
      description.textContent = recipe.description;
  
      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(description);
  
      recipeContainer.appendChild(card);
    });
  }
  
  // Function to display meal plans dynamically
  function displayMealPlans() {
    const mealPlanContainer = document.querySelector('.meal-plan');
  
    mealPlans.forEach(plan => {
      const planItem = document.createElement('div');
      planItem.classList.add('plan-item');
  
      const day = document.createElement('h3');
      day.textContent = plan.day;
  
      const meal = document.createElement('p');
      meal.textContent = `${plan.meal}: ${plan.dish}`;
  
      planItem.appendChild(day);
      planItem.appendChild(meal);
  
      mealPlanContainer.appendChild(planItem);
    });
  }
  
  // Call functions to display recipes and meal plans when the page loads
  window.onload = function() {
    displayRecipes();
    displayMealPlans();
  };
  