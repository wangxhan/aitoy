const TOYS = [
  {
    id: "plush-star",
    name: "星灵毛绒伙伴",
    category: "毛绒",
    basePrice: 299,
    emoji: "🧸",
    desc: "柔软亲肤短绒，内置轻量 AI 语音模组，支持自定义唤醒词与性格设定。",
    tags: ["语音互动", "儿童友好"],
    colors: ["#FFB4A2", "#CDB4DB", "#BDE0FE", "#FFC8DD"],
    leadDays: 7
  },
  {
    id: "fig-cyber",
    name: "赛博手办 Pro",
    category: "手办",
    basePrice: 459,
    emoji: "🤖",
    desc: "高精度 3D 打印 + 手工涂装，可上传参考图还原角色细节与配色。",
    tags: ["收藏级", "限量涂装"],
    colors: ["#2D3142", "#EF8354", "#4F5D75", "#FFFFFF"],
    leadDays: 14
  },
  {
    id: "robot-mini",
    name: "迷你智宠机器人",
    category: "机器人",
    basePrice: 689,
    emoji: "🦾",
    desc: "桌面级 AI 陪伴机器人，表情屏、动作模块均可按你的形象定制。",
    tags: ["AI 表情", "可编程"],
    colors: ["#06D6A0", "#118AB2", "#FFD166", "#EF476F"],
    leadDays: 21
  },
  {
    id: "plush-pet",
    name: "萌宠复刻毛绒",
    category: "毛绒",
    basePrice: 359,
    emoji: "🐱",
    desc: "上传宠物照片，设计师 1:1 还原毛色、斑纹与神态，做成专属玩偶。",
    tags: ["宠物定制", "热门"],
    colors: ["#F4A261", "#E9C46A", "#264653", "#E76F51"],
    leadDays: 10
  },
  {
    id: "fig-anime",
    name: "二次元角色立像",
    category: "手办",
    basePrice: 529,
    emoji: "✨",
    desc: "从插画到实体，支持 Q 版 / 写实两种比例，附展示底座。",
    tags: ["二次元", "礼品首选"],
    colors: ["#FF6B9D", "#C44569", "#F8B500", "#574B90"],
    leadDays: 18
  },
  {
    id: "robot-edu",
    name: "启蒙编程机器人",
    category: "机器人",
    basePrice: 799,
    emoji: "🎓",
    desc: "儿童 STEM 启蒙款，外壳图案、灯光配色、语音包均可个性化。",
    tags: ["教育", "亲子"],
    colors: ["#FF595E", "#FFCA3A", "#8AC926", "#1982C4"],
    leadDays: 16
  },
  {
    id: "plush-couple",
    name: "情侣双人偶",
    category: "毛绒",
    basePrice: 499,
    emoji: "💑",
    desc: "一对定制，可分别上传两人照片，设计师打造专属情侣形象。",
    tags: ["情侣", "礼盒装"],
    colors: ["#FFAFCC", "#BDB2FF", "#FFC6FF", "#CAFFBF"],
    leadDays: 12
  },
  {
    id: "fig-vinyl",
    name: "潮玩盲盒形象",
    category: "手办",
    basePrice: 389,
    emoji: "🎨",
    desc: "设计师将你的原创 IP 或照片转化为 vinyl 潮玩造型，适合品牌周边。",
    tags: ["IP 定制", "潮玩"],
    colors: ["#00F5D4", "#9B5DE5", "#F15BB5", "#FEE440"],
    leadDays: 15
  }
];

const CUSTOM_OPTIONS = {
  imageUpload: { label: "参考图上传", price: 0 },
  premiumPaint: { label: "大师级涂装", price: 120 },
  voicePack: { label: "专属语音包", price: 80 },
  giftBox: { label: "礼盒包装", price: 45 },
  rush: { label: "加急制作 (缩短 5 天)", price: 150 }
};

const ORDER_STAGES = [
  { key: "submitted", label: "已提交定制", icon: "📝" },
  { key: "designing", label: "设计师沟通中", icon: "🎨" },
  { key: "confirmed", label: "样稿已确认", icon: "✅" },
  { key: "paid", label: "已付款", icon: "💳" },
  { key: "production", label: "生产中", icon: "🏭" },
  { key: "shipped", label: "已发货", icon: "📦" },
  { key: "delivered", label: "已交付", icon: "🎉" }
];

function getToyById(id) {
  return TOYS.find(t => t.id === id);
}

function formatPrice(n) {
  return "¥" + Number(n).toLocaleString("zh-CN");
}
