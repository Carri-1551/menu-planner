let recipes = [
    { id: 1, name: "Spaghetti Carbonara", category: ["pasta"], ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan", "Black pepper"], isVeggie: false, type: "meal" },
    { id: 2, name: "Pasta Broccoli", category: ["pasta"], ingredients: ["Pasta", "Broccoli", "Parmesan", "Black pepper"], isVeggie: true, type: "meal" },
    { id: 3, name: "Gnocchi with Bacon", category: ["pasta"], ingredients: ["Gnocchi", "Bacon", "Butter", "Parmesan", "Black pepper"], isVeggie: false, type: "meal" },
    { id: 4, name: "Chicken Tacos", category: ["mexican", "chicken"], ingredients: ["Chicken", "Taco shells", "Lettuce", "Tomatoes", "Cheese"], isVeggie: false, type: "meal" },
    { id: 5, name: "Chicken Wraps", category: ["mexican", "chicken"], ingredients: ["Chicken", "Tortillas", "Lettuce", "Paprika", "Shredded cheese", "Guacamole"], isVeggie: false, type: "meal" },
    { id: 6, name: "Mushroom Tacos", category: ["mexican"], ingredients: ["Mushrooms", "Dark soya sauce", "Tortillas", "Red onion", "Cilantro", "Lime", "Tomato", "Avocado"], isVeggie: true, type: "meal" },
    { id: 7, name: "Chicken Cilantro Bowl", category: ["bowl", "chicken"], ingredients: ["Chickpeas", "Feta or white cheese", "Cucumber", "Avocados", "Boiled eggs"], isVeggie: false, type: "meal" },
    { id: 8, name: "Korean Beef Bowl", category: ["bowl", "beef"], ingredients: ["Ground beef", "Rice", "Gochujang sauce", "Cucumber", "Rice vinegar"], isVeggie: false, type: "meal" },
    { id: 9, name: "Sweet Potato & Beef Bowl", category: ["bowl", "beef"], ingredients: ["Sweet potatoes", "Beef", "Avocados", "Cottage cheese", "Hot honey sauce"], isVeggie: false, type: "meal" },
    { id: 10, name: "Chicken Lime Bowl", category: ["bowl", "chicken"], ingredients: ["Chicken breast", "Peaches or mango", "Red onion", "Cilantro", "Lime", "Rice", "Tomato", "Honey", "Avocado"], isVeggie: false, type: "meal" },
    { id: 11, name: "Thai Curry", category: ["asian"], ingredients: ["Noodles or rice", "Paprika", "Green beans", "Thai curry paste", "Coconut milk", "Chicken or shrimps"], isVeggie: false, type: "meal" },
    { id: 12, name: "Chicken Teriyaki", category: ["asian", "chicken"], ingredients: ["Chicken", "Rice", "Broccoli", "Soya sauce", "Teriyaki sauce"], isVeggie: false, type: "meal" },
    { id: 13, name: "Chickpeas Curry", category: ["asian"], ingredients: ["Chickpeas", "Rice", "Paprika", "Carrots", "Curry", "Coconut milk"], isVeggie: true, type: "meal" },
    { id: 14, name: "Ramen(ish)", category: ["asian"], ingredients: ["Noodles", "Eggs", "Gyozas", "Pak choi", "Spring onion", "Ginger", "Soya sauce"], isVeggie: false, type: "meal" },
    { id: 15, name: "Butter Chicken", category: ["asian"], ingredients: ["Chicken", "Yogurt", "Canned tomato", "Red onion", "Curry", "Rice"], isVeggie: false, type: "meal" },
    { id: 16, name: "Risotto", category: ["rice"], ingredients: ["Rice", "Bouillon", "Onion", "White wine", "Parmesan", "Mushrooms", "Butter"], isVeggie: true, type: "meal" },
    { id: 17, name: "Salmon with Veggies", category: ["fish"], ingredients: ["Salmon", "Paprika", "Carrot", "Broccoli"], isVeggie: false, type: "meal" },
    { id: 18, name: "Spinach and Cheese Pastry", category: ["veggie"], ingredients: ["Pastry", "Spinach or pumpkin", "Goat cheese"], isVeggie: true, type: "meal" },
    { id: 19, name: "Sweet Potato Shrimp Salad", category: ["salad"], ingredients: ["Sweet potato", "Shrimp", "Avocados", "Boiled eggs"], isVeggie: false, type: "meal" },
    { id: 20, name: "Chickpeas Salad", category: ["salad"], ingredients: ["Chickpeas", "Feta or white cheese", "Cucumber", "Avocados", "Boiled eggs"], isVeggie: true, type: "meal" },
    { id: 21, name: "Mango Pasta Salad", category: ["salad"], ingredients: ["Pasta", "Mangos", "Avocados", "Mozzarella (2)", "Nuts", "Fake chicken", "Lettuce"], isVeggie: true, type: "meal" },
    { id: 22, name: "Fruit Shrimp Salad", category: ["salad"], ingredients: ["Mango or strawberry", "Couscous", "Shrimps", "Mozzarella", "Avocado"], isVeggie: false, type: "meal" },
    { id: 23, name: "Watermelon Avocado Salad", category: ["dinner"], ingredients: ["Watermelon", "Avocado", "Feta or white cheese", "Cucumber (peeled)", "Black pepper"], isVeggie: true, type: "dinner" },
    { id: 24, name: "Chicken/Egg Avocado Quesadillas", category: ["dinner"], ingredients: ["Chicken or egg", "Tortillas", "Shredded cheese", "Avocado"], isVeggie: false, type: "dinner" },
    { id: 25, name: "Tuna Rice", category: ["dinner"], ingredients: ["Rice", "Tuna", "Mayo", "Avocado", "Yogurt"], isVeggie: false, type: "dinner" },
    { id: 26, name: "Pizza", category: ["dinner"], ingredients: [], isVeggie: false, type: "dinner" },
    { id: 27, name: "Burger", category: ["dinner"], ingredients: ["Burger", "Goat cheese", "Avocado"], isVeggie: false, type: "dinner" },
    { id: 28, name: "Tosti", category: ["dinner"], ingredients: ["Bread", "Turkey", "Cheese"], isVeggie: false, type: "dinner" },
    { id: 29, name: "Blackberry Toast", category: ["dinner"], ingredients: ["Toasted bread", "Brie or goat cheese", "Blackberries", "Honey"], isVeggie: true, type: "dinner" },
    { id: 30, name: "Banana Bread", category: ["extras"], ingredients: ["Bananas", "Eggs", "Oat flour", "Oil", "Honey", "Yogurt", "Peanut butter", "Baking powder", "Chocolate"], isVeggie: true, type: "extra" },
    { id: 31, name: "Spring Rolls", category: ["extras"], ingredients: ["Avocado", "Carrot", "Cucumber", "Rice paper"], isVeggie: true, type: "extra" },
    { id: 32, name: "Order Time", category: ["takeout"], ingredients: [], isVeggie: false, type: "meal" }
];
let nextId = 33, contacts = [], selectedContacts = [], selectedDinners = [], selectedExtras = [];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let currentFilter = { category: "all", ingredient: "", veggie: "all", type: "all" };
let weeklyMenu = {};

// Helpers
function getCategories(r) { return Array.isArray(r.category) ? r.category : [r.category]; }
function hasCategory(r, c) { return getCategories(r).includes(c); }
function getAllCategories() { const s = new Set(); recipes.forEach(r => getCategories(r).forEach(c => s.add(c))); return [...s].sort(); }
function sanitizeHTML(str) { if (typeof str !== 'string') return ''; return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function isValidPhone(p) { return /^\d{10,15}$/.test(p.replace(/[\s\-\(\)]/g, '')); }
function formatPhoneForWhatsApp(p) { return p.replace(/\D/g, ''); }

// Modal helpers
function showModal(id, html, zIndex) {
    if (document.getElementById(id)) return;
    const o = document.createElement('div');
    o.id = id;
    o.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:' + (zIndex || 1000) + ';';
    const b = document.createElement('div');
    b.style.cssText = 'background:white;padding:2rem;border-radius:12px;max-width:500px;width:90%;max-height:80vh;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.2);';
    b.innerHTML = html;
    o.appendChild(b);
    document.body.appendChild(o);
}
function closeModal(id) { const m = document.getElementById(id); if (m) m.remove(); }

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
        const safeArr = (key, fb) => { const r = saved(key); if (!r) return fb; const p = JSON.parse(r); return Array.isArray(p) ? p : fb; };
        const safeObj = (key, fb) => { const r = saved(key); if (!r) return fb; const p = JSON.parse(r); return (p && typeof p === 'object' && !Array.isArray(p)) ? p : fb; };
        recipes = safeArr('recipes', recipes);
        weeklyMenu = safeObj('weeklyMenu', weeklyMenu);
        contacts = safeArr('contacts', contacts);
        selectedContacts = safeArr('selectedContacts', selectedContacts);
        selectedDinners = safeArr('selectedDinners', selectedDinners);
        selectedExtras = safeArr('selectedExtras', selectedExtras);
        const sid = saved('nextId');
        if (sid && !isNaN(parseInt(sid))) nextId = parseInt(sid);
    } catch (e) { console.error('Failed to load localStorage:', e); }
}

// Render recipes
function renderRecipes() {
    const list = document.getElementById("recipe-list");
    let filtered = recipes;
    if (currentFilter.category !== "all") filtered = filtered.filter(r => hasCategory(r, currentFilter.category));
    if (currentFilter.ingredient) filtered = filtered.filter(r => r.ingredients.some(i => i.toLowerCase().includes(currentFilter.ingredient.toLowerCase())));
    if (currentFilter.veggie !== "all") filtered = filtered.filter(r => r.isVeggie === (currentFilter.veggie === "veggie"));
    if (currentFilter.type !== "all") filtered = filtered.filter(r => r.type === currentFilter.type);

    list.innerHTML = filtered.map(recipe => {
        const cats = getCategories(recipe).map(c => sanitizeHTML(c));
        return `<div class="recipe-card" data-recipe-id="${recipe.id}">
            <div class="recipe-content" onclick="addToMenu(${recipe.id})">
                ${cats.map(c => `<span class="recipe-category" contenteditable="false">${c}</span>`).join(' ')}
                <span class="recipe-badge">${recipe.isVeggie ? '🥬' : '🥩'}</span>
                <span class="recipe-badge">${recipe.type === 'drink' ? '🧃' : recipe.type === 'dinner' ? '🥙' : recipe.type === 'extra' ? '🍪' : '🍴'}</span>
                <h3 class="recipe-name" contenteditable="false">${sanitizeHTML(recipe.name)}</h3>
                ${recipe.ingredients.length > 0 ? `<h4>Ingredients:</h4><ul class="recipe-ingredients" contenteditable="false">${recipe.ingredients.map(i => `<li>${sanitizeHTML(i)}</li>`).join('')}</ul>` : '<p class="no-ingredients">No ingredients needed - takeout!</p>'}
            </div>
            <div class="recipe-actions">
                <button onclick="toggleEdit(${recipe.id}); event.stopPropagation();" class="edit-btn">Edit</button>
                <button onclick="deleteRecipe(${recipe.id}); event.stopPropagation();">Delete</button>
            </div></div>`;
    }).join('');
}

// Edit recipe — inline selects for veggie/type, no prompt/confirm
function toggleEdit(recipeId) {
    const card = document.querySelector('[data-recipe-id="' + recipeId + '"]');
    const contentDiv = card.querySelector('.recipe-content');
    const categoryEls = card.querySelectorAll('.recipe-category');
    const nameEl = card.querySelector('.recipe-name');
    const ingredientsEl = card.querySelector('.recipe-ingredients');
    const editBtn = card.querySelector('.edit-btn');
    const isEditing = nameEl.getAttribute('contenteditable') === 'true';

    if (isEditing) {
        const recipe = recipes.find(r => r.id === recipeId);
        const oldType = recipe.type;
        recipe.category = Array.from(categoryEls).map(el => el.textContent.trim().toLowerCase()).filter(c => c);
        if (recipe.category.length === 0) recipe.category = ["uncategorized"];
        recipe.name = nameEl.textContent.trim();
        if (ingredientsEl) recipe.ingredients = Array.from(ingredientsEl.querySelectorAll('li')).map(li => li.textContent.trim()).filter(i => i);
        const vs = card.querySelector('.edit-veggie-select');
        const ts = card.querySelector('.edit-type-select');
        if (vs) recipe.isVeggie = vs.value === 'true';
        if (ts) recipe.type = ts.value;
        const ec = card.querySelector('.edit-inline-controls');
        if (ec) ec.remove();
        categoryEls.forEach(el => { el.setAttribute('contenteditable', 'false'); el.classList.remove('editing'); });
        nameEl.setAttribute('contenteditable', 'false');
        nameEl.classList.remove('editing');
        if (ingredientsEl) { ingredientsEl.setAttribute('contenteditable', 'false'); ingredientsEl.classList.remove('editing'); }
        contentDiv.onclick = function() { addToMenu(recipeId); };
        contentDiv.style.cursor = 'pointer';
        editBtn.textContent = 'Edit';
        editBtn.classList.remove('save-mode');
        if (oldType === 'dinner' && recipe.type !== 'dinner') selectedDinners = selectedDinners.filter(id => id !== recipeId);
        if (oldType === 'extra' && recipe.type !== 'extra') selectedExtras = selectedExtras.filter(id => id !== recipeId);
        updateFilterButtons(); renderRecipes(); renderDinners(); renderExtras(); saveToLocalStorage();
    } else {
        const recipe = recipes.find(r => r.id === recipeId);
        categoryEls.forEach(el => { el.setAttribute('contenteditable', 'true'); el.classList.add('editing'); });
        nameEl.setAttribute('contenteditable', 'true');
        nameEl.classList.add('editing');
        if (ingredientsEl) { ingredientsEl.setAttribute('contenteditable', 'true'); ingredientsEl.classList.add('editing'); }
        const controls = document.createElement('div');
        controls.className = 'edit-inline-controls';
        controls.style.cssText = 'display:flex;gap:0.5rem;margin-top:0.75rem;flex-wrap:wrap;';
        controls.innerHTML = '<select class="edit-veggie-select" style="padding:0.4rem;border:2px solid #f39c12;border-radius:6px;font-size:0.85rem;">'
            + '<option value="true"' + (recipe.isVeggie ? ' selected' : '') + '>🥬 Vegetarian</option>'
            + '<option value="false"' + (!recipe.isVeggie ? ' selected' : '') + '>🥩 Non-Vegetarian</option></select>'
            + '<select class="edit-type-select" style="padding:0.4rem;border:2px solid #f39c12;border-radius:6px;font-size:0.85rem;">'
            + '<option value="meal"' + (recipe.type === 'meal' ? ' selected' : '') + '>🍴 Meal</option>'
            + '<option value="dinner"' + (recipe.type === 'dinner' ? ' selected' : '') + '>🥙 Dinner</option>'
            + '<option value="extra"' + (recipe.type === 'extra' ? ' selected' : '') + '>🍪 Extra</option>'
            + '<option value="drink"' + (recipe.type === 'drink' ? ' selected' : '') + '>🧃 Drink</option></select>';
        contentDiv.appendChild(controls);
        contentDiv.onclick = null;
        contentDiv.style.cursor = 'default';
        nameEl.focus();
        editBtn.textContent = 'Save';
        editBtn.classList.add('save-mode');
    }
}

// Render weekly menu
function renderMenu() {
    document.getElementById("menu-days").innerHTML = days.map(day => {
        const recipe = weeklyMenu[day];
        return `<div class="day-slot ${recipe ? 'has-recipe' : ''}">
            <h3>${sanitizeHTML(day)}</h3>
            ${recipe ? `<p>${sanitizeHTML(recipe.name)}</p><button class="change-recipe-btn" onclick="changeRecipe('${sanitizeHTML(day)}'); event.stopPropagation();">Change</button>` : '<p>Click a recipe to add</p>'}
        </div>`;
    }).join('');
}

// Add to menu — modal with day buttons (no prompt)
function addToMenu(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    const btns = days.map(day => {
        const cur = weeklyMenu[day];
        const label = cur ? sanitizeHTML(day) + ' (' + sanitizeHTML(cur.name) + ')' : sanitizeHTML(day);
        return '<button onclick="selectDayForRecipe(\'' + day + '\',' + recipeId + ')" style="display:block;width:100%;padding:0.75rem;margin-bottom:0.5rem;border:2px solid #e0e0e0;border-radius:8px;background:' + (cur ? '#f0f0f0' : 'white') + ';cursor:pointer;text-align:left;font-size:0.95rem;font-family:inherit;">' + label + '</button>';
    }).join('');
    showModal('add-to-menu-modal', '<h3 style="margin-bottom:1rem;color:var(--midnight-blue);">Add "' + sanitizeHTML(recipe.name) + '" to:</h3>' + btns + '<button onclick="closeModal(\'add-to-menu-modal\')" style="margin-top:0.5rem;padding:0.6rem 1.2rem;background:#95a5a6;color:white;border:none;border-radius:6px;cursor:pointer;width:100%;">Cancel</button>');
}
function selectDayForRecipe(day, recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) { weeklyMenu[day] = recipe; renderMenu(); saveToLocalStorage(); }
    closeModal('add-to-menu-modal');
}

// Roulette — ingredient-optimized, low category penalty for diversity
function rouletteMenu() {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    weekdays.forEach(day => delete weeklyMenu[day]);
    const mealRecipes = recipes.filter(r => r.type === 'meal' && !hasCategory(r, 'takeout'));
    const takeout = recipes.find(r => hasCategory(r, 'takeout'));
    if (mealRecipes.length < weekdays.length - 1) return;

    function sharedScore(recipe, selected) {
        const ings = new Set();
        selected.forEach(r => r.ingredients.forEach(i => ings.add(i.toLowerCase())));
        return recipe.ingredients.filter(i => ings.has(i.toLowerCase())).length;
    }

    const shuffled = [...mealRecipes].sort(() => Math.random() - 0.5);
    const sel = [shuffled[0]];
    while (sel.length < weekdays.length - 1) {
        let best = null, bestScore = -Infinity;
        for (const r of mealRecipes) {
            if (sel.includes(r)) continue;
            const usedCats = new Set(sel.map(s => getCategories(s)[0]));
            const catPenalty = usedCats.has(getCategories(r)[0]) ? -2 : 0;
            const score = sharedScore(r, sel) * 2 + catPenalty + Math.random() * 1.5;
            if (score > bestScore) { bestScore = score; best = r; }
        }
        if (best) sel.push(best); else break;
    }
    if (takeout) sel.push(takeout);
    const final = sel.sort(() => Math.random() - 0.5);
    weekdays.forEach((day, i) => { if (final[i]) weeklyMenu[day] = final[i]; });
    renderMenu(); saveToLocalStorage();
}

function addWeekend() {
    const weekend = ["Saturday", "Sunday"];
    const shuffled = [...recipes.filter(r => r.type === 'meal')].sort(() => Math.random() - 0.5);
    const usedCats = new Set();
    Object.values(weeklyMenu).forEach(r => getCategories(r).forEach(c => usedCats.add(c)));
    const sel = [];
    for (const r of shuffled) { if (sel.length >= 2) break; const pc = getCategories(r)[0]; if (!usedCats.has(pc)) { sel.push(r); usedCats.add(pc); } }
    for (const r of shuffled) { if (sel.length >= 2) break; if (!sel.includes(r)) sel.push(r); }
    weekend.forEach((day, i) => { if (sel[i]) weeklyMenu[day] = sel[i]; });
    renderMenu(); saveToLocalStorage();
}

// Change recipe — modal with clickable list (no prompt)
function changeRecipe(day) {
    const available = recipes.filter(r => r.type === 'meal' || r.type === 'dinner');
    const btns = available.map(r => {
        const isCur = weeklyMenu[day] && weeklyMenu[day].id === r.id;
        return '<button onclick="selectChangeRecipe(\'' + sanitizeHTML(day) + '\',' + r.id + ')" style="display:block;width:100%;padding:0.6rem;margin-bottom:0.4rem;border:2px solid ' + (isCur ? 'var(--green-sea)' : '#e0e0e0') + ';border-radius:6px;background:' + (isCur ? '#e8f8f5' : 'white') + ';cursor:pointer;text-align:left;font-size:0.9rem;font-family:inherit;">' + sanitizeHTML(r.name) + ' <span style="color:#999;font-size:0.8rem;">(' + getCategories(r).join(', ') + ')</span></button>';
    }).join('');
    showModal('change-recipe-modal', '<h3 style="margin-bottom:1rem;color:var(--midnight-blue);">Change recipe for ' + sanitizeHTML(day) + '</h3><div style="max-height:50vh;overflow-y:auto;">' + btns + '</div><button onclick="closeModal(\'change-recipe-modal\')" style="margin-top:0.75rem;padding:0.6rem 1.2rem;background:#95a5a6;color:white;border:none;border-radius:6px;cursor:pointer;width:100%;">Cancel</button>');
}
function selectChangeRecipe(day, recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) { weeklyMenu[day] = recipe; renderMenu(); saveToLocalStorage(); }
    closeModal('change-recipe-modal');
}

// WhatsApp entry
function emailWeeklyMenu() {
    if (Object.keys(weeklyMenu).length === 0 && selectedDinners.length === 0 && selectedExtras.length === 0) {
        showModal('alert-modal', '<p style="margin-bottom:1rem;">No recipes in the weekly menu, dinner or extras selection.</p><button onclick="closeModal(\'alert-modal\')" style="padding:0.6rem 1.2rem;background:var(--belize-hole);color:white;border:none;border-radius:6px;cursor:pointer;">OK</button>');
        return;
    }
    showWhatsAppModal();
}

// Dinners & Extras
function renderDinners() {
    const el = document.getElementById("dinner-list");
    const dr = recipes.filter(r => r.type === 'dinner');
    if (!dr.length) { el.innerHTML = '<p style="color:#999;font-style:italic;font-size:0.9rem;">No dinner recipes available.</p>'; return; }
    el.innerHTML = dr.map(r => {
        const sel = selectedDinners.includes(r.id);
        return '<div class="dinner-item ' + (sel ? 'selected' : '') + '" onclick="toggleDinner(' + r.id + ')"><div class="dinner-item-name">' + sanitizeHTML(r.name) + '</div><div class="dinner-item-category">' + getCategories(r).join(', ') + '</div></div>';
    }).join('');
}
function toggleDinner(id) {
    const i = selectedDinners.indexOf(id);
    if (i > -1) selectedDinners.splice(i, 1); else selectedDinners.push(id);
    renderDinners(); saveToLocalStorage();
}
function renderExtras() {
    const el = document.getElementById("extras-list");
    const er = recipes.filter(r => r.type === 'extra');
    if (!er.length) { el.innerHTML = '<p style="color:#999;font-style:italic;font-size:0.9rem;">No extras available.</p>'; return; }
    el.innerHTML = er.map(r => {
        const sel = selectedExtras.includes(r.id);
        return '<div class="dinner-item ' + (sel ? 'selected' : '') + '" onclick="toggleExtra(' + r.id + ')"><div class="dinner-item-name">' + sanitizeHTML(r.name) + '</div><div class="dinner-item-category">' + getCategories(r).join(', ') + '</div></div>';
    }).join('');
}
function toggleExtra(id) {
    const i = selectedExtras.indexOf(id);
    if (i > -1) selectedExtras.splice(i, 1); else selectedExtras.push(id);
    renderExtras(); saveToLocalStorage();
}

// WhatsApp modals
function showWhatsAppModal() {
    showModal('whatsapp-modal', '<h3 style="margin-bottom:1rem;color:var(--midnight-blue);">Send via WhatsApp</h3><p style="color:#7f8c8d;font-size:0.9rem;margin-bottom:1.5rem;">Select contacts to send the menu</p><div style="margin-bottom:1.5rem;"><button onclick="showManageContactsModal()" style="padding:0.6rem 1.2rem;background:var(--green-sea);color:white;border:none;border-radius:6px;cursor:pointer;width:100%;">Manage Contacts</button></div><div id="contact-selection-list" style="margin-bottom:1.5rem;"></div><div style="display:flex;gap:0.5rem;justify-content:flex-end;"><button onclick="closeModal(\'whatsapp-modal\')" style="padding:0.6rem 1.2rem;background:#95a5a6;color:white;border:none;border-radius:6px;cursor:pointer;">Cancel</button><button onclick="confirmSendWhatsApp()" style="padding:0.6rem 1.2rem;background:#25D366;color:white;border:none;border-radius:6px;cursor:pointer;">Send WhatsApp</button></div>');
    renderContactSelection();
}
function showManageContactsModal() {
    showModal('manage-contacts-modal', '<h3 style="margin-bottom:1.5rem;color:var(--midnight-blue);">Manage Contacts</h3><div style="margin-bottom:1.5rem;"><input type="text" id="contact-name-input" placeholder="Name" style="width:100%;padding:0.6rem;border:2px solid #e0e0e0;border-radius:6px;margin-bottom:0.5rem;font-size:0.9rem;"><input type="tel" id="contact-phone-input" placeholder="Phone (e.g., 34612345678)" style="width:100%;padding:0.6rem;border:2px solid #e0e0e0;border-radius:6px;margin-bottom:0.5rem;font-size:0.9rem;"><button onclick="addContact()" style="padding:0.6rem 1.2rem;background:var(--green-sea);color:white;border:none;border-radius:6px;cursor:pointer;width:100%;">+ Add Contact</button></div><div id="contacts-list" style="margin-bottom:1.5rem;"></div><div style="display:flex;gap:0.5rem;justify-content:flex-end;"><button onclick="closeManageContactsModal()" style="padding:0.6rem 1.2rem;background:var(--belize-hole);color:white;border:none;border-radius:6px;cursor:pointer;">Done</button></div>', 1001);
    renderContactsList();
}
function renderContactsList() {
    const cl = document.getElementById('contacts-list');
    if (!contacts.length) { cl.innerHTML = '<p style="color:#999;font-style:italic;text-align:center;">No contacts yet.</p>'; return; }
    cl.innerHTML = contacts.map((c, i) => {
        const masked = c.phone.slice(0, 3) + '***' + c.phone.slice(-3);
        return '<div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem;border:1px solid #e0e0e0;border-radius:6px;margin-bottom:0.5rem;background:#f8f9fa;"><div><div style="font-weight:600;color:var(--midnight-blue);">' + sanitizeHTML(c.name) + '</div><div style="font-size:0.85rem;color:#7f8c8d;">' + masked + '</div></div><button onclick="deleteContact(' + i + ')" style="padding:0.4rem 0.8rem;background:var(--pomegranate);color:white;border:none;border-radius:6px;cursor:pointer;font-size:0.85rem;">Delete</button></div>';
    }).join('');
}
function renderContactSelection() {
    const sl = document.getElementById('contact-selection-list');
    if (!contacts.length) { sl.innerHTML = '<p style="color:#999;font-style:italic;text-align:center;">No contacts. Click "Manage Contacts" to add.</p>'; return; }
    sl.innerHTML = contacts.map((c, i) => {
        const sel = selectedContacts.includes(i);
        return '<div onclick="toggleContactSelection(' + i + ')" style="padding:0.75rem;border:2px solid ' + (sel ? 'var(--green-sea)' : '#e0e0e0') + ';border-radius:6px;margin-bottom:0.5rem;cursor:pointer;background:' + (sel ? 'linear-gradient(135deg,#e8f8f5 0%,#d5f4e6 100%)' : 'white') + ';transition:all 0.2s;"><div style="display:flex;align-items:center;gap:0.5rem;"><span style="font-size:1.2rem;">' + (sel ? '✓' : '○') + '</span><span style="font-weight:600;color:' + (sel ? 'var(--green-sea)' : 'var(--midnight-blue)') + ';">' + sanitizeHTML(c.name) + '</span></div></div>';
    }).join('');
}

// Contact management
function addContact() {
    const name = document.getElementById('contact-name-input').value.trim();
    const phone = document.getElementById('contact-phone-input').value.trim();
    if (!name || !phone || !isValidPhone(phone)) return;
    contacts.push({ name, phone: formatPhoneForWhatsApp(phone) });
    document.getElementById('contact-name-input').value = '';
    document.getElementById('contact-phone-input').value = '';
    renderContactsList(); saveToLocalStorage();
}
function deleteContact(index) {
    showModal('confirm-delete-contact', '<p style="margin-bottom:1rem;">Delete ' + sanitizeHTML(contacts[index].name) + '?</p><div style="display:flex;gap:0.5rem;justify-content:flex-end;"><button onclick="closeModal(\'confirm-delete-contact\')" style="padding:0.6rem 1.2rem;background:#95a5a6;color:white;border:none;border-radius:6px;cursor:pointer;">Cancel</button><button onclick="confirmDeleteContact(' + index + ')" style="padding:0.6rem 1.2rem;background:var(--pomegranate);color:white;border:none;border-radius:6px;cursor:pointer;">Delete</button></div>', 1002);
}
function confirmDeleteContact(index) {
    contacts.splice(index, 1);
    selectedContacts = selectedContacts.filter(i => i !== index).map(i => i > index ? i - 1 : i);
    renderContactsList(); saveToLocalStorage(); closeModal('confirm-delete-contact');
}
function toggleContactSelection(index) {
    const i = selectedContacts.indexOf(index);
    if (i > -1) selectedContacts.splice(i, 1); else selectedContacts.push(index);
    renderContactSelection(); saveToLocalStorage();
}
function closeManageContactsModal() { closeModal('manage-contacts-modal'); renderContactSelection(); }

// Send WhatsApp — no emojis, ingredient counts (x2), no "Enjoy" sentence
function confirmSendWhatsApp() {
    if (selectedContacts.length === 0) return;
    let menuText = "*Weekly Meal Menu*\n\n";
    let allIngredients = [];
    days.forEach(day => {
        const r = weeklyMenu[day];
        if (r) { menuText += "*" + day + ":* " + r.name + "\n"; allIngredients.push(...r.ingredients); }
    });
    if (selectedDinners.length > 0) {
        menuText += "\n*Dinner Options:*\n";
        selectedDinners.forEach(id => { const d = recipes.find(r => r.id === id); if (d) { menuText += "- " + d.name + "\n"; allIngredients.push(...d.ingredients); } });
    }
    if (selectedExtras.length > 0) {
        menuText += "\n*Extras:*\n";
        selectedExtras.forEach(id => { const e = recipes.find(r => r.id === id); if (e) { menuText += "- " + e.name + "\n"; allIngredients.push(...e.ingredients); } });
    }
    const countMap = new Map();
    allIngredients.forEach(i => { const k = i.toLowerCase(); countMap.set(k, (countMap.get(k) || 0) + 1); });
    const seen = new Map();
    allIngredients.forEach(i => { const k = i.toLowerCase(); if (!seen.has(k)) seen.set(k, i); });
    const unique = [...seen.entries()].sort((a, b) => a[0].localeCompare(b[0]));
    menuText += "\n*Shopping List:*\n" + unique.map(([k, name]) => { const c = countMap.get(k); return c > 1 ? "- " + name + " (x" + c + ")" : "- " + name; }).join("\n");
    selectedContacts.forEach((ci, i) => {
        const c = contacts[ci];
        setTimeout(() => { window.location.href = "https://wa.me/" + c.phone + "?text=" + encodeURIComponent(menuText); }, i * 1000);
    });
    closeModal('whatsapp-modal');
}

// Add new recipe — modal form (no prompt/confirm)
function addNewRecipe() {
    const existingCats = getAllCategories().join(', ');
    showModal('add-recipe-modal', '<h3 style="margin-bottom:1rem;color:var(--midnight-blue);">Add New Recipe</h3>'
        + '<input type="text" id="new-recipe-name" placeholder="Recipe name" style="width:100%;padding:0.6rem;border:2px solid #e0e0e0;border-radius:6px;margin-bottom:0.5rem;font-size:0.9rem;">'
        + '<input type="text" id="new-recipe-categories" placeholder="Categories (comma-separated)" style="width:100%;padding:0.6rem;border:2px solid #e0e0e0;border-radius:6px;margin-bottom:0.5rem;font-size:0.9rem;">'
        + '<p style="font-size:0.75rem;color:#999;margin-bottom:0.5rem;">Existing: ' + existingCats + '</p>'
        + '<textarea id="new-recipe-ingredients" placeholder="Ingredients (comma-separated)" rows="3" style="width:100%;padding:0.6rem;border:2px solid #e0e0e0;border-radius:6px;margin-bottom:0.5rem;font-size:0.9rem;font-family:inherit;resize:vertical;"></textarea>'
        + '<div style="display:flex;gap:0.5rem;margin-bottom:1rem;">'
        + '<select id="new-recipe-veggie" style="flex:1;padding:0.6rem;border:2px solid #e0e0e0;border-radius:6px;font-size:0.9rem;"><option value="false">🥩 Non-Vegetarian</option><option value="true">🥬 Vegetarian</option></select>'
        + '<select id="new-recipe-type" style="flex:1;padding:0.6rem;border:2px solid #e0e0e0;border-radius:6px;font-size:0.9rem;"><option value="meal">🍴 Meal</option><option value="dinner">🥙 Dinner</option><option value="extra">🍪 Extra</option><option value="drink">🧃 Drink</option></select>'
        + '</div>'
        + '<div style="display:flex;gap:0.5rem;justify-content:flex-end;">'
        + '<button onclick="closeModal(\'add-recipe-modal\')" style="padding:0.6rem 1.2rem;background:#95a5a6;color:white;border:none;border-radius:6px;cursor:pointer;">Cancel</button>'
        + '<button onclick="submitNewRecipe()" style="padding:0.6rem 1.2rem;background:var(--green-sea);color:white;border:none;border-radius:6px;cursor:pointer;">Add Recipe</button>'
        + '</div>');
}
function submitNewRecipe() {
    const name = document.getElementById('new-recipe-name').value.trim();
    if (!name) return;
    const cat = document.getElementById('new-recipe-categories').value.trim();
    const ingRaw = document.getElementById('new-recipe-ingredients').value.trim();
    const ingredients = ingRaw ? ingRaw.split(',').map(i => i.trim()).filter(i => i) : [];
    const isVeggie = document.getElementById('new-recipe-veggie').value === 'true';
    const type = document.getElementById('new-recipe-type').value;
    recipes.push({ id: nextId++, name, category: cat ? cat.split(',').map(c => c.trim().toLowerCase()).filter(c => c) : ["uncategorized"], ingredients, isVeggie, type });
    closeModal('add-recipe-modal');
    updateFilterButtons(); renderRecipes(); renderDinners(); renderExtras(); saveToLocalStorage();
}

// Delete recipe — modal confirmation (no confirm())
function deleteRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    showModal('confirm-delete-recipe', '<p style="margin-bottom:1rem;">Delete "' + sanitizeHTML(recipe.name) + '"?</p><div style="display:flex;gap:0.5rem;justify-content:flex-end;"><button onclick="closeModal(\'confirm-delete-recipe\')" style="padding:0.6rem 1.2rem;background:#95a5a6;color:white;border:none;border-radius:6px;cursor:pointer;">Cancel</button><button onclick="confirmDeleteRecipe(' + recipeId + ')" style="padding:0.6rem 1.2rem;background:var(--pomegranate);color:white;border:none;border-radius:6px;cursor:pointer;">Delete</button></div>');
}
function confirmDeleteRecipe(recipeId) {
    recipes = recipes.filter(r => r.id !== recipeId);
    selectedDinners = selectedDinners.filter(id => id !== recipeId);
    selectedExtras = selectedExtras.filter(id => id !== recipeId);
    closeModal('confirm-delete-recipe');
    updateFilterButtons(); renderRecipes(); renderDinners(); renderExtras(); saveToLocalStorage();
}

// Filter buttons
function updateFilterButtons() {
    const categories = getAllCategories();
    const fb = document.querySelector('.filter-buttons');
    fb.innerHTML = '<div class="filter-group"><label for="category-select">Category</label><select id="category-select" class="filter-select"><option value="all">All Categories</option>'
        + categories.map(c => '<option value="' + sanitizeHTML(c) + '"' + (currentFilter.category === c ? ' selected' : '') + '>' + sanitizeHTML(c).charAt(0).toUpperCase() + sanitizeHTML(c).slice(1) + '</option>').join('')
        + '</select></div>'
        + '<div class="filter-group"><label for="ingredient-filter">Ingredient</label><input type="text" id="ingredient-filter" placeholder="Search by ingredient..." value="' + sanitizeHTML(currentFilter.ingredient) + '" class="ingredient-input"></div>'
        + '<div class="filter-group"><label for="diet-select">Diet</label><select id="diet-select" class="filter-select"><option value="all"' + (currentFilter.veggie === 'all' ? ' selected' : '') + '>All</option><option value="veggie"' + (currentFilter.veggie === 'veggie' ? ' selected' : '') + '>🥬 Vegetarian</option><option value="non-veggie"' + (currentFilter.veggie === 'non-veggie' ? ' selected' : '') + '>🥩 Non-Vegetarian</option></select></div>'
        + '<div class="filter-group"><label for="type-select">Type</label><select id="type-select" class="filter-select"><option value="all"' + (currentFilter.type === 'all' ? ' selected' : '') + '>All Types</option><option value="meal"' + (currentFilter.type === 'meal' ? ' selected' : '') + '>🍴 Meals</option><option value="drink"' + (currentFilter.type === 'drink' ? ' selected' : '') + '>🧃 Drinks</option><option value="dinner"' + (currentFilter.type === 'dinner' ? ' selected' : '') + '>🥙 Dinners</option><option value="extra"' + (currentFilter.type === 'extra' ? ' selected' : '') + '>🍪 Extras</option></select></div>';
    document.getElementById('category-select').addEventListener('change', e => { currentFilter.category = e.target.value; renderRecipes(); });
    document.getElementById('ingredient-filter').addEventListener('input', e => { currentFilter.ingredient = e.target.value; renderRecipes(); });
    document.getElementById('diet-select').addEventListener('change', e => { currentFilter.veggie = e.target.value; renderRecipes(); });
    document.getElementById('type-select').addEventListener('change', e => { currentFilter.type = e.target.value; renderRecipes(); });
}

// Init
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
