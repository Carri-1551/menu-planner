let recipes = [
    {
        id: 1,
        name: "Spaghetti Carbonara",
        category: "pasta",
        ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan cheese", "Black pepper", "Salt"],
        isVeggie: false,
        season: "all",
        type: "meal"
    },
    {
        id: 2,
        name: "Penne Arrabbiata",
        category: "pasta",
        ingredients: ["Penne pasta", "Tomatoes", "Garlic", "Red chili flakes", "Olive oil", "Basil"],
        isVeggie: true,
        season: "all",
        type: "meal"
    },
    {
        id: 3,
        name: "Chicken Tacos",
        category: "mexican",
        ingredients: ["Chicken breast", "Taco shells", "Lettuce", "Tomatoes", "Cheese", "Sour cream", "Taco seasoning"],
        isVeggie: false,
        season: "all",
        type: "meal"
    },
    {
        id: 4,
        name: "Beef Enchiladas",
        category: "mexican",
        ingredients: ["Ground beef", "Tortillas", "Enchilada sauce", "Cheese", "Onions", "Cumin", "Garlic"],
        isVeggie: false,
        season: "all",
        type: "meal"
    },
    {
        id: 5,
        name: "Roasted Vegetable Medley",
        category: "veggies",
        ingredients: ["Zucchini", "Bell peppers", "Carrots", "Olive oil", "Garlic", "Herbs", "Salt", "Pepper"],
        isVeggie: true,
        season: "summer",
        type: "meal"
    },
    {
        id: 6,
        name: "Veggie Stir Fry",
        category: "veggies",
        ingredients: ["Broccoli", "Carrots", "Snap peas", "Soy sauce", "Ginger", "Garlic", "Sesame oil"],
        isVeggie: true,
        season: "all",
        type: "meal"
    },
    {
        id: 7,
        name: "Order Time",
        category: "takeout",
        ingredients: [],
        isVeggie: false,
        season: "all",
        type: "meal"
    }
];

let nextId = 8;
let emailRecipients = ["", ""];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let currentFilter = {
    category: "all",
    ingredient: "",
    veggie: "all",
    season: "all",
    type: "all"
};
let weeklyMenu = {};

// Security: Sanitize HTML to prevent XSS attacks
function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// Security: Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function renderRecipes() {
    const recipeList = document.getElementById("recipe-list");
    let filtered = recipes;
    
    // Apply filters
    if (currentFilter.category !== "all") {
        filtered = filtered.filter(r => r.category === currentFilter.category);
    }
    if (currentFilter.ingredient) {
        filtered = filtered.filter(r => 
            r.ingredients.some(ing => ing.toLowerCase().includes(currentFilter.ingredient.toLowerCase()))
        );
    }
    if (currentFilter.veggie !== "all") {
        filtered = filtered.filter(r => r.isVeggie === (currentFilter.veggie === "veggie"));
    }
    if (currentFilter.season !== "all") {
        filtered = filtered.filter(r => r.season === currentFilter.season || r.season === "all");
    }
    if (currentFilter.type !== "all") {
        filtered = filtered.filter(r => r.type === currentFilter.type);
    }
    
    recipeList.innerHTML = filtered.map(recipe => {
        const safeCategory = sanitizeHTML(recipe.category);
        const safeName = sanitizeHTML(recipe.name);
        const safeSeason = sanitizeHTML(recipe.season);
        
        return `
        <div class="recipe-card" data-recipe-id="${recipe.id}">
            <div onclick="addToMenu(${recipe.id})">
                <span class="recipe-category" contenteditable="false">${safeCategory}</span>
                <span class="recipe-badge">${recipe.isVeggie ? '🌱' : '🍖'}</span>
                <span class="recipe-badge">${recipe.type === 'drink' ? '🥤' : '🍽️'}</span>
                <h3 class="recipe-name" contenteditable="false">${safeName}</h3>
                ${recipe.ingredients.length > 0 ? `
                    <h4>Ingredients:</h4>
                    <ul class="recipe-ingredients" contenteditable="false">
                        ${recipe.ingredients.map(ing => `<li>${sanitizeHTML(ing)}</li>`).join('')}
                    </ul>
                ` : '<p class="no-ingredients">No ingredients needed - takeout!</p>'}
                <p class="recipe-meta">Season: ${safeSeason}</p>
            </div>
            <div class="recipe-actions">
                <button onclick="toggleEdit(${recipe.id}); event.stopPropagation();" class="edit-btn">Edit</button>
                <button onclick="deleteRecipe(${recipe.id}); event.stopPropagation();">Delete</button>
            </div>
        </div>
    `;
    }).join('');
}

function toggleEdit(recipeId) {
    const card = document.querySelector(`[data-recipe-id="${recipeId}"]`);
    const categoryEl = card.querySelector('.recipe-category');
    const nameEl = card.querySelector('.recipe-name');
    const ingredientsEl = card.querySelector('.recipe-ingredients');
    const editBtn = card.querySelector('.edit-btn');
    
    const isEditing = nameEl.getAttribute('contenteditable') === 'true';
    
    if (isEditing) {
        // Save changes
        const recipe = recipes.find(r => r.id === recipeId);
        recipe.category = categoryEl.textContent.trim().toLowerCase();
        recipe.name = nameEl.textContent.trim();
        
        if (ingredientsEl) {
            const items = Array.from(ingredientsEl.querySelectorAll('li'));
            recipe.ingredients = items.map(li => li.textContent.trim()).filter(i => i);
        }
        
        categoryEl.setAttribute('contenteditable', 'false');
        nameEl.setAttribute('contenteditable', 'false');
        if (ingredientsEl) ingredientsEl.setAttribute('contenteditable', 'false');
        
        categoryEl.classList.remove('editing');
        nameEl.classList.remove('editing');
        if (ingredientsEl) ingredientsEl.classList.remove('editing');
        
        editBtn.textContent = 'Edit';
        editBtn.classList.remove('save-mode');
        
        // Prompt for additional fields
        const isVeggie = confirm("Is this a vegetarian recipe?");
        recipe.isVeggie = isVeggie;
        
        const season = prompt("Season (spring, summer, fall, winter, all):", recipe.season || "all");
        recipe.season = season ? season.toLowerCase() : "all";
        
        const type = prompt("Type (meal or drink):", recipe.type || "meal");
        recipe.type = type ? type.toLowerCase() : "meal";
        
        updateFilterButtons();
        renderRecipes();
    } else {
        // Enable editing
        categoryEl.setAttribute('contenteditable', 'true');
        nameEl.setAttribute('contenteditable', 'true');
        if (ingredientsEl) ingredientsEl.setAttribute('contenteditable', 'true');
        
        categoryEl.classList.add('editing');
        nameEl.classList.add('editing');
        if (ingredientsEl) ingredientsEl.classList.add('editing');
        
        nameEl.focus();
        editBtn.textContent = 'Save';
        editBtn.classList.add('save-mode');
    }
}

function renderMenu() {
    const menuDays = document.getElementById("menu-days");
    menuDays.innerHTML = days.map(day => {
        const recipe = weeklyMenu[day];
        const safeName = recipe ? sanitizeHTML(recipe.name) : '';
        
        return `
            <div class="day-slot ${recipe ? 'has-recipe' : ''}">
                <h3>${sanitizeHTML(day)}</h3>
                ${recipe ? `
                    <p>${safeName}</p>
                    <button class="change-recipe-btn" onclick="changeRecipe('${sanitizeHTML(day)}'); event.stopPropagation();">Change Recipe</button>
                ` : '<p>Click a recipe to add</p>'}
            </div>
        `;
    }).join('');
}

function addToMenu(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    const day = prompt(`Add "${recipe.name}" to which day?\n${days.join(', ')}`);
    
    if (day && days.map(d => d.toLowerCase()).includes(day.toLowerCase())) {
        const properDay = days.find(d => d.toLowerCase() === day.toLowerCase());
        weeklyMenu[properDay] = recipe;
        renderMenu();
    }
}

function rouletteMenu() {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    weeklyMenu = {};
    
    // Only include meals, not drinks
    const mealRecipes = recipes.filter(r => r.type === 'meal');
    const shuffled = [...mealRecipes].sort(() => Math.random() - 0.5);
    const usedCategories = new Set();
    const selectedRecipes = [];
    
    // First pass: try to get unique categories
    for (const recipe of shuffled) {
        if (!usedCategories.has(recipe.category) && selectedRecipes.length < weekdays.length) {
            selectedRecipes.push(recipe);
            usedCategories.add(recipe.category);
        }
    }
    
    // Second pass: fill remaining slots if needed
    for (const recipe of shuffled) {
        if (selectedRecipes.length >= weekdays.length) break;
        if (!selectedRecipes.includes(recipe)) {
            selectedRecipes.push(recipe);
        }
    }
    
    // Assign to weekdays
    weekdays.forEach((day, index) => {
        if (selectedRecipes[index]) {
            weeklyMenu[day] = selectedRecipes[index];
        }
    });
    
    renderMenu();
}

function addWeekend() {
    const weekend = ["Saturday", "Sunday"];
    
    // Only include meals, not drinks
    const mealRecipes = recipes.filter(r => r.type === 'meal');
    const shuffled = [...mealRecipes].sort(() => Math.random() - 0.5);
    
    const usedCategories = new Set(
        Object.values(weeklyMenu).map(r => r.category)
    );
    
    const selectedRecipes = [];
    
    // Try to get recipes with different categories from weekdays
    for (const recipe of shuffled) {
        if (!usedCategories.has(recipe.category) && selectedRecipes.length < weekend.length) {
            selectedRecipes.push(recipe);
            usedCategories.add(recipe.category);
        }
    }
    
    // Fill remaining slots if needed
    for (const recipe of shuffled) {
        if (selectedRecipes.length >= weekend.length) break;
        if (!selectedRecipes.includes(recipe)) {
            selectedRecipes.push(recipe);
        }
    }
    
    // Assign to weekend
    weekend.forEach((day, index) => {
        if (selectedRecipes[index]) {
            weeklyMenu[day] = selectedRecipes[index];
        }
    });
    
    renderMenu();
}

function emailIngredients(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    if (recipe.ingredients.length === 0) {
        alert("No ingredients needed - it's takeout time!");
        return;
    }
    
    const recipient = prompt("Enter recipient email address:");
    if (!recipient) return;
    
    const subject = encodeURIComponent(`Ingredients for ${recipe.name}`);
    const body = encodeURIComponent(
        `Hi!\n\nHere are the ingredients needed for ${recipe.name}:\n\n` +
        recipe.ingredients.map(ing => `• ${ing}`).join('\n') +
        `\n\nEnjoy cooking!\n`
    );
    
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
}

function changeRecipe(day) {
    const recipeNames = recipes.map(r => `${r.id}: ${r.name}`).join('\n');
    const input = prompt(`Select a recipe for ${day}:\n\n${recipeNames}\n\nEnter recipe number:`);
    
    if (!input) return;
    
    const recipeId = parseInt(input);
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (recipe) {
        weeklyMenu[day] = recipe;
        renderMenu();
    } else {
        alert("Recipe not found!");
    }
}

function emailWeeklyMenu() {
    const menuDays = Object.keys(weeklyMenu);
    
    if (menuDays.length === 0) {
        alert("No recipes in the weekly menu!");
        return;
    }
    
    // Show email configuration modal
    showEmailModal();
}

function showEmailModal() {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.id = 'email-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 12px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    `;
    
    modalContent.innerHTML = `
        <h3 style="margin-bottom: 1.5rem; color: var(--midnight-blue);">Email Recipients</h3>
        <div id="email-list" style="margin-bottom: 1rem;"></div>
        <button onclick="addEmailRecipient()" style="padding: 0.5rem 1rem; background: var(--green-sea); color: white; border: none; border-radius: 6px; cursor: pointer; margin-bottom: 1.5rem;">+ Add Recipient</button>
        <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <button onclick="closeEmailModal()" style="padding: 0.6rem 1.2rem; background: #95a5a6; color: white; border: none; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button onclick="confirmSendEmail()" style="padding: 0.6rem 1.2rem; background: var(--belize-hole); color: white; border: none; border-radius: 6px; cursor: pointer;">Send Email</button>
        </div>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    renderEmailList();
}

function renderEmailList() {
    const emailList = document.getElementById('email-list');
    emailList.innerHTML = emailRecipients.map((email, index) => {
        const safeEmail = sanitizeHTML(email);
        const isValid = email ? isValidEmail(email) : true;
        const borderColor = email && !isValid ? '#e74c3c' : '#e0e0e0';
        
        return `
        <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; align-items: center;">
            <input type="email" 
                   value="${safeEmail}" 
                   placeholder="email@example.com"
                   onchange="updateEmailRecipient(${index}, this.value)"
                   style="flex: 1; padding: 0.6rem; border: 2px solid ${borderColor}; border-radius: 6px; font-size: 0.9rem;">
            ${emailRecipients.length > 1 ? `
                <button onclick="removeEmailRecipient(${index})" 
                        style="padding: 0.6rem 0.8rem; background: var(--pomegranate); color: white; border: none; border-radius: 6px; cursor: pointer;">✕</button>
            ` : ''}
        </div>
        ${email && !isValid ? '<small style="color: #e74c3c; margin-left: 0.5rem;">Invalid email format</small>' : ''}
    `;
    }).join('');
}

function updateEmailRecipient(index, value) {
    emailRecipients[index] = value;
}

function addEmailRecipient() {
    emailRecipients.push("");
    renderEmailList();
}

function removeEmailRecipient(index) {
    emailRecipients.splice(index, 1);
    renderEmailList();
}

function closeEmailModal() {
    const modal = document.getElementById('email-modal');
    if (modal) modal.remove();
}

function confirmSendEmail() {
    const validEmails = emailRecipients.filter(email => email && isValidEmail(email));
    
    if (validEmails.length === 0) {
        alert("Please enter at least one valid email address!");
        return;
    }
    
    // Check for invalid emails
    const invalidEmails = emailRecipients.filter(email => email && !isValidEmail(email));
    if (invalidEmails.length > 0) {
        alert(`Invalid email format detected:\n${invalidEmails.join('\n')}\n\nPlease correct before sending.`);
        return;
    }
    
    // Generate menu content
    let menuText = "";
    let allIngredients = [];
    
    days.forEach(day => {
        const recipe = weeklyMenu[day];
        if (recipe) {
            menuText += `${day}: ${recipe.name}\n`;
            if (recipe.ingredients.length > 0) {
                allIngredients.push(...recipe.ingredients);
            }
        }
    });
    
    const uniqueIngredients = [...new Set(allIngredients)].sort();
    
    // Show confirmation
    const confirmMessage = `Send weekly menu to:\n\n${validEmails.join('\n')}\n\nContinue?`;
    
    if (confirm(confirmMessage)) {
        const subject = encodeURIComponent("Weekly Menu Plan");
        const body = encodeURIComponent(
            `Hi!\n\nHere's the weekly menu:\n\n${menuText}\n\n` +
            `Shopping List:\n${uniqueIngredients.map(ing => `• ${ing}`).join('\n')}\n\n` +
            `Enjoy your meals!\n`
        );
        
        // Open email client with all recipients
        window.location.href = `mailto:${validEmails.join(',')}?subject=${subject}&body=${body}`;
        
        closeEmailModal();
    }
}

function addNewRecipe() {
    const name = prompt("Recipe name:");
    if (!name) return;
    
    const category = prompt("Category (pasta, mexican, veggies, takeout, or create new):");
    if (!category) return;
    
    const ingredientsInput = prompt("Ingredients (comma-separated, or leave empty for takeout):");
    const ingredients = ingredientsInput ? ingredientsInput.split(',').map(i => i.trim()).filter(i => i) : [];
    
    const isVeggie = confirm("Is this a vegetarian recipe?");
    
    const season = prompt("Season (spring, summer, fall, winter, all):", "all");
    
    const type = prompt("Type (meal or drink):", "meal");
    
    recipes.push({
        id: nextId++,
        name,
        category: category.toLowerCase(),
        ingredients,
        isVeggie,
        season: season ? season.toLowerCase() : "all",
        type: type ? type.toLowerCase() : "meal"
    });
    
    updateFilterButtons();
    renderRecipes();
}

function deleteRecipe(recipeId) {
    if (!confirm("Delete this recipe?")) return;
    
    recipes = recipes.filter(r => r.id !== recipeId);
    updateFilterButtons();
    renderRecipes();
}

function updateFilterButtons() {
    const categories = [...new Set(recipes.map(r => r.category))];
    const filterButtons = document.querySelector('.filter-buttons');
    
    filterButtons.innerHTML = `
        <div class="filter-group">
            <label for="category-select">Category</label>
            <select id="category-select" class="filter-select">
                <option value="all">All Categories</option>
                ${categories.map(cat => {
                    const safeCat = sanitizeHTML(cat);
                    const selected = currentFilter.category === cat ? 'selected' : '';
                    return `<option value="${safeCat}" ${selected}>${safeCat.charAt(0).toUpperCase() + safeCat.slice(1)}</option>`;
                }).join('')}
            </select>
        </div>
        
        <div class="filter-group">
            <label for="ingredient-filter">Ingredient</label>
            <input type="text" id="ingredient-filter" placeholder="Search by ingredient..." value="${sanitizeHTML(currentFilter.ingredient)}" class="ingredient-input">
        </div>
        
        <div class="filter-group">
            <label for="diet-select">Diet</label>
            <select id="diet-select" class="filter-select">
                <option value="all" ${currentFilter.veggie === 'all' ? 'selected' : ''}>All</option>
                <option value="veggie" ${currentFilter.veggie === 'veggie' ? 'selected' : ''}>🌱 Vegetarian</option>
                <option value="non-veggie" ${currentFilter.veggie === 'non-veggie' ? 'selected' : ''}>🍖 Non-Vegetarian</option>
            </select>
        </div>
        
        <div class="filter-group">
            <label for="season-select">Season</label>
            <select id="season-select" class="filter-select">
                <option value="all" ${currentFilter.season === 'all' ? 'selected' : ''}>All Seasons</option>
                <option value="spring" ${currentFilter.season === 'spring' ? 'selected' : ''}>Spring</option>
                <option value="summer" ${currentFilter.season === 'summer' ? 'selected' : ''}>Summer</option>
                <option value="fall" ${currentFilter.season === 'fall' ? 'selected' : ''}>Fall</option>
                <option value="winter" ${currentFilter.season === 'winter' ? 'selected' : ''}>Winter</option>
            </select>
        </div>
        
        <div class="filter-group">
            <label for="type-select">Type</label>
            <select id="type-select" class="filter-select">
                <option value="all" ${currentFilter.type === 'all' ? 'selected' : ''}>All Types</option>
                <option value="meal" ${currentFilter.type === 'meal' ? 'selected' : ''}>🍽️ Meals</option>
                <option value="drink" ${currentFilter.type === 'drink' ? 'selected' : ''}>🥤 Drinks</option>
            </select>
        </div>
    `;
    
    // Add event listeners after rendering
    document.getElementById('category-select').addEventListener('change', (e) => {
        currentFilter.category = e.target.value;
        renderRecipes();
    });
    
    document.getElementById('ingredient-filter').addEventListener('input', (e) => {
        currentFilter.ingredient = e.target.value;
        renderRecipes();
    });
    
    document.getElementById('diet-select').addEventListener('change', (e) => {
        currentFilter.veggie = e.target.value;
        renderRecipes();
    });
    
    document.getElementById('season-select').addEventListener('change', (e) => {
        currentFilter.season = e.target.value;
        renderRecipes();
    });
    
    document.getElementById('type-select').addEventListener('change', (e) => {
        currentFilter.type = e.target.value;
        renderRecipes();
    });
}

function setFilter(filterType, value) {
    currentFilter[filterType] = value;
    updateFilterButtons();
    renderRecipes();
}

document.getElementById('roulette-btn').addEventListener('click', rouletteMenu);
document.getElementById('add-recipe-btn').addEventListener('click', addNewRecipe);
document.getElementById('email-menu-btn').addEventListener('click', emailWeeklyMenu);
document.getElementById('weekend-btn').addEventListener('click', addWeekend);

updateFilterButtons();
renderRecipes();
renderMenu();
