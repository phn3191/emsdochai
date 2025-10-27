// Staff data
// --- Firebase cấu hình ---
const firebaseConfig = {
  apiKey: "AIzaSyAYHf7U_uQSjKkbWLq8eGUPQla6Xr9b4q4",
  authDomain: "dochai-eeaf8.firebaseapp.com",
  projectId: "dochai-eeaf8",
  storageBucket: "dochai-eeaf8.firebasestorage.app",
  messagingSenderId: "133573870183",
  appId: "1:133573870183:web:e62b26006e93109e0b4ac2",
  measurementId: "G-C86K29B74Q"
};

// --- Khởi tạo Firebase & Firestore ---
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


const staff = {
  "Team 1": [
    { name: "Cao Phước Hải", budget: 420000 },
    { name: "Lê Cao Hoàng Nhất Đăng", budget: 420000 },
    { name: "Nguyễn Phi Hùng", budget: 440000 },
    { name: "Nguyễn Phước Ba", budget: 420000 }
  ],
  "Team 2": [
    { name: "Đỗ Tấn Lộc", budget: 440000 },
    { name: "Hứa Minh Tâm", budget: 420000 },
    { name: "Lê Hoài Nam", budget: 440000 },
    { name: "Lê Việt Luân", budget: 420000 },
    { name: "Nguyễn Trọng Trường An", budget: 440000 },
    { name: "Nguyễn Trung Huy", budget: 440000 },
    { name: "Nguyễn Vũ Thanh Phong", budget: 440000 },
    { name: "Vũ Trấn An", budget: 420000 }
  ],
  "Team 3": [
    { name: "Danh Song", budget: 460000 },
    { name: "Hồ Văn Huynh", budget: 440000 },
    { name: "Nguyễn Đức Minh", budget: 400000 },
    { name: "Nguyễn Quốc Hào", budget: 460000 },
    { name: "Nguyễn Võ Thành Nhân", budget: 460000 },
    { name: "Phạm Bá Luân", budget: 100000 }
  ],
  "Team 4": [
    { name: "Bùi Nhựt Thắng", budget: 460000 },
    { name: "Đỗ Ngọc Lợi", budget: 299000 },
    { name: "Phạm Nguyễn Khánh Toàn", budget: 460000 },
    { name: "Phan Thanh Nghị", budget: 440000 },
    { name: "Trà Nguyễn Tuấn Anh", budget: 440000 },
    { name: "Trần Minh Thắng", budget: 420000 },
    { name: "Trần Quang Anh", budget: 460000 }
  ],
  "Team 5": [
    { name: "Nguyễn Lê Thành Đạt", budget: 286000 },
    { name: "Trần Thị Thảo Phương", budget: 286000 },
    { name: "Trương Ngọc Lễ", budget: 440000 },
    { name: "Trương Thanh Hùng", budget: 440000 }
  ]
};



// Current employee budget info
let currentEmployee = {
  team: null,
  name: null,
  originalBudget: 0,
  customBudget: null
};

// Product data
const products = [
  { ma_sp: "04GB10", ten_sp: "STTT Tổ Yến Vinamilk Green Farm 180ml (24H/T)", gia_le: 11400, gia_si: 45600 },
  { ma_sp: "04GO10", ten_sp: "STTT NC VNM Green Farm Organic 180ml", gia_le: 9950, gia_si: 39800 },
  { ma_sp: "04EA12", ten_sp: "STTT hương dâu VNM 180ml", gia_le: 6950, gia_si: 27800 },
  { ma_sp: "04EB10", ten_sp: "STTT Giảm béo Chuối VNM 180ml", gia_le: 6950, gia_si: 27800 },
  { ma_sp: "04EC12", ten_sp: "STTT sôcôla VNM 180ml", gia_le: 6950, gia_si: 27800 },
  { ma_sp: "04ED12", ten_sp: "STTT có đường VNM 180ml", gia_le: 6950, gia_si: 27800 },
  { ma_sp: "04ED20", ten_sp: "STTT có đường VNM 180ml (CB)", gia_le: 6950, gia_si: 27800 },
  { ma_sp: "04EI12", ten_sp: "STTT ít đường VNM 180ml", gia_le: 6950, gia_si: 27800 },
  { ma_sp: "04ET12", ten_sp: "STTT không đường VNM 180ml", gia_le: 6950, gia_si: 27800 },
  { ma_sp: "04ET62", ten_sp: "STTT ít béo không đường VNM 180ml", gia_le: 6950, gia_si: 27800 },
  { ma_sp: "04EU10", ten_sp: "STTT Dừa VNM 180ml", gia_le: 6950, gia_si: 27800 },
  { ma_sp: "04GD13", ten_sp: "STTT CĐ Vinamilk Green Farm 180ml", gia_le: 7850, gia_si: 31400 },
  { ma_sp: "04GI13", ten_sp: "STTT RIĐ Vinamilk Green Farm 180ml", gia_le: 7850, gia_si: 31400 },
  { ma_sp: "04GT13", ten_sp: "STNC TT Vinamilk Green Farm 180ml", gia_le: 7850, gia_si: 31400 },
  { ma_sp: "04AE12", ten_sp: "STTT NC VNM Green Farm A2 180ml", gia_le: 10150, gia_si: 40600 },
  { ma_sp: "05AN23", ten_sp: "Sữa hạt 9 loại hạt Vinamilk 180ml", gia_le: 9250, gia_si: 37000 },
  { ma_sp: "05AN30", ten_sp: "Sữa hạt 9 loại hạt không đường VNM 180ml", gia_le: 9250, gia_si: 37000 },
  { ma_sp: "07TR33", ten_sp: "SCA có đường VNM 100g", gia_le: 5150, gia_si: 20600 },
  { ma_sp: "07UA11", ten_sp: "SCU men sống hương dứa - Vinamilk Probi 65ml", gia_le: 3850, gia_si: 15400 },
  { ma_sp: "07UC11", ten_sp: "SCU men sống hương cam - Vinamilk Probi 65ml", gia_le: 4300, gia_si: 17200 },
  { ma_sp: "07UD11", ten_sp: "SCU men sống hương dâu - Vinamilk Probi 65ml", gia_le: 3850, gia_si: 15400 },
  { ma_sp: "07UG11", ten_sp: "SCU men sống dưa gang - Vinamilk Probi 65ml", gia_le: 3850, gia_si: 15400 },
  { ma_sp: "07UI11", ten_sp: "SCU men sống ít đường - Vinamilk Probi 65ml", gia_le: 3850, gia_si: 15400 },
  { ma_sp: "07UI31", ten_sp: "SCU men sống ít đường - Vinamilk Probi 130ml", gia_le: 6900, gia_si: 27600 },
  { ma_sp: "07UL31", ten_sp: "SCU men sống vị lựu đỏ - Vinamilk Probi 130ml", gia_le: 7500, gia_si: 30000 },
  { ma_sp: "07UM31", ten_sp: "SCU men sống mật ong nghệ - Vinamilk Probi 130ml", gia_le: 7500, gia_si: 30000 },
  { ma_sp: "07UQ11", ten_sp: "SCU men sống việt quất - Vinamilk Probi 65ml", gia_le: 3850, gia_si: 15400 },
  { ma_sp: "07UQ31", ten_sp: "SCU men sống việt quất - Vinamilk Probi 130ml", gia_le: 6900, gia_si: 27600 },
  { ma_sp: "07UR31", ten_sp: "SCU men sống - Vinamilk Probi 130ml", gia_le: 6900, gia_si: 27600 },
  { ma_sp: "07UT30", ten_sp: "SCU MS không đường VNM Probi 130ml", gia_le: 6900, gia_si: 27600 },
  { ma_sp: "06QM10", ten_sp: "STT Milo hộp 180ml", gia_le: 5250, gia_si: 21000 },
  { ma_sp: "01YM52", ten_sp: "YT Flex 385g lon", gia_le: 58500, gia_si: 234000 },
  { ma_sp: "01YM53", ten_sp: "YT Flex 850g lon", gia_le: 127500, gia_si: 510000 },
  { ma_sp: "01YO52", ten_sp: "YT Grow Plus + xanh 830g", gia_le: 116000, gia_si: 464000 },
  { ma_sp: "01YO53", ten_sp: "YT Grow Plus + xanh 1500g", gia_le: 206500, gia_si: 826000 },
  { ma_sp: "02CK20", ten_sp: "Cốm Giấc Ngon Dielac Grow 150g", gia_le: 23500, gia_si: 94000 }
];

// Store registrations in memory
let registrations = [];

// Format number to Vietnamese currency format
function formatCurrency(amount) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
// ==================== HÀM FIREBASE MỚI ====================

// Submit registration (với Firestore)
async function submitRegistration() {
  const teamSelect = document.getElementById('teamSelect').value;
  const employeeSelect = document.getElementById('employeeSelect').value;

  if (!teamSelect) return alert('Vui lòng chọn nhóm!');
  if (!employeeSelect) return alert('Vui lòng chọn nhân viên!');

  // Thu thập sản phẩm đã chọn
  const selectedProducts = [];
  products.forEach((product, index) => {
    const qtyLe = parseInt(document.getElementById(`qty_le_${index}`).value) || 0;
    const qtyLoc = parseInt(document.getElementById(`qty_loc_${index}`).value) || 0;

    if (qtyLe > 0 || qtyLoc > 0) {
      selectedProducts.push({
        ma_sp: product.ma_sp,
        ten_sp: product.ten_sp,
        sl_le: qtyLe,
        sl_loc: qtyLoc,
        gia_le: product.gia_le,
        gia_si: product.gia_si,
        thanh_tien: (qtyLe * product.gia_le) + (qtyLoc * product.gia_si)
      });
    }
  });

  if (selectedProducts.length === 0)
    return alert('Vui lòng chọn ít nhất một sản phẩm!');

  const totalAmount = selectedProducts.reduce((sum, sp) => sum + sp.thanh_tien, 0);
  const allowedBudget = currentEmployee.customBudget || currentEmployee.originalBudget;
  const remaining = allowedBudget - totalAmount;

  if (remaining < 0)
    return alert('Tổng tiền vượt quá ngân sách cho phép!');

  try {
    // 🔍 Kiểm tra nhân viên đã đăng ký chưa
    const querySnapshot = await db.collection("dangky")
      .where("tenNhanVien", "==", currentEmployee.name)
      .get();

    if (!querySnapshot.empty) {
      alert("❌ Nhân viên này đã đăng ký rồi!");
      return;
    }

    // ✅ Lưu vào Firestore
    await db.collection("dangky").add({
      team: currentEmployee.team,
      tenNhanVien: currentEmployee.name,
      allowedBudget: allowedBudget,
      sanPham: selectedProducts,
      tong_tien: totalAmount,
      remaining: remaining,
      ngay_dang_ky: new Date().toISOString()
    });

    alert("✅ Đăng ký thành công!");
    // Reset form
    document.getElementById('teamSelect').value = '';
    document.getElementById('employeeSelect').innerHTML = '<option value="">-- Chọn nhân viên --</option>';
    document.getElementById('employeeSelect').disabled = true;
    document.getElementById('budgetSection').style.display = 'none';
    currentEmployee = { team: null, name: null, originalBudget: 0, customBudget: null };
    products.forEach((_, index) => {
      document.getElementById(`qty_le_${index}`).value = '0';
      document.getElementById(`qty_loc_${index}`).value = '0';
    });
    calculateTotal();

  } catch (error) {
    console.error("Lỗi khi lưu dữ liệu:", error);
    alert("❌ Không thể kết nối đến Firestore!");
  }
}


// Load employees based on selected team
function loadEmployees() {
  const teamSelect = document.getElementById('teamSelect');
  const employeeSelect = document.getElementById('employeeSelect');
  const budgetSection = document.getElementById('budgetSection');
  
  const selectedTeam = teamSelect.value;
  
  // Reset employee dropdown
  employeeSelect.innerHTML = '<option value="">-- Chọn nhân viên --</option>';
  employeeSelect.disabled = true;
  budgetSection.style.display = 'none';
  
  if (selectedTeam && staff[selectedTeam]) {
    // Populate employee dropdown
    staff[selectedTeam].forEach(employee => {
      const option = document.createElement('option');
      option.value = employee.name;
      option.setAttribute('data-budget', employee.budget);
      option.textContent = employee.name;
      employeeSelect.appendChild(option);
    });
    employeeSelect.disabled = false;
  }
  
  // Reset current employee
  currentEmployee = {
    team: null,
    name: null,
    originalBudget: 0,
    customBudget: null
  };
  
  updateBudgetDisplay();
}

// Load employee budget information
function loadEmployeeBudget() {
  const teamSelect = document.getElementById('teamSelect');
  const employeeSelect = document.getElementById('employeeSelect');
  const budgetSection = document.getElementById('budgetSection');
  
  const selectedTeam = teamSelect.value;
  const selectedEmployee = employeeSelect.value;
  
  if (selectedTeam && selectedEmployee) {
    const employee = staff[selectedTeam].find(e => e.name === selectedEmployee);
    
    if (employee) {
      currentEmployee.team = selectedTeam;
      currentEmployee.name = employee.name;
      currentEmployee.originalBudget = employee.budget;
      currentEmployee.customBudget = null;
      
      // Reset custom budget
      document.getElementById('customizeBudget').checked = false;
      document.getElementById('customBudgetInput').style.display = 'none';
      document.getElementById('customBudgetAmount').value = employee.budget;
      
      budgetSection.style.display = 'block';
      updateBudgetDisplay();
    }
  } else {
    budgetSection.style.display = 'none';
    currentEmployee = {
      team: null,
      name: null,
      originalBudget: 0,
      customBudget: null
    };
  }
}

// Toggle custom budget input
function toggleCustomBudget() {
  const checkbox = document.getElementById('customizeBudget');
  const customInput = document.getElementById('customBudgetInput');
  
  // if (checkbox.checked) {
  //   customInput.style.display = 'block';
  //   document.getElementById('customBudgetAmount').value = currentEmployee.originalBudget;
  // } else {
  //   customInput.style.display = 'none';
  //   currentEmployee.customBudget = null;
  // }
  
  updateBudgetDisplay();
}

// Update budget display
function updateBudgetDisplay() {
  const customizeBudget = document.getElementById('customizeBudget').checked;
  const customAmount = parseInt(document.getElementById('customBudgetAmount').value) || 0;
  
  if (customizeBudget && customAmount > 0) {
    currentEmployee.customBudget = customAmount;
  } else {
    currentEmployee.customBudget = null;
  }
  
  const allowedBudget = currentEmployee.customBudget || currentEmployee.originalBudget;
  const totalRegistration = calculateTotalAmount();
  const remaining = allowedBudget - totalRegistration;
  
  // Update display
  document.getElementById('allowedBudget').textContent = formatCurrency(allowedBudget) + ' đ';
  document.getElementById('totalRegistration').textContent = formatCurrency(totalRegistration) + ' đ';
  document.getElementById('remainingBudget').textContent = formatCurrency(remaining) + ' đ';
  
  // Update balance styling
  const balanceItem = document.querySelector('.balance-item');
  const balanceValue = document.getElementById('remainingBudget');
  
  balanceItem.classList.remove('warning', 'danger');
  balanceValue.classList.remove('positive', 'zero', 'negative');
  
  if (remaining > 0) {
    balanceValue.classList.add('positive');
  } else if (remaining === 0) {
    balanceItem.classList.add('warning');
    balanceValue.classList.add('zero');
  } else {
    balanceItem.classList.add('danger');
    balanceValue.classList.add('negative');
  }
  
  // Update progress bar
  const percentage = allowedBudget > 0 ? (totalRegistration / allowedBudget) * 100 : 0;
  const progressFill = document.getElementById('budgetProgress');
  const progressText = document.getElementById('budgetProgressText');
  
  progressFill.style.width = Math.min(percentage, 100) + '%';
  progressText.textContent = Math.round(percentage) + '%';
  
  progressFill.classList.remove('warning', 'danger');
  if (percentage >= 100) {
    progressFill.classList.add('danger');
  } else if (percentage >= 80) {
    progressFill.classList.add('warning');
  }
  
  // Show/hide warning
  const warningDiv = document.getElementById('budgetWarning');
  const submitBtn = document.querySelector('.btn-primary');
  
  if (remaining < 0) {
    warningDiv.style.display = 'block';
    submitBtn.disabled = true;
  } else {
    warningDiv.style.display = 'none';
    submitBtn.disabled = false;
  }
}

// Initialize product table
function initializeProductTable() {
  const tbody = document.getElementById('productTableBody');
  tbody.innerHTML = '';
  
  products.forEach((product, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.ma_sp}</td>
      <td>${product.ten_sp}</td>
      <td>${formatCurrency(product.gia_le)}</td>
      <td>${formatCurrency(product.gia_si)}</td>
      <td><input type="number" id="qty_le_${index}" min="0" value="0" onchange="calculateTotal()"></td>
      <td><input type="number" id="qty_loc_${index}" min="0" value="0" onchange="calculateTotal()"></td>
      <td><span id="subtotal_${index}">0</span> VNĐ</td>
    `;
    tbody.appendChild(row);
  });
}

// Calculate total amount (returns the value)
function calculateTotalAmount() {
  let total = 0;
  
  products.forEach((product, index) => {
    const qtyLe = parseInt(document.getElementById(`qty_le_${index}`).value) || 0;
    const qtyLoc = parseInt(document.getElementById(`qty_loc_${index}`).value) || 0;
    const subtotal = (qtyLe * product.gia_le) + (qtyLoc * product.gia_si);
    total += subtotal;
  });
  
  return total;
}

// Calculate total amount and update display
function calculateTotal() {
  let total = 0;
  
  products.forEach((product, index) => {
    const qtyLe = parseInt(document.getElementById(`qty_le_${index}`).value) || 0;
    const qtyLoc = parseInt(document.getElementById(`qty_loc_${index}`).value) || 0;
    const subtotal = (qtyLe * product.gia_le) + (qtyLoc * product.gia_si);
    
    const subtotalElement = document.getElementById(`subtotal_${index}`);
    subtotalElement.textContent = formatCurrency(subtotal);
    
    // Highlight row if product is selected
    const row = subtotalElement.closest('tr');
    if (qtyLe > 0 || qtyLoc > 0) {
      row.classList.add('product-row-selected');
    } else {
      row.classList.remove('product-row-selected');
    }
    
    // Highlight inputs
    const inputLe = document.getElementById(`qty_le_${index}`);
    const inputLoc = document.getElementById(`qty_loc_${index}`);
    
    if (qtyLe > 0) {
      inputLe.classList.add('has-value');
    } else {
      inputLe.classList.remove('has-value');
    }
    
    if (qtyLoc > 0) {
      inputLoc.classList.add('has-value');
    } else {
      inputLoc.classList.remove('has-value');
    }
    
    total += subtotal;
  });
  
  document.getElementById('totalAmount').textContent = formatCurrency(total) + ' đ';
  
  // Update budget display if employee is selected
  if (currentEmployee.name) {
    updateBudgetDisplay();
  }
}

// Submit registration (với Firestore)
async function submitRegistration() {
  const teamSelect = document.getElementById('teamSelect').value;
  const employeeSelect = document.getElementById('employeeSelect').value;

  if (!teamSelect) return alert('Vui lòng chọn nhóm!');
  if (!employeeSelect) return alert('Vui lòng chọn nhân viên!');

  // Thu thập sản phẩm đã chọn
  const selectedProducts = [];
  products.forEach((product, index) => {
    const qtyLe = parseInt(document.getElementById(`qty_le_${index}`).value) || 0;
    const qtyLoc = parseInt(document.getElementById(`qty_loc_${index}`).value) || 0;

    if (qtyLe > 0 || qtyLoc > 0) {
      selectedProducts.push({
        ma_sp: product.ma_sp,
        ten_sp: product.ten_sp,
        sl_le: qtyLe,
        sl_loc: qtyLoc,
        gia_le: product.gia_le,
        gia_si: product.gia_si,
        thanh_tien: (qtyLe * product.gia_le) + (qtyLoc * product.gia_si)
      });
    }
  });

  if (selectedProducts.length === 0)
    return alert('Vui lòng chọn ít nhất một sản phẩm!');

  const totalAmount = selectedProducts.reduce((sum, sp) => sum + sp.thanh_tien, 0);
  const allowedBudget = currentEmployee.customBudget || currentEmployee.originalBudget;
  const remaining = allowedBudget - totalAmount;

  if (remaining < 0)
    return alert('Tổng tiền vượt quá ngân sách cho phép!');

  try {
    // 🔍 Kiểm tra nhân viên đã đăng ký chưa
    const querySnapshot = await db.collection("dangky")
      .where("tenNhanVien", "==", currentEmployee.name)
      .get();

    if (!querySnapshot.empty) {
      alert("❌ Nhân viên này đã đăng ký rồi!");
      return;
    }

    // ✅ Lưu vào Firestore
    await db.collection("dangky").add({
      team: currentEmployee.team,
      tenNhanVien: currentEmployee.name,
      allowedBudget: allowedBudget,
      sanPham: selectedProducts,
      tong_tien: totalAmount,
      remaining: remaining,
      ngay_dang_ky: new Date().toISOString()
    });

    alert("✅ Đăng ký thành công!");

    // Reset giao diện
    document.getElementById('teamSelect').value = '';
    document.getElementById('employeeSelect').innerHTML = '<option value="">-- Chọn nhân viên --</option>';
    document.getElementById('employeeSelect').disabled = true;
    document.getElementById('budgetSection').style.display = 'none';
    currentEmployee = { team: null, name: null, originalBudget: 0, customBudget: null };
    products.forEach((_, index) => {
      document.getElementById(`qty_le_${index}`).value = '0';
      document.getElementById(`qty_loc_${index}`).value = '0';
    });
    calculateTotal();

  } catch (error) {
    console.error("Lỗi khi lưu dữ liệu:", error);
    alert("❌ Không thể kết nối đến Firestore!");
  }
}



// Show/hide success modal
function showSuccessModal() {
  document.getElementById('successModal').classList.add('show');
}

function hideSuccessModal() {
  document.getElementById('successModal').classList.remove('show');
}

// Show page
function showPage(pageName) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show selected page
  if (pageName === 'register') {
    document.getElementById('registerPage').classList.add('active');
  } else if (pageName === 'summary') {
    document.getElementById('summaryPage').classList.add('active');
    renderSummary();
  }
  
  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  if (pageName === 'register') {
    document.querySelectorAll('.nav-link')[0].classList.add('active');
  } else {
    document.querySelectorAll('.nav-link')[1].classList.add('active');
  }
}

// Show tab
function showTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Show selected tab
  if (tabName === 'byEmployee') {
    document.getElementById('byEmployeeTab').classList.add('active');
  } else if (tabName === 'byProduct') {
    document.getElementById('byProductTab').classList.add('active');
  } else if (tabName === 'byTeam') {
    document.getElementById('byTeamTab').classList.add('active');
  }
  
  // Update tab links
  document.querySelectorAll('.tab-link').forEach(link => {
    link.classList.remove('active');
  });
  
  if (tabName === 'byEmployee') {
    document.querySelectorAll('.tab-link')[0].classList.add('active');
  } else if (tabName === 'byProduct') {
    document.querySelectorAll('.tab-link')[1].classList.add('active');
  } else if (tabName === 'byTeam') {
    document.querySelectorAll('.tab-link')[2].classList.add('active');
  }
}

// Render summary
function renderSummary() {
  renderEmployeeSummary();
  renderProductSummary();
  renderTeamSummary();
}

// Render employee summary
function renderEmployeeSummary() {
  const tbody = document.getElementById('employeeSummaryBody');
  tbody.innerHTML = '';
  
  if (registrations.length === 0) {
    tbody.innerHTML = '<tr><td colspan="9" class="empty-state"><div class="empty-state-icon">📋</div><div>Chưa có đăng ký nào</div></td></tr>';
    document.getElementById('totalByEmployee').textContent = '0 đ';
    return;
  }
  
  let stt = 1;
  let grandTotal = 0;
  
  registrations.forEach(reg => {
    reg.sanPham.forEach(sp => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${stt++}</td>
        <td>${reg.team}</td>
        <td>${reg.tenNhanVien}</td>
        <td>${formatCurrency(reg.allowedBudget)} đ</td>
        <td>${sp.ma_sp}</td>
        <td>${sp.ten_sp}</td>
        <td>${sp.sl_le}</td>
        <td>${sp.sl_loc}</td>
        <td>${formatCurrency(sp.thanh_tien)} đ</td>
      `;
      tbody.appendChild(row);
      grandTotal += sp.thanh_tien;
    });
  });
  
  document.getElementById('totalByEmployee').textContent = formatCurrency(grandTotal) + ' đ';
}

// Render product summary
function renderProductSummary() {
  const tbody = document.getElementById('productSummaryBody');
  tbody.innerHTML = '';
  
  if (registrations.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="empty-state"><div class="empty-state-icon">📦</div><div>Chưa có đăng ký nào</div></td></tr>';
    document.getElementById('totalByProduct').textContent = '0 đ';
    return;
  }
  
  // Aggregate by product
  const productSummary = {};
  
  registrations.forEach(reg => {
    reg.sanPham.forEach(sp => {
      if (!productSummary[sp.ma_sp]) {
        productSummary[sp.ma_sp] = {
          ma_sp: sp.ma_sp,
          ten_sp: sp.ten_sp,
          total_le: 0,
          total_loc: 0,
          total_amount: 0
        };
      }
      productSummary[sp.ma_sp].total_le += sp.sl_le;
      productSummary[sp.ma_sp].total_loc += sp.sl_loc;
      productSummary[sp.ma_sp].total_amount += sp.thanh_tien;
    });
  });
  
  let grandTotal = 0;
  
  Object.values(productSummary).forEach(ps => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${ps.ma_sp}</td>
      <td>${ps.ten_sp}</td>
      <td>${ps.total_le}</td>
      <td>${ps.total_loc}</td>
      <td>${formatCurrency(ps.total_amount)} đ</td>
    `;
    tbody.appendChild(row);
    grandTotal += ps.total_amount;
  });
  
  document.getElementById('totalByProduct').textContent = formatCurrency(grandTotal) + ' đ';
}

// Render team summary
function renderTeamSummary() {
  const tbody = document.getElementById('teamSummaryBody');
  tbody.innerHTML = '';
  
  if (registrations.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="empty-state"><div class="empty-state-icon">👥</div><div>Chưa có đăng ký nào</div></td></tr>';
    document.getElementById('totalSpentByTeam').textContent = '0 đ';
    document.getElementById('totalRemainingByTeam').textContent = '0 đ';
    return;
  }
  
  // Aggregate by team
  const teamSummary = {};
  
  registrations.forEach(reg => {
    if (!teamSummary[reg.team]) {
      teamSummary[reg.team] = {
        team: reg.team,
        count: 0,
        totalBudget: 0,
        totalSpent: 0
      };
    }
    teamSummary[reg.team].count += 1;
    teamSummary[reg.team].totalBudget += reg.allowedBudget;
    teamSummary[reg.team].totalSpent += reg.tong_tien;
  });
  
  let grandTotalSpent = 0;
  let grandTotalRemaining = 0;
  
  Object.values(teamSummary).forEach(ts => {
    const remaining = ts.totalBudget - ts.totalSpent;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${ts.team}</td>
      <td>${ts.count}</td>
      <td>${formatCurrency(ts.totalBudget)} đ</td>
      <td>${formatCurrency(ts.totalSpent)} đ</td>
      <td style="color: ${remaining >= 0 ? 'var(--color-success)' : 'var(--color-error)'}; font-weight: var(--font-weight-bold);">${formatCurrency(remaining)} đ</td>
    `;
    tbody.appendChild(row);
    grandTotalSpent += ts.totalSpent;
    grandTotalRemaining += remaining;
  });
  
  document.getElementById('totalSpentByTeam').textContent = formatCurrency(grandTotalSpent) + ' đ';
  document.getElementById('totalRemainingByTeam').textContent = formatCurrency(grandTotalRemaining) + ' đ';
}

// Export to Excel (CSV)
function exportToExcel() {
  if (registrations.length === 0) {
    alert('Chưa có dữ liệu để xuất!');
    return;
  }
  
  let csv = '\uFEFF'; // UTF-8 BOM for Excel
  
  // By Employee section
  csv += 'DANH SACH DANG KY THEO NHAN VIEN\n\n';
  csv += 'STT,Team,Ten nhan vien,Ngan sach,Ma SP,Ten san pham,SL le,SL loc,Thanh tien\n';
  
  let stt = 1;
  registrations.forEach(reg => {
    reg.sanPham.forEach(sp => {
      csv += `${stt++},${reg.team},${reg.tenNhanVien},${reg.allowedBudget},${sp.ma_sp},"${sp.ten_sp}",${sp.sl_le},${sp.sl_loc},${sp.thanh_tien}\n`;
    });
  });
  
  csv += '\n\n';
  
  // By Team section
  csv += 'TONG HOP THEO TEAM\n\n';
  csv += 'Team,So nguoi dang ky,Tong ngan sach,Tong tien da mua,So du chung\n';
  
  const teamSummaryForExport = {};
  registrations.forEach(reg => {
    if (!teamSummaryForExport[reg.team]) {
      teamSummaryForExport[reg.team] = {
        team: reg.team,
        count: 0,
        totalBudget: 0,
        totalSpent: 0
      };
    }
    teamSummaryForExport[reg.team].count += 1;
    teamSummaryForExport[reg.team].totalBudget += reg.allowedBudget;
    teamSummaryForExport[reg.team].totalSpent += reg.tong_tien;
  });
  
  Object.values(teamSummaryForExport).forEach(ts => {
    const remaining = ts.totalBudget - ts.totalSpent;
    csv += `${ts.team},${ts.count},${ts.totalBudget},${ts.totalSpent},${remaining}\n`;
  });
  
  csv += '\n\n';
  
  // By Product section
  csv += 'TONG HOP THEO SAN PHAM\n\n';
  csv += 'Ma SP,Ten san pham,Tong SL le,Tong SL loc,Tong thanh tien\n';
  
  const productSummary = {};
  registrations.forEach(reg => {
    reg.sanPham.forEach(sp => {
      if (!productSummary[sp.ma_sp]) {
        productSummary[sp.ma_sp] = {
          ma_sp: sp.ma_sp,
          ten_sp: sp.ten_sp,
          total_le: 0,
          total_loc: 0,
          total_amount: 0
        };
      }
      productSummary[sp.ma_sp].total_le += sp.sl_le;
      productSummary[sp.ma_sp].total_loc += sp.sl_loc;
      productSummary[sp.ma_sp].total_amount += sp.thanh_tien;
    });
  });
  
  Object.values(productSummary).forEach(ps => {
    csv += `${ps.ma_sp},"${ps.ten_sp}",${ps.total_le},${ps.total_loc},${ps.total_amount}\n`;
  });
  
  // Create download link
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `Dang_ky_nhu_yeu_pham_${new Date().getTime()}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Delete all data
function deleteAllData() {
  if (registrations.length === 0) {
    alert('Không có dữ liệu để xóa!');
    return;
  }
  
  if (confirm('Bạn có chắc chắn muốn xóa tất cả dữ liệu đăng ký?\n\nLưu ý: Thao tác này không thể hoàn tác!')) {
    registrations = [];
    renderSummary();
    alert('Đã xóa tất cả dữ liệu thành công!');
  }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
  initializeProductTable();
  calculateTotal();
});