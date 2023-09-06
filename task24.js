//Разработайте страницу, отображающую таблицу с данными. Данные необходимо подгружать из этого источника.

//Требования:
//данные должны загружаться при загрузке страницы
//необходимо реализовать сортировку по убыванию и по возрастания для всех колонок
//необходимо реализовать клиентскую пагинацию (50 элементов на странице)


const tableBody = document.getElementById('table-body');
const pagination = document.getElementById('pagination');
let data = [];

// Функция для загрузки данных из указанного источника
async function loadData() {
    const response = await fetch('http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true');
    data = await response.json();
    renderTable(1); // Отображаем первую страницу после загрузки данных
}

// Функция для отображения данных в таблице
function renderTable(page) {
    const itemsPerPage = 50; // количество строк на странице
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);

    tableBody.innerHTML = '';

    for (const item of paginatedData) { // заполняю данными страницу
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.fname}</td>
            <td>${item.lname}</td>
            <td>${item.tel}</td>
            <td>${item.address}</td>
            <td>${item.city}</td>
            <td>${item.state}</td>
            <td>${item.zip}</td>
        `;
        tableBody.appendChild(row);
    }

    // Отображение пагинации
    const totalPages = Math.ceil(data.length / itemsPerPage); // округление вверх, количество страниц
    let paginationHTML = '';

    for (let i = 1; i <= totalPages; i++) { // добавляю пагинацию
        paginationHTML += `<button onclick="renderTable(${i})">${i}</button>`;
    }

    pagination.innerHTML = paginationHTML;
}

// Функция для сортировки данных по указанной колонке
function sortTable(columnIndex) {
    data.sort((a, b) => {
        const keyA = a[Object.keys(a)[columnIndex]];
        const keyB = b[Object.keys(b)[columnIndex]];

        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });

    renderTable(1); // Отображаем первую страницу после сортировки
}

// Загрузка данных при загрузке страницы
window.onload = loadData;
