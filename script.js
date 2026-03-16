let recipes = [
    // PASTA
    { id: 1, name: "Spaghetti Carbonara", category: ["pasta"], ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan", "Black pepper"], isVeggie: false, type: "meal" },
    { id: 2, name: "Pasta Broccoli", category: ["pasta"], ingredients: ["Pasta", "Broccoli", "Parmesan", "Black pepper"], isVeggie: true, type: "meal" },
    { id: 3, name: "Gnocchi with Bacon", category: ["pasta"], ingredients: ["Gnocchi", "Bacon", "Butter", "Parmesan", "Black pepper"], isVeggie: false, type: "meal" },

    // MEXICAN / CHICKEN
    { id: 4, name: "Chicken Tacos", category: ["mexican", "chicken"], ingredients: ["Chicken", "Taco shells", "Lettuce", "Tomatoes", "Cheese"], isVeggie: false, type: "meal" },
    { id: 5, name: "Chicken Wraps", category: ["mexican", "chicken"], ingredients: ["Chicken", "Tortillas", "Lettuce", "Paprika", "Shredded cheese", "Guacamole"], isVeggie: false, type: "meal" },
    { id: 6, name: "Mushroom Tacos", category: ["mexican"], ingredients: ["Mushrooms", "Dark soya sauce", "Tortillas", "Red onion", "Cilantro", "Lime", "Tomato", "Avocado"], isVeggie: true, type: "meal" },

    // BOWL
    { id: 7, name: "Chicken Cilantro Bowl", category: ["bowl", "chicken"], ingredients: ["Chickpeas", "Feta or white cheese", "Cucumber", "Avocados", "Boiled eggs"], isVeggie: false, type: "meal" },
    { id: 8, name: "Korean Beef Bowl", category: ["bowl", "beef"], ingredients: ["Ground beef", "Rice", "Gochujang sauce", "Cucumber", "Rice vinegar"], isVeggie: false, type: "meal" },
    { id: 9, name: "Sweet Potato & Beef Bowl", category: ["bowl", "beef"], ingredients: ["Sweet potatoes", "Beef", "Avocados", "Cottage cheese", "Hot honey sauce"], isVeggie: false, type: "meal" },
    { id: 10, name: "Chicken Lime Bowl", category: ["bowl", "chicken"], ingredients: ["Chicken breast", "Peaches or mango", "Red onion", "Cilantro", "Lime", "Rice", "Tomato", "Honey", "Avocado"], isVeggie: false, type: "meal" },

    // ASIAN
    { id: 11, name: "Thai Curry", category: ["asian"], ingredients: ["Noodles or rice", "Paprika", "Green beans", "Thai curry paste", "Coconut milk", "Chicken or shrimps"], isVeggie: false, type: "meal" },
    { id: 12, name: "Chicken Teriyaki", category: ["asian", "chicken"], ingredients: ["Chicken", "Rice", "Broccoli", "Soya sauce", "Teriyaki sauce"], isVeggie: false, type: "meal" },
    { id: 13, name: "Chickpeas Curry", category: ["asian"], ingredients: ["Chickpeas", "Rice", "Paprika", "Carrots", "Curry", "Coconut milk"], isVeggie: true, type: "meal" },
    { id: 14, name: "Ramen(ish)", category: ["asian"], ingredients: ["Noodles", "Eggs", "Gyozas", "Pak choi", "Spring onion", "Ginger", "Soya sauce"], isVeggie: false, type: "meal" },
    { id: 15, name: "Butter Chicken", category: ["asian"], ingredients: ["Chicken", "Yogurt", "Canned tomato", "Red onion", "Curry", "Rice"], isVeggie: false, type: "meal" },

    // RICE
    { id: 16, name: "Risotto", category: ["rice"], ingredients: ["Rice", "Bouillon", "Onion", "White wine", "Parmesan", "Mushrooms", "Butter"], isVeggie: true, type: "meal" },

    // FISH
    { id: 17, name: "Salmon with Veggies", category: ["fish"], ingredients: ["Salmon", "Paprika", "Carrot", "Broccoli"], isVeggie: false, type: "meal" },

    // VEGGIE
    { id: 18, name: "Spinach and Cheese Pastry", category: ["veggie"], ingredients: ["Pastry", "Spinach or pumpkin", "Goat cheese"], isVeggie: true, type: "meal" },

    // SALAD
    { id: 19, name: "Sweet Potato Shrimp Salad", category: ["salad"], ingredients: ["Sweet potato", "Shrimp", "Avocados", "Boiled eggs"], isVeggie: false, type: "meal" },
    { id: 20, name: "Chickpeas Salad", category: ["salad"], ingredients: ["Chickpeas", "Feta or white cheese", "Cucumber", "Avocados", "Boiled eggs"], isVeggie: true, type: "meal" },
    { id: 21, name: "Mango Pasta Salad", category: ["salad"], ingredients: ["Pasta", "Mangos", "Avocados", "Mozzarella (2)", "Nuts", "Fake chicken", "Lettuce"], isVeggie: true, type: "meal" },
    { id: 22, name: "Fruit Shrimp Salad", category: ["salad"], ingredients: ["Mango or strawberry", "Couscous", "Shrimps", "Mozzarella", "Avocado"], isVeggie: false, type: "meal" },
    { id: 23, name: "Watermelon Avocado Salad", category: ["dinner"], ingredients: ["Watermelon", "Avocado", "Feta or white cheese", "Cucumber (peeled)", "Black pepper"], isVeggie: true, type: "dinner" },

    // DINNER
    { id: 24, name: "Chicken/Egg Avocado Quesadillas", category: ["dinner"], ingredients: ["Chicken or egg", "Tortillas", "Shredded cheese", "Avocado"], isVeggie: false, type: "dinner" },
    { id: 25, name: "Tuna Rice", category: ["dinner"], ingredients: ["Rice", "Tuna", "Mayo", "Avocado", "Yogurt"], isVeggie: false, type: "dinner" },
    { id: 26, name: "Pizza", category: ["dinner"], ingredients: [], isVeggie: false, type: "dinner" },
    { id: 27, name: "Burger", category: ["dinner"], ingredients: ["Burger", "Goat cheese", "Avocado"], isVeggie: false, type: "dinner" },
    { id: 28, name: "Tosti", category: ["dinner"], ingredients: ["Bread", "Turkey", "Cheese"], isVeggie: false, type: "dinner" },
    { id: 29, name: "Blackberry Toast", category: ["dinner"], ingredients: ["Toasted bread", "Brie or goat cheese", "Blackberries", "Honey"], isVeggie: true, type: "dinner" },

    // EXTRAS
    { id: 30, name: "Banana Bread", category: ["extras"], ingredients: ["Bananas", "Eggs", "Oat flour", "Oil", "Honey", "Yogurt", "Peanut butter", "Baking powder", "Chocolate"], isVeggie: true, type: "extra" },
    { id: 31, name: "Spring Rolls", category: ["extras"], ingredients: ["Avocado", "Carrot", "Cucumber", "Rice paper"], isVeggie: true, type: "extra" },

    // TAKEOUT
    { id: 32, name: "Order Time", category: ["takeout"], ingredients: [], isVeggie: false, type: "meal" }
];

let nextId = 33;
let contacts = [];
let selectedContacts = [];
let selectedDinners = [];
let selectedExtras = [];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let currentFilter = { category: "all", ingredient: "", veggie: "all", type: "all" };
let weeklyMenu = {};

// Helper: get categories from a recipe (always returns array)
function getCategories(recipe) {
    return Array.isArray(recipe.category) ? recipe.category : [recipe.category];
}

// Helper: check if recipe matches a category
function hasCategory(recipe, cat) {
    return getCategories(recipe).includes(cat);
}

// Helper: get all unique categories across all recipes
function getAllCategories() {
    const cats = new Set();
    recipes.forEach(r => getCategories(r).forEach(c => cats.add(c)));
    return [...cats].sort();
}

function sanitizeHTML(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function isValidPhone(phone) {
    return /^\d{10,15}$/.test(phone.replace(/[\s\-\(\)]/g, ''));
}

function formatPhoneForWhatsApp(phone) {
    return phone.replace(/\D/g, '');
}

// localStorage
function saveToLocalStorage() {
    localStorage.setItem('menuPlanner_recipes', JSON.stringify(recipes));
    localStorage.setItem('menuPlanner_weeklyMenu', JSON.stringify(weeklyMenu));
    localStorage.setItem('menuPlanner_contacts', JSON.stringify(contacts));
    localStorage.setItem('menuPlanner_selectedContacts', JSON.stringify(selectedContacts));
    localStorage.setItem('menuPlanner_nextId', nextId.toString());
    localStorage.setItem('menuPlanner_selectedDinners', JSON.stringify(selectedDinners));
    localStorage.setItem('menuPlanner_selectedExtras', JSON.stringify(selectedExtras));
}

function loadFromLocalStorage() {
    try {
        const saved = key => localStorage.getItem('menuPlanner_' + key);
        const safeParseArray = (key, fallback) => {
            const raw = saved(key);
            if (!raw) return fallback;
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : fallback;
        };
        const safeParseObject = (key, fallback) => {
            const raw = saved(key);
            if (!raw) return fallback;
            const parsed = JSON.parse(raw);
            return (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) ? parsed : fallback;
        };
        recipes = safeParseArray('recipes', recipes);
        weeklyMenu = safeParseObject('weeklyMenu', weeklyMenu);
        contacts = safeParseArray('contacts', contacts);
        selectedContacts = safeParseArray('selectedContacts', selectedContacts);
        selectedDinners = safeParseArray('selectedDinners', selectedDinners);
        selectedExtras = safeParseArray('selectedExtras', selectedExtras);
        const savedId = saved('nextId');
        if (savedId && !isNaN(parseInt(savedId))) nextId = parseInt(savedId);
    } catch (e) {
        console.error('Failed to load from localStorage:', e);
    }
}


function renderRecipes() {
    const recipeList = document.getElementById("recipe-list");
    let filtered = recipes;

    if (currentFilter.category !== "all") {
        filtered = filtered.filter(r => hasCategory(r, currentFilter.category));
    }
    if (currentFilter.ingredient) {
        filtered = filtered.filter(r =>
            r.ingredients.some(ing => ing.toLowerCase().includes(currentFilter.ingredient.toLowerCase()))
        );
    }
    if (currentFilter.veggie !== "all") {
        filtered = filtered.filter(r => r.isVeggie === (currentFilter.veggie === "veggie"));
    }
    if (currentFilter.type !== "all") {
        filtered = filtered.filter(r => r.type === currentFilter.type);
    }

    recipeList.innerHTML = filtered.map(recipe => {
        const cats = getCategories(recipe).map(c => sanitizeHTML(c));
        const safeName = sanitizeHTML(recipe.name);

        return `
        <div class="recipe-card" data-recipe-id="${recipe.id}">
            <div class="recipe-content" onclick="addToMenu(${recipe.id})">
                ${cats.map(c => `<span class="recipe-category" contenteditable="false">${c}</span>`).join(' ')}
                <span class="recipe-badge">${recipe.isVeggie ? '🥬' : '🥩'}</span>
                <span class="recipe-badge">${recipe.type === 'drink' ? '🧃' : recipe.type === 'dinner' ? '🥙' : recipe.type === 'extra' ? '🍪' : '🍴'}</span>
                <h3 class="recipe-name" contenteditable="false">${safeName}</h3>
                ${recipe.ingredients.length > 0 ? `
                    <h4>Ingredients:</h4>
                    <ul class="recipe-ingredients" contenteditable="false">
                        ${recipe.ingredients.map(ing => `<li>${sanitizeHTML(ing)}</li>`).join('')}
                    </ul>
                ` : '<p class="no-ingredients">No ingredients needed - takeout!</p>'}
            </div>
            <div class="recipe-actions">
                <button onclick="toggleEdit(${recipe.id}); event.stopPropagation();" class="edit-btn">Edit</button>
                <button onclick="deleteRecipe(${recipe.id}); event.stopPropagation();">Delete</button>
            </div>
        </div>`;
    }).join('');
}

function toggleEdit(recipeId) {
    const card = document.querySelector(`[data-recipe-id="${recipeId}"]`);
    const contentDiv = card.querySelector('.recipe-content');
    const categoryEls = card.querySelectorAll('.recipe-category');
    const nameEl = card.querySelector('.recipe-name');
    const ingredientsEl = card.querySelector('.recipe-ingredients');
    const editBtn = card.querySelector('.edit-btn');

    const isEditing = nameEl.getAttribute('contenteditable') === 'true';

    if (isEditing) {
        const recipe = recipes.find(r => r.id === recipeId);
        const oldType = recipe.type;

        // Save categories from all category spans
        const newCats = Array.from(categoryEls).map(el => el.textContent.trim().toLowerCase()).filter(c => c);
        recipe.category = newCats.length > 0 ? newCats : ["uncategorized"];
        recipe.name = nameEl.textContent.trim();

        if (ingredientsEl) {
            recipe.ingredients = Array.from(ingredientsEl.querySelectorAll('li')).map(li => li.textContent.trim()).filter(i => i);
        }

        categoryEls.forEach(el => { el.setAttribute('contenteditable', 'false'); el.classList.remove('editing'); });
        nameEl.setAttribute('contenteditable', 'false');
        if (ingredientsEl) ingredientsEl.setAttribute('contenteditable', 'false');
        nameEl.classList.remove('editing');
        if (ingredientsEl) ingredientsEl.classList.remove('editing');

        contentDiv.onclick = function() { addToMenu(recipeId); };
        contentDiv.style.cursor = 'pointer';
        editBtn.textContent = 'Edit';
        editBtn.classList.remove('save-mode');

        recipe.isVeggie = confirm("Is this a vegetarian recipe?");
        const type = prompt("Type (meal, drink, dinner, or extra):", recipe.type || "meal");
        recipe.type = type ? type.toLowerCase() : "meal";

        if (oldType === 'dinner' && recipe.type !== 'dinner') selectedDinners = selectedDinners.filter(id => id !== recipeId);
        if (oldType === 'extra' && recipe.type !== 'extra') selectedExtras = selectedExtras.filter(id => id !== recipeId);

        updateFilterButtons();
        renderRecipes();
        renderDinners();
        renderExtras();
        saveToLocalStorage();
    } else {
        categoryEls.forEach(el => { el.setAttribute('contenteditable', 'true'); el.classList.add('editing'); });
        nameEl.setAttribute('contenteditable', 'true');
        if (ingredientsEl) ingredientsEl.setAttribute('contenteditable', 'true');
        nameEl.classList.add('editing');
        if (ingredientsEl) ingredientsEl.classList.add('editing');

        contentDiv.onclick = null;
        contentDiv.style.cursor = 'default';
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
                    <button class="change-recipe-btn" onclick="changeRecipe('${sanitizeHTML(day)}'); event.stopPropagation();">Change</button>
                ` : '<p>Click a recipe to add</p>'}
            </div>`;
    }).join('');
}

function addToMenu(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    const day = prompt(`Add "${recipe.name}" to which day?\n${days.join(', ')}`);
    if (day && days.map(d => d.toLowerCase()).includes(day.toLowerCase())) {
        const properDay = days.find(d => d.toLowerCase() === day.toLowerCase());
        weeklyMenu[properDay] = recipe;
        renderMenu();
        saveToLocalStorage();
    }
}

// Smart roulette: optimizes for shared ingredients
function rouletteMenu() {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    weekdays.forEach(day => delete weeklyMenu[day]);

    const mealRecipes = recipes.filter(r => r.type === 'meal' && !hasCategory(r, 'takeout'));
    const takeout = recipes.find(r => hasCategory(r, 'takeout'));

    if (mealRecipes.length < weekdays.length - 1) {
        alert("Not enough meal recipes!");
        return;
    }

    function sharedIngredientScore(recipe, selected) {
        const selectedIngredients = new Set();
        selected.forEach(r => r.ingredients.forEach(ing => selectedIngredients.add(ing.toLowerCase())));
        return recipe.ingredients.filter(ing => selectedIngredients.has(ing.toLowerCase())).length;
    }

    const shuffled = [...mealRecipes].sort(() => Math.random() - 0.5);
    const selectedRecipes = [shuffled[0]];
    const usedPrimaryCategories = new Set([getCategories(shuffled[0])[0]]);

    // Select 4 meals (5th slot will be takeout)
    while (selectedRecipes.length < weekdays.length - 1) {
        let bestRecipe = null;
        let bestScore = -1;

        for (const recipe of mealRecipes) {
            if (selectedRecipes.includes(recipe)) continue;
            const primaryCat = getCategories(recipe)[0];
            const catPenalty = usedPrimaryCategories.has(primaryCat) ? -10 : 0;
            const score = sharedIngredientScore(recipe, selectedRecipes) + catPenalty + Math.random() * 0.5;
            if (score > bestScore) { bestScore = score; bestRecipe = recipe; }
        }

        if (bestRecipe) {
            selectedRecipes.push(bestRecipe);
            usedPrimaryCategories.add(getCategories(bestRecipe)[0]);
        } else break;
    }

    // Add takeout to the list
    if (takeout) selectedRecipes.push(takeout);

    // Shuffle and assign to weekdays
    const finalSelection = selectedRecipes.sort(() => Math.random() - 0.5);
    weekdays.forEach((day, index) => {
        if (finalSelection[index]) weeklyMenu[day] = finalSelection[index];
    });

    renderMenu();
    saveToLocalStorage();
}


function addWeekend() {
    const weekend = ["Saturday", "Sunday"];
    const mealRecipes = recipes.filter(r => r.type === 'meal');
    const shuffled = [...mealRecipes].sort(() => Math.random() - 0.5);

    const usedCategories = new Set();
    Object.values(weeklyMenu).forEach(r => getCategories(r).forEach(c => usedCategories.add(c)));

    const selectedRecipes = [];
    for (const recipe of shuffled) {
        if (selectedRecipes.length >= weekend.length) break;
        const primaryCat = getCategories(recipe)[0];
        if (!usedCategories.has(primaryCat) && !selectedRecipes.includes(recipe)) {
            selectedRecipes.push(recipe);
            usedCategories.add(primaryCat);
        }
    }
    for (const recipe of shuffled) {
        if (selectedRecipes.length >= weekend.length) break;
        if (!selectedRecipes.includes(recipe)) selectedRecipes.push(recipe);
    }

    weekend.forEach((day, index) => {
        if (selectedRecipes[index]) weeklyMenu[day] = selectedRecipes[index];
    });
    renderMenu();
    saveToLocalStorage();
}

function changeRecipe(day) {
    const recipeNames = recipes.map(r => `${r.id}: ${r.name}`).join('\n');
    const input = prompt(`Select a recipe for ${day}:\n\n${recipeNames}\n\nEnter recipe number:`);
    if (!input) return;
    const recipe = recipes.find(r => r.id === parseInt(input));
    if (recipe) { weeklyMenu[day] = recipe; renderMenu(); saveToLocalStorage(); }
    else alert("Recipe not found!");
}

function emailWeeklyMenu() {
    if (Object.keys(weeklyMenu).length === 0 && selectedDinners.length === 0 && selectedExtras.length === 0) {
        alert("No recipes in the weekly menu, dinner or extras selection!");
        return;
    }
    showWhatsAppModal();
}

function renderDinners() {
    const dinnerList = document.getElementById("dinner-list");
    const dinnerRecipes = recipes.filter(r => r.type === 'dinner');
    if (dinnerRecipes.length === 0) {
        dinnerList.innerHTML = '<p style="color: #999; font-style: italic; font-size: 0.9rem;">No dinner recipes available.</p>';
        return;
    }
    dinnerList.innerHTML = dinnerRecipes.map(recipe => {
        const isSelected = selectedDinners.includes(recipe.id);
        return `<div class="dinner-item ${isSelected ? 'selected' : ''}" onclick="toggleDinner(${recipe.id})">
            <div class="dinner-item-name">${sanitizeHTML(recipe.name)}</div>
            <div class="dinner-item-category">${getCategories(recipe).join(', ')}</div>
        </div>`;
    }).join('');
}

function toggleDinner(recipeId) {
    const idx = selectedDinners.indexOf(recipeId);
    if (idx > -1) selectedDinners.splice(idx, 1);
    else selectedDinners.push(recipeId);
    renderDinners();
    saveToLocalStorage();
}

function renderExtras() {
    const extrasList = document.getElementById("extras-list");
    const extraRecipes = recipes.filter(r => r.type === 'extra');
    if (extraRecipes.length === 0) {
        extrasList.innerHTML = '<p style="color: #999; font-style: italic; font-size: 0.9rem;">No extras available.</p>';
        return;
    }
    extrasList.innerHTML = extraRecipes.map(recipe => {
        const isSelected = selectedExtras.includes(recipe.id);
        return `<div class="dinner-item ${isSelected ? 'selected' : ''}" onclick="toggleExtra(${recipe.id})">
            <div class="dinner-item-name">${sanitizeHTML(recipe.name)}</div>
            <div class="dinner-item-category">${getCategories(recipe).join(', ')}</div>
        </div>`;
    }).join('');
}

function toggleExtra(recipeId) {
    const idx = selectedExtras.indexOf(recipeId);
    if (idx > -1) selectedExtras.splice(idx, 1);
    else selectedExtras.push(recipeId);
    renderExtras();
    saveToLocalStorage();
}

function showWhatsAppModal() {
    if (document.getElementById('whatsapp-modal')) return;
    const modal = document.createElement('div');
    modal.id = 'whatsapp-modal';
    modal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:1000;';
    const mc = document.createElement('div');
    mc.style.cssText = 'background:white;padding:2rem;border-radius:12px;max-width:500px;width:90%;max-height:80vh;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.2);';
    mc.innerHTML = `
        <h3 style="margin-bottom:1rem;color:var(--midnight-blue);">Send via WhatsApp</h3>
        <p style="color:#7f8c8d;font-size:0.9rem;margin-bottom:1.5rem;">Select contacts to send the menu</p>
        <div style="margin-bottom:1.5rem;">
            <button onclick="showManageContactsModal()" style="padding:0.6rem 1.2rem;background:var(--green-sea);color:white;border:none;border-radius:6px;cursor:pointer;width:100%;">👥 Manage Contacts</button>
        </div>
        <div id="contact-selection-list" style="margin-bottom:1.5rem;"></div>
        <div style="display:flex;gap:0.5rem;justify-content:flex-end;">
            <button onclick="closeWhatsAppModal()" style="padding:0.6rem 1.2rem;background:#95a5a6;color:white;border:none;border-radius:6px;cursor:pointer;">Cancel</button>
            <button onclick="confirmSendWhatsApp()" style="padding:0.6rem 1.2rem;background:#25D366;color:white;border:none;border-radius:6px;cursor:pointer;">Send WhatsApp</button>
        </div>`;
    modal.appendChild(mc);
    document.body.appendChild(modal);
    renderContactSelection();
}

function showManageContactsModal() {
    const modal = document.createElement('div');
    modal.id = 'manage-contacts-modal';
    modal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:1001;';
    const mc = document.createElement('div');
    mc.style.cssText = 'background:white;padding:2rem;border-radius:12px;max-width:500px;width:90%;max-height:80vh;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.2);';
    mc.innerHTML = `
        <h3 style="margin-bottom:1.5rem;color:var(--midnight-blue);">Manage Contacts</h3>
        <div style="margin-bottom:1.5rem;">
            <input type="text" id="contact-name-input" placeholder="Name" style="width:100%;padding:0.6rem;border:2px solid #e0e0e0;border-radius:6px;margin-bottom:0.5rem;font-size:0.9rem;">
            <input type="tel" id="contact-phone-input" placeholder="Phone (e.g., 34612345678)" style="width:100%;padding:0.6rem;border:2px solid #e0e0e0;border-radius:6px;margin-bottom:0.5rem;font-size:0.9rem;">
            <button onclick="addContact()" style="padding:0.6rem 1.2rem;background:var(--green-sea);color:white;border:none;border-radius:6px;cursor:pointer;width:100%;">+ Add Contact</button>
        </div>
        <div id="contacts-list" style="margin-bottom:1.5rem;"></div>
        <div style="display:flex;gap:0.5rem;justify-content:flex-end;">
            <button onclick="closeManageContactsModal()" style="padding:0.6rem 1.2rem;background:var(--belize-hole);color:white;border:none;border-radius:6px;cursor:pointer;">Done</button>
        </div>`;
    modal.appendChild(mc);
    document.body.appendChild(modal);
    renderContactsList();
}

function renderContactsList() {
    const cl = document.getElementById('contacts-list');
    if (contacts.length === 0) { cl.innerHTML = '<p style="color:#999;font-style:italic;text-align:center;">No contacts yet.</p>'; return; }
    cl.innerHTML = contacts.map((c, i) => {
        const masked = c.phone.slice(0, 3) + '***' + c.phone.slice(-3);
        return `<div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem;border:1px solid #e0e0e0;border-radius:6px;margin-bottom:0.5rem;background:#f8f9fa;">
            <div><div style="font-weight:600;color:var(--midnight-blue);">${sanitizeHTML(c.name)}</div><div style="font-size:0.85rem;color:#7f8c8d;">${masked}</div></div>
            <button onclick="deleteContact(${i})" style="padding:0.4rem 0.8rem;background:var(--pomegranate);color:white;border:none;border-radius:6px;cursor:pointer;font-size:0.85rem;">Delete</button>
        </div>`;
    }).join('');
}

function renderContactSelection() {
    const sl = document.getElementById('contact-selection-list');
    if (contacts.length === 0) { sl.innerHTML = '<p style="color:#999;font-style:italic;text-align:center;">No contacts. Click "Manage Contacts" to add.</p>'; return; }
    sl.innerHTML = contacts.map((c, i) => {
        const sel = selectedContacts.includes(i);
        return `<div onclick="toggleContactSelection(${i})" style="padding:0.75rem;border:2px solid ${sel ? 'var(--green-sea)' : '#e0e0e0'};border-radius:6px;margin-bottom:0.5rem;cursor:pointer;background:${sel ? 'linear-gradient(135deg,#e8f8f5 0%,#d5f4e6 100%)' : 'white'};transition:all 0.2s;">
            <div style="display:flex;align-items:center;gap:0.5rem;">
                <span style="font-size:1.2rem;">${sel ? '✓' : '○'}</span>
                <span style="font-weight:600;color:${sel ? 'var(--green-sea)' : 'var(--midnight-blue)'};">${sanitizeHTML(c.name)}</span>
            </div></div>`;
    }).join('');
}

function addContact() {
    const name = document.getElementById('contact-name-input').value.trim();
    const phone = document.getElementById('contact-phone-input').value.trim();
    if (!name) { alert("Please enter a name!"); return; }
    if (!phone || !isValidPhone(phone)) { alert("Invalid phone! Use international format (e.g., 34612345678)"); return; }
    contacts.push({ name, phone: formatPhoneForWhatsApp(phone) });
    document.getElementById('contact-name-input').value = '';
    document.getElementById('contact-phone-input').value = '';
    renderContactsList();
    saveToLocalStorage();
}

function deleteContact(index) {
    if (!confirm(`Delete ${contacts[index].name}?`)) return;
    contacts.splice(index, 1);
    selectedContacts = selectedContacts.filter(i => i !== index).map(i => i > index ? i - 1 : i);
    renderContactsList();
    saveToLocalStorage();
}

function toggleContactSelection(index) {
    const idx = selectedContacts.indexOf(index);
    if (idx > -1) selectedContacts.splice(idx, 1);
    else selectedContacts.push(index);
    renderContactSelection();
    saveToLocalStorage();
}

function closeWhatsAppModal() { const m = document.getElementById('whatsapp-modal'); if (m) m.remove(); }
function closeManageContactsModal() { const m = document.getElementById('manage-contacts-modal'); if (m) m.remove(); renderContactSelection(); }

function confirmSendWhatsApp() {
    if (selectedContacts.length === 0) { alert("Please select at least one contact!"); return; }

    let menuText = "*Weekly Meal Menu*\n\n";
    let allIngredients = [];

    days.forEach(day => {
        const recipe = weeklyMenu[day];
        if (recipe) {
            menuText += `*${day}:* ${recipe.name}\n`;
            allIngredients.push(...recipe.ingredients);
        }
    });

    if (selectedDinners.length > 0) {
        menuText += `\n*Dinner Options:*\n`;
        selectedDinners.forEach(id => {
            const d = recipes.find(r => r.id === id);
            if (d) { menuText += `- ${d.name}\n`; allIngredients.push(...d.ingredients); }
        });
    }

    if (selectedExtras.length > 0) {
        menuText += `\n*Extras:*\n`;
        selectedExtras.forEach(id => {
            const e = recipes.find(r => r.id === id);
            if (e) { menuText += `- ${e.name}\n`; allIngredients.push(...e.ingredients); }
        });
    }

    const countMap = new Map();
    allIngredients.forEach(i => {
        const key = i.toLowerCase();
        countMap.set(key, (countMap.get(key) || 0) + 1);
    });
    const seen = new Map();
    allIngredients.forEach(i => { const key = i.toLowerCase(); if (!seen.has(key)) seen.set(key, i); });
    const unique = [...seen.entries()].sort((a, b) => a[0].localeCompare(b[0]));
    menuText += `\n*Shopping List:*\n${unique.map(([key, name]) => {
        const count = countMap.get(key);
        return count > 1 ? `- ${name} (x${count})` : `- ${name}`;
    }).join('\n')}`;

    selectedContacts.forEach((ci, i) => {
        const c = contacts[ci];
        setTimeout(() => { window.location.href = `https://wa.me/${c.phone}?text=${encodeURIComponent(menuText)}`; }, i * 1000);
    });
    closeWhatsAppModal();
}

function addNewRecipe() {
    const name = prompt("Recipe name:");
    if (!name) return;
    const category = prompt("Categories (comma-separated, e.g., mexican, chicken):");
    if (!category) return;
    const ingredientsInput = prompt("Ingredients (comma-separated, or leave empty for takeout):");
    const ingredients = ingredientsInput ? ingredientsInput.split(',').map(i => i.trim()).filter(i => i) : [];
    const isVeggie = confirm("Is this a vegetarian recipe?");
    const type = prompt("Type (meal, drink, dinner, or extra):", "meal");

    recipes.push({
        id: nextId++,
        name,
        category: category.split(',').map(c => c.trim().toLowerCase()).filter(c => c),
        ingredients,
        isVeggie,
        type: type ? type.toLowerCase() : "meal"
    });

    updateFilterButtons();
    renderRecipes();
    renderDinners();
    renderExtras();
    saveToLocalStorage();
}

function deleteRecipe(recipeId) {
    if (!confirm("Delete this recipe?")) return;
    recipes = recipes.filter(r => r.id !== recipeId);
    selectedDinners = selectedDinners.filter(id => id !== recipeId);
    selectedExtras = selectedExtras.filter(id => id !== recipeId);
    updateFilterButtons();
    renderRecipes();
    renderDinners();
    renderExtras();
    saveToLocalStorage();
}

function updateFilterButtons() {
    const categories = getAllCategories();
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
                <option value="veggie" ${currentFilter.veggie === 'veggie' ? 'selected' : ''}>🥬 Vegetarian</option>
                <option value="non-veggie" ${currentFilter.veggie === 'non-veggie' ? 'selected' : ''}>🥩 Non-Vegetarian</option>
            </select>
        </div>
        <div class="filter-group">
            <label for="type-select">Type</label>
            <select id="type-select" class="filter-select">
                <option value="all" ${currentFilter.type === 'all' ? 'selected' : ''}>All Types</option>
                <option value="meal" ${currentFilter.type === 'meal' ? 'selected' : ''}>🍴 Meals</option>
                <option value="drink" ${currentFilter.type === 'drink' ? 'selected' : ''}>🧃 Drinks</option>
                <option value="dinner" ${currentFilter.type === 'dinner' ? 'selected' : ''}>🥙 Dinners</option>
                <option value="extra" ${currentFilter.type === 'extra' ? 'selected' : ''}>🍪 Extras</option>
            </select>
        </div>`;

    document.getElementById('category-select').addEventListener('change', e => { currentFilter.category = e.target.value; renderRecipes(); });
    document.getElementById('ingredient-filter').addEventListener('input', e => { currentFilter.ingredient = e.target.value; renderRecipes(); });
    document.getElementById('diet-select').addEventListener('change', e => { currentFilter.veggie = e.target.value; renderRecipes(); });
    document.getElementById('type-select').addEventListener('change', e => { currentFilter.type = e.target.value; renderRecipes(); });
}

document.getElementById('roulette-btn').addEventListener('click', rouletteMenu);
document.getElementById('add-recipe-btn').addEventListener('click', addNewRecipe);
document.getElementById('whatsapp-menu-btn').addEventListener('click', emailWeeklyMenu);
document.getElementById('weekend-btn').addEventListener('click', addWeekend);

loadFromLocalStorage();
updateFilterButtons();
renderRecipes();
renderMenu();
renderDinners();
renderExtras();
