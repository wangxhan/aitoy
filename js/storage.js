const STORAGE_KEY = "neotoy_orders";
const DRAFT_KEY = "neotoy_draft";

function loadOrders() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveOrders(orders) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

function loadDraft() {
  try {
    return JSON.parse(localStorage.getItem(DRAFT_KEY) || "null");
  } catch {
    return null;
  }
}

function saveDraft(draft) {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
}

function clearDraft() {
  localStorage.removeItem(DRAFT_KEY);
}

function generateOrderId() {
  const d = new Date();
  const pad = n => String(n).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `NT${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}${rand}`;
}

function createOrderFromDraft(draft) {
  const toy = getToyById(draft.toyId);
  if (!toy) return null;

  let extras = 0;
  (draft.options || []).forEach(opt => {
    if (CUSTOM_OPTIONS[opt]) extras += CUSTOM_OPTIONS[opt].price;
  });

  return {
    id: generateOrderId(),
    createdAt: new Date().toISOString(),
    status: "submitted",
    toyId: draft.toyId,
    toyName: toy.name,
    toyEmoji: toy.emoji,
    color: draft.color,
    options: draft.options || [],
    images: draft.images || [],
    note: draft.note || "",
    customer: draft.customer || {},
    designPreview: null,
    designNote: "",
    pricing: {
      base: toy.basePrice,
      extras,
      total: toy.basePrice + extras
    },
    shipping: null,
    timeline: [{ stage: "submitted", at: new Date().toISOString() }]
  };
}

function updateOrder(orderId, patch) {
  const orders = loadOrders();
  const idx = orders.findIndex(o => o.id === orderId);
  if (idx === -1) return null;
  orders[idx] = { ...orders[idx], ...patch };
  saveOrders(orders);
  return orders[idx];
}

function advanceOrder(orderId, stage) {
  const orders = loadOrders();
  const order = orders.find(o => o.id === orderId);
  if (!order) return null;
  order.status = stage;
  order.timeline.push({ stage, at: new Date().toISOString() });
  saveOrders(orders);
  return order;
}

function getOrder(orderId) {
  return loadOrders().find(o => o.id === orderId);
}
